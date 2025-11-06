export const runtime = 'edge'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TOKEN_URL = 'https://oauth2.googleapis.com/token'
const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets'
const SHEETS_API_BASE = 'https://sheets.googleapis.com/v4/spreadsheets'
const TOKEN_TTL_SECONDS = 3600

type JwtHeader = {
  alg: 'RS256'
  typ: 'JWT'
}

type JwtClaims = {
  iss: string
  scope: string
  aud: string
  iat: number
  exp: number
}

export async function POST(request: Request): Promise<Response> {
  let email: string | undefined

  try {
    const body = await request.json()
    if (typeof body?.email === 'string') {
      email = body.email.trim()
    }
  } catch {
    return jsonResponse({ ok: false, error: 'Invalid request body. Expected JSON.' }, { status: 400 })
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return jsonResponse({ ok: false, error: 'Please provide a valid email address.' }, { status: 400 })
  }

  const normalizedEmail = email.toLowerCase()

  try {
    const spreadsheetId = requireEnv('GOOGLE_SHEETS_SPREADSHEET_ID')
    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME?.trim() || 'Waitlisted_Users'
    const serviceAccountEmail = requireEnv('GOOGLE_SERVICE_ACCOUNT_EMAIL')
    const privateKeyPem = requireEnv('GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY')

    const privateKey = await parsePrivateKey(privateKeyPem)

    const nowSeconds = Math.floor(Date.now() / 1000)
    const header: JwtHeader = { alg: 'RS256', typ: 'JWT' }
    const claims: JwtClaims = {
      iss: serviceAccountEmail,
      scope: SHEETS_SCOPE,
      aud: TOKEN_URL,
      iat: nowSeconds,
      exp: nowSeconds + TOKEN_TTL_SECONDS,
    }

    const assertion = await signJwtRS256(header, claims, privateKey)
    const accessToken = await exchangeJwtForAccessToken(assertion)

    const duplicate = await emailExistsInSheet(normalizedEmail, spreadsheetId, sheetName, accessToken)
    if (duplicate) {
      return jsonResponse({ ok: false, error: "You're already on the waitlist." }, { status: 409 })
    }

    await appendEmailRow(normalizedEmail, spreadsheetId, sheetName, accessToken)
    return jsonResponse({ ok: true }, { status: 201 })
  } catch (error) {
    console.error('Failed to process waitlist request', error)
    return jsonResponse(
      { ok: false, error: 'Unable to join the waitlist right now. Please try again soon.' },
      { status: 500 }
    )
  }
}

export function OPTIONS(): Response {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

async function exchangeJwtForAccessToken(assertion: string): Promise<string> {
  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  })

  const data = (await safeJson(response)) as { access_token?: string; error?: string; error_description?: string }

  if (!response.ok) {
    const message = data?.error_description || data?.error || `Token request failed with status ${response.status}`
    throw new Error(message)
  }

  if (!data?.access_token) {
    throw new Error('Token response did not include an access_token')
  }

  return data.access_token
}

async function emailExistsInSheet(
  email: string,
  spreadsheetId: string,
  sheetName: string,
  accessToken: string
): Promise<boolean> {
  const range = buildRange(sheetName, 'A:A')
  const url = `${SHEETS_API_BASE}/${encodeURIComponent(spreadsheetId)}/values/${range}?majorDimension=ROWS`

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (response.status === 404) {
    return false
  }

  if (!response.ok) {
    const data = await safeJson(response)
    const message = typeof data === 'object' && data && 'error' in data ? JSON.stringify(data.error) : null
    throw new Error(message || `Unable to read sheet values (${response.status})`)
  }

  const payload = (await response.json()) as { values?: unknown[][] }
  const rows = Array.isArray(payload.values) ? payload.values : []
  return rows.some((row) => typeof row?.[0] === 'string' && row[0].trim().toLowerCase() === email)
}

async function appendEmailRow(
  email: string,
  spreadsheetId: string,
  sheetName: string,
  accessToken: string
): Promise<void> {
  const range = buildRange(sheetName, 'A:B')
  const url = `${SHEETS_API_BASE}/${encodeURIComponent(spreadsheetId)}/values/${range}:append?valueInputOption=RAW`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values: [[email, new Date().toISOString()]] }),
  })

  if (!response.ok) {
    const data = await safeJson(response)
    const message =
      (typeof data === 'object' && data && 'error' in data && typeof data.error === 'object'
        ? (data.error as { message?: string }).message
        : undefined) || `Unable to append row (${response.status})`
    throw new Error(message)
  }
}

function buildRange(sheetName: string, columns: string): string {
  const trimmed = sheetName.trim() || 'Waitlisted_Users'
  const escaped = trimmed.replace(/'/g, "''")
  return encodeURIComponent(`'${escaped}'!${columns}`)
}

function jsonResponse(body: unknown, init?: ResponseInit): Response {
  const headers = new Headers(init?.headers ?? {})
  headers.set('Content-Type', 'application/json')
  return new Response(JSON.stringify(body), {
    ...init,
    headers,
  })
}

async function safeJson(response: Response): Promise<unknown> {
  try {
    return await response.clone().json()
  } catch {
    return null
  }
}

async function parsePrivateKey(pemOneLine: string): Promise<CryptoKey> {
  const pem = formatPem(pemOneLine)
  const base64 = pem
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s+/g, '')
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i)
  }
  return crypto.subtle.importKey(
    'pkcs8',
    bytes,
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256',
    },
    false,
    ['sign']
  )
}

function formatPem(pemOneLine: string): string {
  const normalized = pemOneLine.replace(/\r/g, '').replace(/\\n/g, '\n').trim()
  if (normalized.includes('-----BEGIN')) {
    return normalized
  }
  const body = normalized.replace(/\s+/g, '')
  const chunks = body.match(/.{1,64}/g) ?? []
  return `-----BEGIN PRIVATE KEY-----\n${chunks.join('\n')}\n-----END PRIVATE KEY-----`
}

async function signJwtRS256(header: JwtHeader, claims: JwtClaims, privateKey: CryptoKey): Promise<string> {
  const encodedHeader = b64url(JSON.stringify(header))
  const encodedPayload = b64url(JSON.stringify(claims))
  const unsignedToken = `${encodedHeader}.${encodedPayload}`
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    privateKey,
    new TextEncoder().encode(unsignedToken)
  )
  const encodedSignature = b64url(signature)
  return `${unsignedToken}.${encodedSignature}`
}

function b64url(data: ArrayBuffer | string): string {
  const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : new Uint8Array(data)
  let binary = ''
  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i])
  }
  const base64 = btoa(binary)
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')
}

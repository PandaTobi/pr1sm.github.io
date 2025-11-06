import { google, sheets_v4 } from "googleapis"
import type { JWT } from "google-auth-library"

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]

let cachedAuth: JWT | null = null
let cachedSheets: sheets_v4.Sheets | null = null

function getEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

function getSheetRange(): string {
  const sheetName =
    process.env.GOOGLE_SHEETS_SHEET_NAME?.trim() || "Waitlist Prism"
  const escapedSheetName = sheetName.replace(/'/g, "''")
  const columnRange = process.env.GOOGLE_SHEETS_WAITLIST_RANGE?.trim() || "A:A"
  return `'${escapedSheetName}'!${columnRange}`
}

async function getAuthClient(): Promise<JWT> {
  if (cachedAuth) {
    return cachedAuth
  }

  const clientEmail = getEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL")
  const privateKey = getEnv("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY").replace(
    /\\n/g,
    "\n"
  )

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: SCOPES,
  })

  await auth.authorize()
  cachedAuth = auth
  return auth
}

async function getSheetsClient(): Promise<sheets_v4.Sheets> {
  if (cachedSheets) {
    return cachedSheets
  }

  const auth = await getAuthClient()
  const sheets = google.sheets({ version: "v4", auth })

  cachedSheets = sheets
  return sheets
}

export async function addEmailToWaitlist(emailRaw: string): Promise<{
  added: boolean
}> {
  const email = emailRaw.trim().toLowerCase()
  if (!email) {
    throw new Error("Email address is required")
  }

  const spreadsheetId = getEnv("GOOGLE_SHEETS_SPREADSHEET_ID")
  const range = getSheetRange()

  const sheets = await getSheetsClient()

  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
    majorDimension: "ROWS",
  })

  const rows = existing.data.values ?? []
  const alreadyPresent = rows.some(
    (row) => typeof row?.[0] === "string" && row[0].trim().toLowerCase() === email
  )

  if (alreadyPresent) {
    return { added: false }
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[email]],
    },
  })

  return { added: true }
}

import { NextResponse } from "next/server"
import { addEmailToWaitlist } from "@/lib/googleSheets"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let email: string | undefined

  try {
    const body = await request.json()
    if (typeof body?.email === "string") {
      email = body.email.trim()
    }
  } catch {
    return NextResponse.json(
      { detail: "Invalid request body. Expected JSON." },
      { status: 400 }
    )
  }

  if (!email) {
    return NextResponse.json(
      { detail: "Email address is required." },
      { status: 400 }
    )
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { detail: "Please provide a valid email address." },
      { status: 400 }
    )
  }

  try {
    const result = await addEmailToWaitlist(email)

    if (!result.added) {
      return NextResponse.json(
        { detail: "You're already on the waitlist." },
        { status: 409 }
      )
    }

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (error) {
    console.error("Failed to upsert waitlist email", error)
    return NextResponse.json(
      {
        detail:
          "Unable to join the waitlist right now. Please try again soon.",
      },
      { status: 500 }
    )
  }
}

export function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}

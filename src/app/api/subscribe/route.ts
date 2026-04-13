import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // TODO: Integrate with email provider (ConvertKit, Mailchimp, Resend, etc.)
    // For now, log and return success.
    console.log(`[subscribe] New subscriber: ${email}`);

    return NextResponse.json({
      message: "You're in. Welcome to the inner circle. Check your inbox.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }
}

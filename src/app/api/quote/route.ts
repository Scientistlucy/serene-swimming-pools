import { NextResponse } from "next/server";

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  projectType?: string;
  message?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: QuotePayload;

  try {
    body = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const location = body.location?.trim() ?? "";
  const projectType = body.projectType?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !phone || !email || !location || !message) {
    return NextResponse.json({ ok: false, error: "Please complete all required fields." }, { status: 400 });
  }

  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    received: { name, phone, email, location, projectType, message },
  });
}

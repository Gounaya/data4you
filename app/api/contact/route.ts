import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { nom, email, telephone, message } = await req.json()

    const response = await fetch(
      "https://formsubmit.co/ajax/osm.gouna@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ nom, email, telephone, message }),
      },
    )

    if (!response.ok) {
      const text = await response.text()
      console.error("Email service error", text)
      return NextResponse.json({ success: false }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

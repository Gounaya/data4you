import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { nom, email, telephone, message } = await req.json()

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY ?? "",
      },
      body: JSON.stringify({
        to: [{ email: "osm.gouna@gmail.com" }],
        sender: {
          email: process.env.BREVO_SENDER_EMAIL ?? "no-reply@data4you.fr",
        },
        subject: `Nouveau message de ${nom}`,
        htmlContent: `
          <p><strong>Nom:</strong> ${nom}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${telephone}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      }),
    })

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

import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "leaflet/dist/leaflet.css"

export const metadata: Metadata = {
  title: "Data4You - Expertise Data, Testing & Dev",
  description:
    "Data4You, cabinet de 20+ experts qui conçoivent, testent et délivrent des produits fiables, performants et mesurables.",
  keywords: "Data, Testing, Développement, ESN, SSII, Banque, Assurance, Retail, Logistique",
  openGraph: {
    title: "Data4You - Expertise Data, Testing & Dev",
    description: "Expertise Data, Testing & Dev, au service de vos résultats.",
    type: "website",
    locale: "fr_FR",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="antialiased">
      <body>{children}</body>
    </html>
  )
}

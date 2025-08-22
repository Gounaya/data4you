import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import "leaflet/dist/leaflet.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Data4You - Expertise Data, Testing & Dev",
  description:
    "Data4You, cabinet de 40+ experts qui conçoivent, testent et délivrent des produits fiables, performants et mesurables.",
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
    <html lang="fr" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}

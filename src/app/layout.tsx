import type { Metadata } from "next"
import { Cormorant } from "next/font/google"
import { IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["300", "400", "500"],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Răzvan Ştirbu",
  description: "Applied Informatics Student & Software Engineer based in Bucharest.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
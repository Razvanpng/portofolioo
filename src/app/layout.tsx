import type { Metadata } from "next"
import { Cormorant, IBM_Plex_Mono } from "next/font/google"
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
  title: "Razvan Stirbu",
  description: "Applied Informatics Student and Software Engineer based in Bucharest. Building raw products from database schemas to the interface.",
  keywords: ["Razvan Stirbu", "Software Engineer", "Applied Informatics", "Portfolio", "Next.js", "TypeScript", "Full-Stack"],
  authors: [{ name: "Razvan Stirbu" }],
  openGraph: {
    title: "Razvan Stirbu",
    description: "Applied Informatics Student and Software Engineer based in Bucharest.",
    url: "https://github.com/Razvanpng",
    siteName: "Razvan Stirbu Portfolio",
    type: "website",
  },
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
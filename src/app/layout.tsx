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

const baseUrl = "https://portofolio-psi-lovat-74.vercel.app"

export const metadata: Metadata = {
  title: "Razvan Stirbu",
  description: "Applied Informatics Student and Software Engineer based in Bucharest. Building raw products from database schemas to the interface.",
  keywords: ["Razvan Stirbu", "Software Engineer", "Applied Informatics", "Portfolio", "Next.js", "TypeScript", "Full-Stack"],
  authors: [{ name: "Razvan Stirbu" }],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Razvan Stirbu",
    description: "Applied Informatics Student and Software Engineer based in Bucharest.",
    url: baseUrl,
    siteName: "Razvan Stirbu Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Razvan Stirbu",
    description: "Applied Informatics Student and Software Engineer based in Bucharest.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Razvan Stirbu",
    jobTitle: "Software Engineer",
    url: baseUrl,
    sameAs: [
      "https://linkedin.com/in/razvan-stirbu",
      "https://github.com/Razvanpng"
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National University of Science and Technology POLITEHNICA Bucharest"
    },
    knowsAbout: ["Full-Stack Development", "TypeScript", "React", "Next.js", "PostgreSQL", "GreenOps"]
  }

  return (
    <html lang="en" className={`${cormorant.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.add('theme-light');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Наутилус — фитнес-клуб нового поколения | Хабаровск",
  description:
    "Современный фитнес-клуб с бассейном 25м, термальным комплексом, детским клубом и 50+ групповых программ. Наутилус Южный, Суворова 25а.",
  keywords: "фитнес клуб, бассейн, тренажерный зал, Хабаровск, Наутилус, термальный комплекс",
  openGraph: {
    title: "Наутилус — фитнес-клуб нового поколения",
    description: "Современный фитнес-клуб с бассейном 25м, термальным комплексом и детским клубом",
    type: "website",
    locale: "ru_RU",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${inter.variable} antialiased`}>
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

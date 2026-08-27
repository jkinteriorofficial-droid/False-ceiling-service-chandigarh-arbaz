import type { Metadata } from "next"
import { DM_Sans, Noto_Sans_Devanagari, Playfair_Display } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const notoHindi = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-noto-hindi" })
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "False Ceiling Service in Chandigarh | Mani Majra",
  description: "Professional false ceiling and interior works in Mani Majra and Chandigarh. Free site visits, transparent pricing, clean installation, and a 1-year written warranty.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${dmSans.variable} ${notoHindi.variable} ${playfair.variable}`}><body>{children}</body></html>
}

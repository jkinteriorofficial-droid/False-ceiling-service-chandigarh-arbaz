import type { Metadata } from "next"
import { DM_Sans, Noto_Sans_Devanagari, Playfair_Display } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const notoHindi = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-noto-hindi" })
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-playfair" })

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#1c2524" }

export const metadata: Metadata = {
  metadataBase: new URL("https://falseceilingservice.com"),
  title: {
    default: "False Ceiling Service in Chandigarh | Mani Majra",
    template: "%s | False Ceiling Service Chandigarh",
  },
  description: "Professional false ceiling and interior work in Mani Majra and Chandigarh. Get clear pricing, a free site visit, neat installation, and a one-year written warranty.",
  alternates: { canonical: "/" },
  keywords: ["false ceiling service Chandigarh", "gypsum false ceiling Mani Majra", "interior work Chandigarh"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://falseceilingservice.com",
    siteName: "False Ceiling Service Chandigarh",
    title: "False Ceiling Service in Chandigarh | Mani Majra",
    description: "Ceilings, partitions, wall panels, TV units, and practical interior work in Chandigarh.",
    images: [{ url: "/images/hero-interior.png", width: 1200, height: 800, alt: "Premium false ceiling interior in Chandigarh" }],
  },
  twitter: { card: "summary_large_image", title: "False Ceiling Service in Chandigarh", description: "Professional ceiling and interior work in Mani Majra and Chandigarh." },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${dmSans.variable} ${notoHindi.variable} ${playfair.variable}`}><body>{children}</body></html>
}

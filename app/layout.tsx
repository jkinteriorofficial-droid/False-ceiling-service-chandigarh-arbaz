import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "False Ceiling Service in Chandigarh | Mani Majra",
  description: "Professional false ceiling and interior works in Mani Majra and Chandigarh. Free site visits, transparent pricing, clean installation, and a 1-year written warranty.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}

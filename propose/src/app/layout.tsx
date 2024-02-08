import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Please Say Yes 😍",
  description: "Propose your Crush / Girlfriend this Valentine with something different",
  authors: {
    name: 'Developed by @Super-Kenil',
    url: 'https://super-kenil.github.io/superkenil'
  }
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fcfcfb] select-none`}>{children}</body>
    </html>
  )
}

import { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Super Kenil',
  description: 'I am a Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

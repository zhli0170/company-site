// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const mono = Roboto_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Company Site',
  description: '…',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

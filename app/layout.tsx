import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jay Jay Ting | Full-Stack Software Engineer',
  description: 'Full-Stack Software Engineer based in Toronto. Specializing in TypeScript, React, Node.js, and real-time systems.',
  keywords: ['Software Engineer', 'Full Stack', 'React', 'TypeScript', 'Node.js', 'Toronto'],
  authors: [{ name: 'Jay Jay Ting' }],
  openGraph: {
    title: 'Jay Jay Ting | Full-Stack Software Engineer',
    description: 'Full-Stack Software Engineer based in Toronto. Specializing in TypeScript, React, Node.js, and real-time systems.',
    url: 'https://jayjayting.github.io',
    siteName: 'Jay Jay Ting',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Jay Jay Ting | Full-Stack Software Engineer',
    description: 'Full-Stack Software Engineer based in Toronto.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

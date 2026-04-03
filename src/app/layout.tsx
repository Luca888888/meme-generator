import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Meme Generator - Create Viral Memes Instantly',
  description: 'Generate hilarious memes instantly with AI. Free, fast, and perfect for going viral on social media!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        {children}
      </body>
    </html>
  )
}

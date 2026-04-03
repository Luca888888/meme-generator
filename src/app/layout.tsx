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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3296203194189883"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        {children}
      </body>
    </html>
  )
}

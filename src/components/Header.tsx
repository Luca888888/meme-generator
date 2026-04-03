'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl">🎭</span>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            MemeAI
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-gray-600 hover:text-primary transition">
            Home
          </Link>
          <Link href="/gallery" className="text-gray-600 hover:text-primary transition">
            Gallery
          </Link>
          <Link href="/tools" className="text-gray-600 hover:text-primary transition">
            Tools
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

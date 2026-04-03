'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg mb-2">🎭 MemeAI - Create Viral Memes Instantly</p>
        <p className="text-gray-400 text-sm">
          Made with ❤️ using AI | Free to use with ads
        </p>
        <div className="mt-4 flex justify-center gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}

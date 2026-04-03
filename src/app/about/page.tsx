import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdBanner from '@/components/AdBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - MemeAI | AI-Powered Meme Generator',
  description: 'Learn about MemeAI - the free AI meme generator that helps you create viral memes instantly.',
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="ad-container mx-4 mt-4">
        <AdBanner type="horizontal" />
      </div>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About MemeAI
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">🎭 What is MemeAI?</h2>
            <p className="text-gray-600 leading-relaxed">
              MemeAI is a free AI-powered meme generator that creates viral memes instantly. 
              Simply enter any topic, and our AI generates hilarious meme text that you can 
              customize and share directly to social media.
            </p>
          </section>
          
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">✨ Features</h2>
            <ul className="space-y-3 text-gray-600">
              <li>🤖 AI-generated meme text from any topic</li>
              <li>📚 Multiple meme templates</li>
              <li>✏️ Custom text input</li>
              <li>🚀 Batch generation (3 at once)</li>
              <li>📤 One-click sharing</li>
              <li>💯 100% Free</li>
            </ul>
          </section>
          
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">💰 How We Make Money</h2>
            <p className="text-gray-600 leading-relaxed">
              We display non-intrusive advertisements to keep MemeAI completely free. 
              This allows us to maintain servers and continue improving the platform 
              without charging users a penny.
            </p>
          </section>
        </div>
      </main>
      
      <div className="ad-container mx-4 mb-4">
        <AdBanner type="horizontal" />
      </div>
      
      <Footer />
    </div>
  )
}

'use client'

import { useState } from 'react'
import MemeGenerator from '@/components/MemeGenerator'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdBanner from '@/components/AdBanner'

export default function Home() {
  const [topic, setTopic] = useState('')

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="ad-container mx-4 mt-4">
        <AdBanner type="horizontal" />
      </div>
      
      <section className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Meme Generator
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Create viral memes in seconds with the power of AI
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter any topic..."
                className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none text-lg"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Try: "working from home", "Monday morning", "AI taking over"
            </p>
          </div>
        </div>

        <MemeGenerator topic={topic} />
      </section>
      
      <div className="ad-container mx-4 mb-4">
        <AdBanner type="horizontal" />
      </div>
      
      <Footer />
    </main>
  )
}

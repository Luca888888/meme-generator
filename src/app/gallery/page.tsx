import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdBanner from '@/components/AdBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery - MemeAI | Trending Memes',
  description: 'Browse trending memes created with MemeAI. See what topics are viral and get inspired!',
}

export default function Gallery() {
  const trendingMemes = [
    { topic: 'AI Taking Over', text: 'When AI does your job better than you', likes: '12.5K' },
    { topic: 'Monday Mood', text: 'Monday: I will not survive this', likes: '8.2K' },
    { topic: 'Remote Work', text: 'Me in meetings all day, doing no work', likes: '15.7K' },
    { topic: 'Code Debugging', text: 'Expected: Works first try\nReality: 47 errors', likes: '9.3K' },
    { topic: 'Coffee Life', text: 'I need coffee before I can human', likes: '21K' },
    { topic: 'Gym Motivation', text: 'Day 1 of going to the gym...', likes: '7.8K' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="ad-container mx-4 mt-4"><AdBanner type="horizontal" /></div>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Trending Memes Gallery
        </h1>
        
        <div className="ad-container mx-auto max-w-4xl mb-8">
          <AdBanner type="rectangle" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingMemes.map((meme, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 min-h-48 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xl font-bold text-black mb-2 uppercase">{meme.topic}</p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 my-3">
                    <p className="text-white text-sm whitespace-pre-line">{meme.text}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-2xl">❤️</span>
                <span className="text-gray-500">{meme.likes} likes</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Create Your Own!</h2>
          <p className="text-gray-600 mb-6">Join thousands of creators making viral memes every day.</p>
          <a href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl">
            Start Creating Now
          </a>
        </div>
      </main>
      
      <div className="ad-container mx-4 mb-4"><AdBanner type="horizontal" /></div>
      <Footer />
    </div>
  )
}

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdBanner from '@/components/AdBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meme Tools - MemeAI | Free Meme Maker Tools',
  description: 'Free online meme maker tools. Caption memes, add text, and create viral content with our easy-to-use tools.',
}

const tools = [
  { name: 'Caption Generator', desc: 'AI-powered captions for any image', icon: '📝', color: 'from-blue-400 to-blue-600' },
  { name: 'Meme Collage Maker', desc: 'Combine multiple memes into one', icon: '🖼️', color: 'from-purple-400 to-purple-600' },
  { name: 'Template Library', desc: 'Browse 1000+ meme templates', icon: '📚', color: 'from-green-400 to-green-600' },
  { name: 'Viral Analyzer', desc: 'Predict which memes will go viral', icon: '📊', color: 'from-orange-400 to-orange-600' },
  { name: 'Batch Creator', desc: 'Create 10+ memes at once', icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Watermark Remover', desc: 'Remove watermarks from memes', icon: '🧹', color: 'from-red-400 to-red-600' },
]

export default function Tools() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="ad-container mx-4 mt-4"><AdBanner type="horizontal" /></div>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Meme Tools
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Powerful tools to level up your meme game. All free to use!
        </p>
        
        <div className="ad-container mx-auto max-w-4xl mb-8">
          <AdBanner type="rectangle" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.icon === '📝' ? 'from-blue-400 to-blue-600' : tool.icon === '🖼️' ? 'from-purple-400 to-purple-600' : tool.icon === '📚' ? 'from-green-400 to-green-600' : tool.icon === '📊' ? 'from-orange-400 to-orange-600' : tool.icon === '⚡' ? 'from-yellow-400 to-yellow-600' : 'from-red-400 to-red-600'} flex items-center justify-center text-3xl mb-4`}>
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
              <p className="text-gray-600">{tool.desc}</p>
              <button className="mt-4 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                Coming Soon
              </button>
            </div>
          ))}
        </div>
        
        <div className="ad-container mx-4 mt-8">
          <AdBanner type="horizontal" />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

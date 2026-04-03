import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdBanner from '@/components/AdBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - MemeAI | Frequently Asked Questions',
  description: 'Common questions about MemeAI - the free AI meme generator.',
}

const faqs = [
  {
    q: 'Is MemeAI really free?',
    a: 'Yes! MemeAI is 100% free to use. We monetize through non-intrusive advertisements.'
  },
  {
    q: 'How does the AI generate memes?',
    a: 'Our AI analyzes your topic and generates relevant, trending meme text that is likely to go viral.'
  },
  {
    q: 'Can I use the memes commercially?',
    a: 'Yes! Memes you create are yours to use however you like.'
  },
  {
    q: 'How do I share a meme?',
    a: 'Click the "Share" button to copy the meme image, then paste it anywhere!'
  },
  {
    q: 'What topics work best?',
    a: 'Trending topics, relatable situations, and current events tend to perform best.'
  },
  {
    q: 'Can I customize the meme text?',
    a: 'Absolutely! You can edit both the top and bottom text before generating.'
  }
]

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="ad-container mx-4 mt-4">
        <AdBanner type="horizontal" />
      </div>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-lg mb-2">Q: {faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </main>
      
      <div className="ad-container mx-4 mb-4">
        <AdBanner type="horizontal" />
      </div>
      
      <Footer />
    </div>
  )
}

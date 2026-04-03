import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdBanner from '@/components/AdBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - MemeAI',
  description: 'Get in touch with MemeAI. We love hearing from you!',
}

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="ad-container mx-4 mt-4"><AdBanner type="horizontal" /></div>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Contact Us
        </h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-bold mb-6">Send us a message</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none" placeholder="Your name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none" placeholder="you@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none">
                  <option>General Inquiry</option>
                  <option>Bug Report</option>
                  <option>Feature Request</option>
                  <option>Partnership</option>
                  <option>Advertising</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none h-32" placeholder="Your message..."></textarea>
              </div>
              
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <p className="text-3xl mb-2">📧</p>
              <p className="font-medium">hello@memeai.app</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <p className="text-3xl mb-2">🐦</p>
              <p className="font-medium">@MemeAI_app</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <p className="text-3xl mb-2">💬</p>
              <p className="font-medium">Discord Community</p>
            </div>
          </div>
        </div>
      </main>
      
      <div className="ad-container mx-4 mb-4"><AdBanner type="horizontal" /></div>
      <Footer />
    </div>
  )
}

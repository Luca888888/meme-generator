import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdBanner from '@/components/AdBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - MemeAI',
  description: 'MemeAI terms of service.',
}

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="ad-container mx-4 mt-4"><AdBanner type="horizontal" /></div>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <p className="text-gray-600 mb-4"><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
          <h2 className="text-xl font-bold mb-4">Acceptance</h2>
          <p className="text-gray-600 mb-4">By using MemeAI, you agree to these terms.</p>
          <h2 className="text-xl font-bold mb-4">Use</h2>
          <p className="text-gray-600 mb-4">MemeAI is free to use for creating memes. You retain rights to memes you create.</p>
          <h2 className="text-xl font-bold mb-4">Prohibited</h2>
          <p className="text-gray-600 mb-4">Do not use MemeAI to create offensive, defamatory, or illegal content.</p>
          <h2 className="text-xl font-bold mb-4">Disclaimer</h2>
          <p className="text-gray-600">MemeAI is provided "as is" without warranties.</p>
        </div>
      </main>
      <div className="ad-container mx-4 mb-4"><AdBanner type="horizontal" /></div>
      <Footer />
    </div>
  )
}

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdBanner from '@/components/AdBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - MemeAI',
  description: 'MemeAI privacy policy and data practices.',
}

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="ad-container mx-4 mt-4"><AdBanner type="horizontal" /></div>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <p className="text-gray-600 mb-4"><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
          <h2 className="text-xl font-bold mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">We do not collect personal information. Memes are generated locally in your browser.</p>
          <h2 className="text-xl font-bold mb-4">Third-Party Ads</h2>
          <p className="text-gray-600 mb-4">We display Google AdSense advertisements. Google may collect data according to their privacy policy.</p>
          <h2 className="text-xl font-bold mb-4">Cookies</h2>
          <p className="text-gray-600 mb-4">We use minimal cookies for site functionality only.</p>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600">Email us at privacy@memeai.app</p>
        </div>
      </main>
      <div className="ad-container mx-4 mb-4"><AdBanner type="horizontal" /></div>
      <Footer />
    </div>
  )
}

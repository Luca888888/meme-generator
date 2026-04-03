'use client'

import { useEffect } from 'react'

interface AdBannerProps {
  type: 'horizontal' | 'vertical' | 'rectangle'
}

export default function AdBanner({ type }: AdBannerProps) {
  const sizes = {
    horizontal: 'h-24 w-full',
    vertical: 'h-96 w-48',
    rectangle: 'h-64 w-full'
  }

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.log('AdSense error:', e)
    }
  }, [])

  return (
    <div className={`${sizes[type]} bg-gray-100 rounded-lg flex flex-col items-center justify-center p-2`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3296203194189883"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3296203194189883"
        crossOrigin="anonymous"
      />
    </div>
  )
}

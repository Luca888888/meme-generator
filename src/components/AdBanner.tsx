'use client'

import { useState } from 'react'

interface AdBannerProps {
  type: 'horizontal' | 'vertical' | 'rectangle'
}

export default function AdBanner({ type }: AdBannerProps) {
  const sizes = {
    horizontal: 'h-24 w-full',
    vertical: 'h-96 w-48',
    rectangle: 'h-64 w-64'
  }

  return (
    <div className={`${sizes[type]} bg-gray-100 rounded-lg flex flex-col items-center justify-center p-4`}>
      <div className="text-center">
        <p className="text-gray-400 text-xs mb-2">Advertisement</p>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 font-medium">Ad Space</p>
            <p className="text-gray-400 text-xs mt-1">Google AdSense</p>
          </div>
        </div>
      </div>
    </div>
  )
}

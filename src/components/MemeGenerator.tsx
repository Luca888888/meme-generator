'use client'

import { useState } from 'react'
import AdBanner from './AdBanner'

const memeTemplates = [
  { id: 1, name: 'Drake Hotline', top: "I don't", bottom: "I do" },
  { id: 2, name: 'Distracted Boyfriend', top: "Old technology", bottom: "New shiny thing" },
  { id: 3, name: 'Two Buttons', top: "Safe choice", bottom: "Risky adventure" },
  { id: 4, name: 'This Is Fine', top: "Everything is fine", bottom: "🔥🔥🔥" },
  { id: 5, name: 'Change My Mind', top: "Controversial take", bottom: "Change my mind" },
  { id: 6, name: 'Surprised Pikachu', top: "When the plan works", bottom: "First try" },
]

const topTexts = [
  "When you finally fix the bug",
  "POV: It's Monday",
  "Me explaining",
  "When they say it's easy",
  "The moment of truth",
  "Reality vs Expectations",
]

const bottomTexts = [
  "and nothing breaks (for once)",
  "but it's only Tuesday",
  "why my code doesn't work",
  "but it's still broken",
  "and it actually works!",
  "is a whole different story",
]

const viralTopics: Record<string, { top: string; bottom: string }[]> = {
  'default': [
    { top: "When the code works", bottom: "First try???" },
    { top: "Me: takes break", bottom: "Also me: 3 hours later" },
    { top: "Expected:", bottom: "Reality:" },
    { top: "Nobody:", bottom: "Me: *creates new project instead*" },
    { top: "When someone says", bottom: "\"It's a quick fix\"" },
  ],
  'work': [
    { top: "5 more minutes", bottom: "Me every morning" },
    { top: "Meeting that", bottom: "could have been an email" },
    { top: "When Friday arrives", bottom: "Pure joy" },
  ],
  'ai': [
    { top: "When AI does your job", bottom: "Time to panic" },
    { top: "ChatGPT:", bottom: "\"I'm just predicting text\"" },
    { top: "Me using AI", bottom: "for everything" },
  ],
  'monday': [
    { top: "Monday:", bottom: "Fight me" },
    { top: "Monday energy", bottom: "0/10" },
  ],
}

interface MemeGeneratorProps {
  topic: string
}

export default function MemeGenerator({ topic }: MemeGeneratorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<number>(1)
  const [customTop, setCustomTop] = useState('')
  const [customBottom, setCustomBottom] = useState('')
  const [generatedMemes, setGeneratedMemes] = useState<Array<{ top: string; bottom: string; template: number }>>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const getTopicKey = (t: string) => {
    const lower = t.toLowerCase()
    if (lower.includes('work') || lower.includes('office')) return 'work'
    if (lower.includes('ai') || lower.includes('chatgpt') || lower.includes('gpt')) return 'ai'
    if (lower.includes('monday') || lower.includes('friday')) return lower.split(' ')[0]
    return 'default'
  }

  const generateMeme = () => {
    setIsGenerating(true)
    
    const topicMemes = viralTopics[getTopicKey(topic)] || viralTopics['default']
    const randomMemes = topicMemes[Math.floor(Math.random() * topicMemes.length)]
    const template = Math.floor(Math.random() * memeTemplates.length) + 1
    
    setTimeout(() => {
      setGeneratedMemes(prev => [
        { 
          top: customTop || randomMemes.top, 
          bottom: customBottom || randomMemes.bottom, 
          template 
        },
        ...prev.slice(0, 4)
      ])
      setIsGenerating(false)
    }, 800)
  }

  const generateBatch = () => {
    setIsGenerating(true)
    const newMemes: Array<{ top: string; bottom: string; template: number }> = []
    const topicMemes = viralTopics[getTopicKey(topic)] || viralTopics['default']
    
    for (let i = 0; i < 3; i++) {
      const randomMemes = topicMemes[Math.floor(Math.random() * topicMemes.length)]
      newMemes.push({
        top: customTop || randomMemes.top,
        bottom: customBottom || randomMemes.bottom,
        template: Math.floor(Math.random() * memeTemplates.length) + 1
      })
    }
    
    setTimeout(() => {
      setGeneratedMemes(prev => [...newMemes, ...prev.slice(0, 2)])
      setIsGenerating(false)
    }, 1500)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Customize</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Top Text</label>
              <input
                type="text"
                value={customTop}
                onChange={(e) => setCustomTop(e.target.value)}
                placeholder="Leave empty for AI generation"
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bottom Text</label>
              <input
                type="text"
                value={customBottom}
                onChange={(e) => setCustomBottom(e.target.value)}
                placeholder="Leave empty for AI generation"
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Template</label>
              <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none"
              >
                {memeTemplates.map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button
              onClick={generateMeme}
              disabled={isGenerating}
              className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:opacity-90 transition disabled:opacity-50"
            >
              {isGenerating ? '✨ Generating...' : '🎭 Generate Meme'}
            </button>
            
            <button
              onClick={generateBatch}
              disabled={isGenerating}
              className="w-full py-3 bg-gray-800 text-white font-bold rounded-xl hover:bg-gray-700 transition disabled:opacity-50"
            >
              🚀 Generate 3 Memes
            </button>
          </div>
        </div>

        <div className="ad-container">
          <AdBanner type="rectangle" />
        </div>
      </div>

      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold mb-4" id="gallery">Generated Memes</h2>
        
        {generatedMemes.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <p className="text-6xl mb-4">🎭</p>
            <p className="text-xl text-gray-500">No memes yet!</p>
            <p className="text-gray-400 mt-2">Click generate to create your first viral meme</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {generatedMemes.map((meme, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 min-h-64 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-black mb-4 uppercase">
                      {meme.top}
                    </p>
                    <div className="my-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8">
                        <p className="text-6xl">🧠</p>
                        <p className="text-white font-bold mt-2">MemeAI</p>
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-black uppercase">
                      {meme.bottom}
                    </p>
                  </div>
                </div>
                <div className="p-4 flex gap-2">
                  <button className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    📤 Share
                  </button>
                  <button className="flex-1 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                    ⬇️ Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

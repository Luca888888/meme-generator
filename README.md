# MemeAI - AI Meme Generator

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-brightgreen" alt="Status">
  <img src="https://img.shields.io/badge/Price-Free-blue" alt="Price">
  <img src="https://img.shields.io/badge/Monetization-Ads-yellow" alt="Monetization">
</p>

## 🎭 Overview

AI-powered meme generator that creates viral memes instantly. Perfect for social media content creators, marketers, and anyone who loves memes.

## ✨ Features

- **AI-Generated Memes** - Enter any topic and get relevant meme ideas
- **Multiple Templates** - Choose from popular meme formats
- **Custom Text** - Add your own top and bottom text
- **Batch Generation** - Generate 3 memes at once
- **Share Ready** - Download and share directly to social media
- **Ad-Supported** - Free to use with non-intrusive ads

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📊 Revenue Model

This app uses **ad-based monetization**:
- Banner ads (horizontal) at top and bottom
- Rectangle ads in sidebar
- Ad placements are strategically positioned for maximum revenue without ruining UX

### To Add Google AdSense:

1. Create an AdSense account at https://adsense.google.com
2. Get your ad client ID
3. Replace the placeholder ad containers with your actual ad code

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Static Export** - Can be hosted anywhere

## 📁 Project Structure

```
meme-generator/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── MemeGenerator.tsx
│       └── AdBanner.tsx
├── public/
├── package.json
└── README.md
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages
3. Deploy from `out` folder

### Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

## 📈 Potential Earnings

Based on industry benchmarks:
- 1,000 page views/day ≈ $5-15/month (with AdSense)
- 10,000 page views/day ≈ $50-150/month
- 100,000 page views/day ≈ $500-1,500/month

## 🤝 Contributing

Contributions welcome! Please open an issue first for major changes.

## 📄 License

MIT License - feel free to use and modify.

---

Made with ❤️ | Powered by AI

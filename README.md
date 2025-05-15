# mikemulligan.net

My personal website built with Next.js, TypeScript, and Tailwind CSS. Visit [mikemulligan.net](https://mikemulligan.net) to see it live.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) for blog posts
- **Deployment**: [Vercel](https://vercel.com)
- **Analytics**: Vercel Analytics and Speed Insights

## Features

- 🌓 Dark/Light mode with system preference detection
- 📱 Fully responsive design
- 🎨 Modern, minimal UI
- ⚡️ Fast page loads and smooth transitions
- 📝 Blog with MDX support
- 🔍 SEO optimized
- 📊 Built-in analytics

## Running Locally

```bash
git clone https://github.com/mullim/mulligan.git
cd mulligan
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   └── page.tsx           # Home page
├── components/            # React components
├── lib/                   # Utility functions
├── public/               # Static assets
└── styles/              # Global styles
```

## Components

- `Container.tsx`: Layout wrapper component
- `Navbar.tsx`: Navigation bar with theme toggle
- `ThemeToggle.tsx`: Dark/light mode switcher
- `ExternalLink.tsx`: External link component with proper attributes
- `SocialLink.tsx`: Social media link component

## Styling

The project uses Tailwind CSS with a custom color scheme:

### Light Mode

- Background: #FAFAFA
- Surface: #FFFFFF
- Primary Text: #1A1A1A
- Secondary Text: #555555
- Accent: #D97706
- Hover: #B45309
- Border: #E5E7EB
- Highlight: #FEF3C7

### Dark Mode

- Background: #0F172A
- Surface: #1E293B
- Primary Text: #F8FAFC
- Secondary Text: #94A3B8
- Accent: #FBBF24
- Hover: #F59E0B
- Border: #334155
- Highlight: #FDE68A

## License

MIT License

## Author

- Mike Mulligan ([@mulligandev](https://twitter.com/mulligandev))

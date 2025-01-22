# Personal Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light mode
- 📱 Fully responsive
- ⚡ Fast and optimized
- 🎨 Modern UI with smooth animations
- 🎯 SEO optimized

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn
- Git

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to GitHub Pages

1. Create a new repository on GitHub named `my-portfolio`

2. Initialize git and push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/my-portfolio.git
git push -u origin main
```

3. Create and switch to a new gh-pages branch:
```bash
git checkout -b gh-pages
```

4. Deploy to GitHub Pages:
```bash
npm run deploy
```

5. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "gh-pages" branch as the source
   - Save the changes

Your portfolio will be available at: `https://your-username.github.io/my-portfolio`

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Radix UI](https://www.radix-ui.com/) - Headless UI components
- [Lucide Icons](https://lucide.dev/) - Icons

## Project Structure

```
my-portfolio/
├── public/          # Static files
├── src/
│   ├── app/         # App routes and pages
│   ├── components/  # React components
│   │   ├── ui/     # UI components
│   │   └── ...     # Other components
│   └── lib/        # Utility functions
├── styles/         # Global styles
└── ...            # Config files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## License

MIT License

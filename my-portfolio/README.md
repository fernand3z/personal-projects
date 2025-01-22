# My Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light mode
- 📱 Fully responsive
- ⚡ Optimized performance
- 🎨 Modern UI with smooth animations
- 🔍 SEO optimized

## Prerequisites

- Node.js 18+
- npm or yarn
- AWS account

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

## Deployment to AWS Amplify

1. **Prepare Your Repository**
   - Ensure your code is pushed to GitHub
   - Your repository should include:
     - `next.config.js`
     - `package.json`
     - `tsconfig.json`
     - All source files

2. **Set Up AWS Amplify**
   - Log in to your AWS Console
   - Go to AWS Amplify
   - Click "New App" → "Host web app"
   - Choose GitHub as your repository source
   - Select your portfolio repository
   - Choose the main/master branch

3. **Configure Build Settings**
   - Amplify will automatically detect Next.js
   - Use this build configuration:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

4. **Deploy**
   - Review your settings
   - Click "Save and deploy"
   - Amplify will provide a URL like `https://main.xxxxx.amplifyapp.com`

5. **Custom Domain (Optional)**
   - In Amplify Console, go to "Domain Management"
   - Click "Add domain"
   - Follow the steps to set up your custom domain
   - AWS will provide SSL/TLS certificate automatically

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

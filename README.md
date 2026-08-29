# 🚀 Mithilesh Angu - Developer Portfolio & System Architecture

A high-performance, modern, and interactive Software Engineer portfolio built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**. Designed with an engineering-first aesthetic featuring interactive architecture diagram modals, live GitHub repository statistics, interactive skill filtering, and a full-featured secret Admin Portal.

![Portfolio Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop)

---

## ✨ Features

- **⚡ Engineering-Focused Design**: Clean dark layout tailored for tech recruiters and engineering managers.
- **📁 Interactive Case Studies & Architecture Modals**: Detailed modal breakdowns for projects featuring:
  - System Architecture Diagrams & Workflows
  - Database schema & storage design
  - Production trade-offs, bottlenecks & technical challenges
  - Live GitHub stats (Stars, Forks, Issues, Commits) and direct repository links
- **🛠️ Dynamic Tech Stack & Skill Matrix**: Filter projects by categories (*Cloud & Distributed Systems*, *Full-Stack Web*, *AI & Machine Learning*, *Tools & DevOps*).
- **🔒 Stealth Admin Portal**: In-browser portal to customize projects, technologies, experience, and profile details without needing an external database.
- **📱 Fully Responsive**: Optimized for desktop, tablets, and mobile devices.
- **📄 Resume Integration**: Quick view and direct PDF download options.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Icons**: Lucide React
- **Animations & Interactivity**: CSS transforms & transitions, smooth scroll behavior
- **Deployment**: Zero-backend static build (compatible with Vercel, Netlify, GitHub Pages, Cloudflare Pages)

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) in your browser.

---

## 🏗️ Building for Production

To create an optimized, static production build:

```bash
npm run build
```

The compiled static files will be placed in the `dist/` directory, ready to be deployed to any static hosting provider.

---

## 🚀 Deployment

### Deploying to Vercel / Netlify / Cloudflare Pages
1. Push your repository to GitHub.
2. Link your GitHub repository in your hosting platform dashboard.
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy!

### Deploying to GitHub Pages
1. Ensure the base path in `vite.config.ts` matches your repository name if not hosting at custom root:
   ```ts
   export default defineConfig({
     base: './', // Ensures relative assets load properly
     // ...
   });
   ```
2. Build and publish your `dist/` branch or use GitHub Actions for automated deployment.

---

## 📬 Contact & Socials

- **Developer**: Mithilesh Angu
- **Email**: [mithi2004lesh@gmail.com](mailto:mithi2004lesh@gmail.com)
- **LinkedIn**: [linkedin.com/in/mithilesh-angu](https://linkedin.com/in/mithilesh-angu)
- **GitHub**: [github.com/mithileshh](https://github.com/mithileshh)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

# Mithilesh Angu - Developer Portfolio & System Architecture
<div align="center">
  <pre>
    __  __ _ _   _     _ _           _     
   |  \/  (_) |_| |__ (_) | ___  ___| |__  
   | |\/| | | __| '_ \| | |/ _ \/ __| '_ \ 
   | |  | | | |_| | | | | |  __/\__ \ | | |
   |_|  |_|_|\__|_| |_|_|_|\___||___/_| |_|
  </pre>
  <p><strong>Software Engineer & Full-Stack Developer</strong></p>
  <p>A modern, high-performance, and interactive developer portfolio showcasing distributed systems, full-stack web applications, system architecture breakdowns, and engineering case studies.</p>
</div>

---

## 🌟 Demo & Preview

<div align="center">
  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" alt="Portfolio Demo" width="100%" />
</div>

---

## 🌐 Live Preview

Check out the live deployment of the portfolio website here:  
👉 [**Live Portfolio Demo**](https://mithilesh-portfolio-lyart.vercel.app/) *(or your deployed Vercel URL)*

---

### 🎯 Project Structure

```bash
portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── AdminPortalModal.tsx      # Secret admin management portal & 1-click code exporter
│   │   ├── ExperienceSection.tsx     # Career & internship interactive timeline
│   │   ├── Footer.tsx                # Social links, quick navigation & subtle admin triggers
│   │   ├── Hero.tsx                  # Developer introduction, headline, badges & quick CTAs
│   │   ├── Navbar.tsx                # Responsive navigation with secret triple-click portal access
│   │   ├── ProjectCard.tsx           # Interactive project preview cards with category filters
│   │   ├── ProjectDetailModal.tsx    # In-depth system architecture diagrams & GitHub case studies
│   │   └── TechStackSection.tsx      # Categorized skill pills with brand logos & proficiency
│   │
│   ├── data/
│   │   └── defaultData.ts            # 👈 Primary static dataset (projects, skills, experience, profile)
│   │
│   ├── utils/
│   │   ├── exportCodeGenerator.ts    # Auto-generates clean TypeScript code from Admin edits
│   │   └── techLogos.ts              # Tech logo resolver (Devicon CDN + custom SVG mappings)
│   │
│   ├── types.ts                      # TypeScript interfaces (Project, Profile, Experience, TechItem)
│   ├── index.css                     # Global Tailwind CSS styles & typography
│   ├── App.tsx                       # Main application state, routes & keyboard shortcuts
│   └── main.tsx                      # React root rendering entry point
│
├── Configuration Files/
│   ├── .gitignore
│   ├── index.html
│   ├── metadata.json
│   ├── package.json
│   ├── PRIVATE_ADMIN_GUIDE.md        # Private reference guide for owner admin access
│   ├── README.md                     # Public repository documentation
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
```

---

## 🧩 Sections of the Portfolio

The portfolio consists of the following engineering-focused sections:

- **⚡ Hero & Introduction**: High-contrast headline, professional bio, direct resume view/download, and verified social badges (GitHub, LinkedIn, Email).
- **📁 Projects & Architecture Case Studies**:
  - Interactive category filtering (*All*, *Distributed Systems*, *Full-Stack Web*, *AI & Machine Learning*, *Tools & DevOps*).
  - Detailed modal view with **ASCII System Architecture Diagrams**, Storage/DB layers, Engineering Trade-offs, Bottlenecks, and Live GitHub metrics (Stars, Forks, Issues, Commits).
- **🛠️ Tech Stack & Skill Matrix**: Categorized tech stack pills featuring official brand icons, color badges, and interactive category tabs.
- **💼 Work Experience**: Interactive career timeline highlighting achievements, key engineering responsibilities, and delivered impact.
- **🔒 Stealth Admin Portal**: Built-in visual editor accessible via secret routes (`/#admin`, `?admin`, <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd>, or triple-clicking the avatar) to update portfolio data with **1-click code export** for zero-cost static deployment.

---

## 💻 Technologies Used

- **Frontend Core:** React 18 with TypeScript & Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React & Devicon CDN
- **Code Export Engine:** Custom in-memory TypeScript AST generator
- **Deployment:** 100% Client-Side Static Build (Optimized for Vercel, Netlify, Cloudflare Pages, GitHub Pages)

---

## ⬇️ Installation & Setup

You will need **Git** and **Node.js** (v18+) to run this project locally.

### 1. Git & Node Check

```bash
# Check Git version
git --version

# Check Node.js version
node --version
```

---

## 🎯 Getting Started

### 1. Clone the Repository 🚀
```bash
git clone https://github.com/mithileshh/portfolio.git
```

### 2. Navigate to the Project Directory 📂
```bash
cd portfolio
```

### 3. Install Dependencies ⚙️
```bash
npm install
```

### 4. Run the Local Development Server 🚀
```bash
npm run dev
```

### 5. View the Project 🌐
Open your browser and visit **`http://localhost:3000`** (or the port shown in your terminal).

---

## 🏗️ Building for Production

To create an optimized, production-ready static build:

```bash
npm run build
```

The compiled output will be generated inside the `dist/` directory, ready to deploy to Vercel or any static host.

---

## 🚀 Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Deploy portfolio to Vercel"
   git push origin main
   ```
2. Log into [Vercel](https://vercel.com) and click **"Add New..." > "Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects the Vite framework preset:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**! Your site is live worldwide in ~30 seconds.

---

## 📬 Contact & Socials

- **Developer**: Mithilesh Angu
- **Email**: [mithi2004lesh@gmail.com](mailto:mithi2004lesh@gmail.com)
- **LinkedIn**: [linkedin.com/in/mithilesh-angu](https://linkedin.com/in/mithilesh-angu)
- **GitHub**: [github.com/mithileshh](https://github.com/mithileshh)

---

## 📝 License
This project is open source and available under the [MIT License](LICENSE).

---

<div align="center"> Crafted with ⚡ and precision by <strong>Mithilesh Angu</strong> </div>

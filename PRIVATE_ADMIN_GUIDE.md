# 🔒 PRIVATE ADMIN & MAINTENANCE GUIDE (For You Only)

> **IMPORTANT**: Keep this document private or for your own reference. It explains how to access the secret Admin Portal, update your static dataset, manage project case studies, and deploy changes without any database or backend costs.

---

## 🔑 1. How to Access the Secret Admin Portal

The public website **does not show an "Admin" button** to recruiters or casual visitors. You can open your private management portal anytime on your live site or in local dev using any of these 3 methods:

| Method | How to Use |
| :--- | :--- |
| **1. Secret URL Hash** | Add `/#admin` or `?admin` to the URL bar (e.g., `https://your-site.com/#admin`) |
| **2. Keyboard Shortcut** | Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> *(or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> on Mac)* |
| **3. Secret Avatar Click** | **Triple-click** your profile avatar or initials in the top-left navigation bar |

---

## ✏️ 2. How to Update Your Portfolio Data

You can customize everything directly inside the Admin Portal:

1. **Projects Tab**:
   - Add new projects or edit existing ones (e.g., *EduNavigator*, *Distributed Cache*, etc.).
   - Configure **Architecture Breakdown**:
     - System architecture diagram / ASCII diagram / workflow steps
     - Storage / Database layer explanation
     - Engineering trade-offs, bottlenecks & technical challenges
     - GitHub URL, demo link, tech tags, and live repository stats.
2. **Tech Stack Tab**:
   - Add or remove technologies (Docker, Kubernetes, Golang, React, Python, PostgreSQL, etc.).
   - Logos and brand colors auto-resolve from the built-in SVG map or `devicon` CDN.
3. **Work Experience Tab**:
   - Add internships, full-time roles, or research positions with bullet points and duration.
4. **Profile Info Tab**:
   - Update bio, headline, social links (GitHub, LinkedIn, LeetCode, CodeChef), and resume URL.

---

## 🚀 3. How to Make Changes Permanent on Your Live Static Site

Because this site is **100% static** (no external database or server required to keep it free and fast):

### The 1-Click Update Flow:
1. Open the Admin Portal (`/#admin`).
2. Make your edits in any tab.
3. Click the **"Static Hosting & Code Export"** tab in the admin navigation.
4. Click **"Copy TypeScript Code"** (or **"Download defaultData.ts"**).
5. Open your local project folder in VS Code / your code editor.
6. Replace the entire content of:
   ```text
   src/data/defaultData.ts
   ```
   with your copied code.
7. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio projects and experience"
   git push origin main
   ```
8. **Done!** Your hosting provider (Vercel, Netlify, Cloudflare, GitHub Pages) will automatically rebuild and deploy your changes worldwide in ~30 seconds.

---

## 💾 4. Backup & State Restore

- **Export JSON**: In the *Static Hosting & Code Export* tab, click **"Export JSON"** to download a single file snapshot of your entire portfolio data (`portfolio-backup.json`).
- **Import JSON**: If you switch computers or clear your browser cache, click **"Import JSON"** to restore your latest configuration instantly.

---

## ⚙️ 5. Optional: Toggle Visible Admin Button for Development

If you want the Admin button to be visible on your navbar while developing locally:
1. Open the Admin Portal (`/#admin`).
2. Go to **Static Hosting & Code Export**.
3. Toggle **"Visible Button in Navbar"** to **ON**.
4. Set it back to **OFF** before exporting for final production hosting.

---

## 📁 File Structure Reference

```text
├── src/
│   ├── components/          # UI Components
│   │   ├── Navbar.tsx       # Header with secret triple-click & optional admin button
│   │   ├── Hero.tsx         # Headline, bio, social badges & primary CTAs
│   │   ├── ProjectCard.tsx  # Project preview cards with tag filtering
│   │   ├── ProjectDetailModal.tsx # Full architecture diagram & deep-dive modal
│   │   ├── TechStackSection.tsx   # Categorized interactive tech skill pills
│   │   ├── ExperienceSection.tsx  # Interactive career timeline
│   │   ├── AdminPortalModal.tsx   # Secret management portal with export tool
│   │   └── Footer.tsx       # Footer navigation
│   ├── data/
│   │   └── defaultData.ts   # 👈 PRIMARY STATIC DATASET (Replace this to update live site)
│   ├── types.ts             # TypeScript interfaces & types
│   ├── utils/
│   │   ├── exportCodeGenerator.ts # Generates clean TypeScript code for defaultData.ts
│   │   └── techLogos.ts     # Tech logo and brand color mapping
│   ├── App.tsx              # Root state & keyboard/route listeners
│   └── main.tsx             # React entry point
├── README.md                # Public GitHub README
└── PRIVATE_ADMIN_GUIDE.md   # 👈 This private reference guide
```

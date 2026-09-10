# Shaik Munthaj — Portfolio & AI Data Lab

<div align="center">

![Shaik Munthaj Banner](public/images/munthaj.jpeg)

# Shaik Munthaj
### **Data Analyst · Machine Learning Specialist · Applied Quantitative Modeller**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/munthaj-shaik-77863a223/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kalesha58)
[![Portfolio](https://img.shields.io/badge/Portfolio-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://github.com/kalesha58/Shaik-Munthaj)
[![Next.js](https://img.shields.io/badge/Next.js%2014-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

<br />

<p align="center">
  A state-of-the-art, high-performance personal portfolio and quantitative research showcase engineered with <b>Next.js 14 (App Router)</b>, <b>TypeScript</b>, and <b>Modern UK Luxury Design Systems</b>.
</p>

</div>

---

## 🌟 Executive Summary

Shaik Munthaj holds a **Master of Science in Applied Modelling and Quantitative Methods (Big Data Analytics)** from **Trent University, Ontario, Canada** (Graduating with High Honors · GPA 3.8 / 4.0). 

His expertise bridges the gap between raw unstructured data, empirical statistical modelling, and production-grade machine learning systems.

---

## ✨ Key Portfolio Highlights & Features

### 1. 📊 Featured Projects with Minimal Case Study Modals
- **Ontario Affordable Housing Delivery Analysis**: Quantitative public policy econometric study analyzing 13 years of SMAIR returns across 47 municipal managers ($R^2 = 0.803 \pm 0.061$).
- **Cryptocurrency Prediction & Trade Recommendation Engine**: Dual-tier time-series forecasting combining PyTorch LSTM recurrent networks with ARIMA and automated trading risk signals.
- **COVID-19 Detection Using Chest X-Ray Imagery**: Clinical transfer learning CNN classification pipeline (VGG16 / ResNet50) with OpenCV CLAHE preprocessing ($94.8\%$ accuracy, $0.96$ ROC-AUC).
- **Online Student Attendance & Grading Management Portal**: Enterprise full-stack application supporting 1,200+ student records with sub-85ms latency.
- **Interactive Case Study Modals**: Modal popups mounted via React Portals displaying problem statements, architecture pipelines, and quantified outcomes.

### 2. 🏛️ Modern UK Segmented Showcase (Capabilities & CV)
- **`01` Technical Capabilities**: Specialisms in AI/ML Engineering, Big Data Analytics, and Full-Stack Systems with interactive category filtering (Languages, ML Frameworks, Cloud, Databases).
- **`02` Academic Pedigree**: Detailed credentials highlighting Trent University and JNTU Kakinada with GPA seals and verified curriculum highlights.
- **`03` Industry Chronicle**: Production-grade experience as Data Science Intern at Exposys Data Labs and Machine Learning Research Analyst at Trent University.

### 3. 📜 Modern UK Credentials & Certifications Gallery
- Interactive credentials gallery with instant category tabs (AI & Data Science, Cloud, CS Fundamentals).
- High-contrast visual banners, serial verification badge numbers, and official issuing body seals.

### 4. 💼 Executive Contact Lounge
- Direct channel cards (Email, Phone, Location, Global Availability).
- One-click copy for email with animated toast feedback.
- Interactive topic focus chips ("Full-Time Opportunity", "Data Science Consulting", "AI/ML Collaboration").
- Direct download for the latest verified Resume.

---

## 🛠️ Technology Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Framework & Core** | Next.js 14 (App Router), React 18, TypeScript |
| **Styling & Aesthetics** | Custom Modern UK Design Tokens, Vanilla CSS, TailwindCSS, Glassmorphism |
| **Icons & Media** | Lucide React, SVG vector charts & custom interactive data visualizations |
| **Typography** | Inter (Google Fonts) & Caveat (Accent Flourishes) |
| **Animations & FX** | IntersectionObserver hooks (`useInView`), Backdrop Blur, Scale & Fade Transitions |
| **Architecture** | Component-Driven Architecture, React Portals for accessible modal dialogs |

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: v18.17.0 or higher
- **npm** / **yarn** / **pnpm** / **bun**

### 1. Clone the repository
```bash
git clone https://github.com/kalesha58/Shaik-Munthaj.git
cd Shaik-Munthaj/munthaj-ai-lab
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## 📁 Repository Structure

```
munthaj-ai-lab/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Modern UK design tokens, components & modal styles
│   ├── layout.tsx           # SEO metadata, OpenGraph cards & font injection
│   └── page.tsx             # Main single-page application assembler
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Sticky blur navigation & mobile hamburger menu
│   │   └── Footer.tsx       # Luxury footer with quick links & social shortcuts
│   ├── sections/
│   │   ├── Hero.tsx         # Executive hero banner with badge pills & CTAs
│   │   ├── About.tsx        # High-level overview & core philosophies
│   │   ├── Stats.tsx        # Quantified career impact counters
│   │   ├── Projects.tsx     # Featured projects grid & Case Study Modal dialogs
│   │   ├── SkillsEducationExperience.tsx # Modern UK 3-part luxury segmented showcase
│   │   ├── Certifications.tsx # Credentials gallery with category filters
│   │   └── Contact.tsx      # Executive Contact Lounge & message form
│   └── ui/                  # Reusable UI primitives (AnimatedSection, Badges, Cards, Icons)
├── data/                    # Type-safe structured datasets
│   ├── profile.ts           # Bio, social links, contact coordinates
│   ├── projects.ts          # Project metadata & CaseStudy definitions
│   ├── skills.ts            # Technical skills matrix
│   ├── education.ts         # Degrees & honors
│   ├── experience.ts        # Industry positions & responsibilities
│   └── certifications.ts    # Official credentials & licenses
├── public/
│   ├── images/              # Profile portraits, custom SVG vectors & project graphics
│   └── resume/              # PDF resume download asset
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📱 Responsive & Accessibility Standards

- **Mobile First**: Fully optimized across standard mobile sizes (375px, 390px, 414px), tablet (768px, 1024px), and desktop displays (1440px+).
- **React Portals**: Modal dialogs escape container coordinate transforms, ensuring 100% viewport alignment on mobile browsers.
- **Accessible Interactions**: Keyboard navigation support (`Escape` key modal dismissal), contrast-checked color palettes, and descriptive ARIA tags.

---

## 📬 Connect & Inquiries

- **LinkedIn**: [linkedin.com/in/munthaj-shaik-77863a223](https://www.linkedin.com/in/munthaj-shaik-77863a223/)
- **GitHub**: [github.com/kalesha58](https://github.com/kalesha58)
- **Location**: Ontario, Canada

---

<div align="center">
  <sub>Designed & Developed with ❤️ by Shaik Munthaj · © 2026 All Rights Reserved</sub>
</div>

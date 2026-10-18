<div align="center">

# ⚡ Kanishk Bairagi Engineering Portfolio & Systems Showcase

### *High-Performance React 19 Architecture • Algorithmic Execution Engines • Production Case Studies*

[![React 19](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.2-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel Deployment](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Core Web Vitals](https://img.shields.io/badge/Lighthouse-96%2B_Score-success?style=for-the-badge&logo=lighthouse&logoColor=white)](https://pagespeed.web.dev/)

<p align="center">
  <a href="#-featured-engineering-projects">Featured Projects</a> •
  <a href="#-technical-architecture--rfc-specs">Architecture & RFC Specs</a> •
  <a href="#-algorithmic-invariants--formal-guarantees">Algorithmic Invariants</a> •
  <a href="#-core-web-vitals--performance-benchmarks">Performance</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-connect--contact">Contact</a>
</p>

---

</div>

## 📌 Overview

This repository houses the source code for the personal engineering portfolio of **Kanishk Bairagi**, designed as a technical portfolio and architectural showcase for Software Engineering Teams.

Beyond conventional portfolio websites, this platform functions as an **interactive engineering dossier**. It pairs production web deployments with formal **Request for Comments (RFC) Technical Design Documents**, interactive algorithmic state engines, asymptotic complexity proofs, and verified telemetry from global student cohorts.

---

## 🚀 Key Highlights & Architectural Metrics

- ⚡ **Zero Layout Shift (CLS 0.00)** & sub-1.1s First Contentful Paint (FCP) across 46 enterprise routes.
- 🌳 **Interactive Invariant Visualizer** with verified runtime bounds: $O(\log N)$ AVL tree balance and $O((V+E)\log V)$ Dijkstra shortest path trees.
- 🌍 **Verified Real-World Telemetry**: Production visualizer evaluated by **151+ international students across 9 countries** with 79% cross-platform mobile adoption.
- 📐 **Formal Graph Theory Engines**: Directed Acyclic Graph (DAG) cycle rejection via 3-color DFS in $O(|V| + |E|)$ and Kahn’s topological sort.
- 🔍 **Sub-2ms Information Retrieval**: Canvas-based $n$-body force-directed physics graph with Okapi BM25 probabilistic ranking ($k_1=1.2, b=0.75$) and prefix Trie lookup in $O(L)$ time.

---

## 💻 Featured Engineering Projects

| Project | Domain & Role | Core Architecture & Algorithmic Rigor | Key Metrics & Invariants | Links |
| :--- | :--- | :--- | :--- | :--- |
| **[Jawam Infotech Official Platform](https://jawaminfotech.com/)** | Enterprise Full-Stack & Frontend Intern (2026) | 46-route React SPA with route-level dynamic code splitting (`React.lazy` / `Suspense`), chunked streaming AI response handling, and automated WebP/AVIF media compression. | **Lighthouse 96+**<br>FCP: 1.05s, LCP: 1.78s<br>Media payload: **-72%** (45MB → 8.2MB) | [Live Demo](https://jawaminfotech.com/) • [GitHub](https://github.com/kanishkbairagi/Jawam-project.git) |
| **[Algorithmic State Engine & Visualizer](https://data-structure-visualizerr.vercel.app)** | Algorithm & Systems Engineering (2025) | Interactive state engine animating AVL tree rotations across 4 archetypes (LL, RR, LR, RL), Dijkstra shortest-path relaxation, and contiguous dynamic array buffer doubling. | **151+ Verified Visitors** (9 Countries)<br>AVL Search: $O(\log N)$<br>Dijkstra: $O((V+E)\log V)$<br>Append: Amortized $O(1)$ | [Live Demo](https://data-structure-visualizerr.vercel.app) • [GitHub](https://github.com/kanishkbairagi/data-structure-visualizerr) |
| **[Topological Knowledge Graph & IR Engine](https://notation-app-six.vercel.app/)** | Systems & Information Retrieval (2025) | HTML5 Canvas $n$-body force-directed physics engine (Coulomb repulsion & Hooke spring relaxation), Okapi BM25 statistical ranking, prefix Trie autocomplete, and BFS pathfinding. | **70+ Verified Users** (7 Countries)<br>Query Latency: **< 1.8ms**<br>Physics: **60 FPS**<br>BFS: $O(\|V\| + \|E\|)$<br>Prefix: $O(L)$ | [Live Demo](https://notation-app-six.vercel.app/) • [GitHub](https://github.com/kanishkbairagi/notation-app.git) |
| **[Visual Habit Graph (VHG)](https://visual-habit-graph.vercel.app/)** | Full-Stack & Systems (2025) | Directed Acyclic Graph (DAG) dependency engine with 3-color DFS cycle rejection in $O(\|V\| + \|E\|)$, Kahn’s topological sort, and Critical Path Method (CPM) dynamic programming. | Cycle Reject: $O(\|V\| + \|E\|)$<br>Topological Sort: $O(\|V\| + \|E\|)$<br>CPM Slack: $0$ critical path | [Live Demo](https://visual-habit-graph.vercel.app/) • [GitHub](https://github.com/kanishkbairagi/visual-habit-graph.git) |
| **[Emoji Mood Diary](https://emoji-based-mood-diary-with-color-a.vercel.app/)** | Interactive Web Apps (2025) | Responsive mood journal with color-adaptive theme switching, Framer Motion micro-animations, and client-side persistence. | Instantaneous transitions<br>Responsive UI states | [Live Demo](https://emoji-based-mood-diary-with-color-a.vercel.app/) • [GitHub](https://github.com/kanishkbairagi/emoji-based-mood-diary-with-color-adaptive-themes.git) |

---

## 🔬 Algorithmic Invariants & Formal Guarantees

Each major project card includes an **Engineering RFC Modal** with mathematical proofs, asymptotic complexity matrices, and architectural node diagrams:

### 1. AVL Tree Balance Invariant & Search Bounds
- **Invariant**: Height differential between subtrees is strictly bounded:
  $$\text{Balance Factor } BF(v) = h(v.\text{left}) - h(v.\text{right}) \in \{-1, 0, +1\}$$
- **Worst-Case Height**: Proved bounded by Fibonacci recursion:
  $$h < 1.4404 \log_2(N + 2) - 0.328 \implies \text{Search Complexity } O(\log N)$$
- **Rotation Archetypes**: Automatic detection and execution of Single (LL, RR) and Double (LR, RL) rotations upon subtree insertion/deletion.

### 2. Directed Acyclic Graph (DAG) 3-Color Cycle Prevention
- **Cycle Detection Invariant**: Classifies graph vertices during depth-first traversal into 3 states:
  - $\text{WHITE}$ (Unvisited vertex)
  - $\text{GRAY}$ (Vertex currently in active recursion stack)
  - $\text{BLACK}$ (Vertex and all downstream descendants fully traversed)
- **Theorem**: Any edge targeting a $\text{GRAY}$ vertex proves a cycle back-edge exists. Edge mutations creating cycles are aborted in $O(|V| + |E|)$ with HTTP 400 and full path cycle diagnostics.

### 3. Critical Path Method (CPM) Dynamic Programming
- **Forward Pass**: Calculates earliest possible completion time:
  $$ES(v) = \max_{(u,v) \in E} EF(u), \quad EF(v) = ES(v) + \text{Duration}(v)$$
- **Backward Pass**: Determines latest allowable completion without delaying the terminal milestone:
  $$LF(u) = \min_{(u,v) \in E} LS(v), \quad LS(u) = LF(u) - \text{Duration}(u)$$
- **Critical Path Identification**: Zero-slack nodes ($\text{Slack}(v) = LF(v) - EF(v) = 0$) are highlighted as routine bottlenecks.

### 4. Okapi BM25 Lexical Ranking Model
- Relevance scoring across inverted index postings lists parameterized for non-linear frequency saturation:
  $$\text{Score}(D, Q) = \sum_{q \in Q} IDF(q) \cdot \frac{f(q, D) \cdot (k_1 + 1)}{f(q, D) + k_1 \cdot \left(1 - b + b \cdot \frac{|D|}{\text{avgdl}}\right)}$$
  *(Configured with calibrated parameters $k_1 = 1.2$ and $b = 0.75$ alongside sub-linear $O(L)$ Trie prefix queries).*

---

## 📊 Core Web Vitals & Performance Benchmarks

Evaluated under automated Google Lighthouse and Chrome User Experience audits:

| Audit Parameter | Target Threshold | Measured Score | Status |
| :--- | :--- | :--- | :--- |
| **Lighthouse Overall** | $\ge 90$ | **96 / 100** | 🟢 Passed |
| **First Contentful Paint (FCP)** | $< 1.8\text{s}$ | **1.05s** | 🟢 Optimal |
| **Largest Contentful Paint (LCP)** | $< 2.5\text{s}$ | **1.78s** | 🟢 Optimal |
| **Cumulative Layout Shift (CLS)** | $< 0.10$ | **0.00** | 🟢 Optimal |
| **Initial Gzipped JavaScript Bundle** | $< 200\text{KB}$ | **< 140 KB** | 🟢 Optimal |
| **Responsive Viewport Support** | $320\text{px} - 4\text{K}$ | **100% Zero-Collision Overflow** | 🟢 Verified |

---

## 🛠️ Tech Stack & Systems Architecture

- **Core Framework**: [React 19](https://react.dev/) (Concurrent Features, Suspense, Custom State Hooks)
- **Tooling & Bundler**: [Vite 7.2](https://vitejs.dev/) with Rollup chunk splitting & HMR
- **Styling & Layout**: [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS + Custom CSS Gradients
- **Animations & Physics**: [Framer Motion 12](https://www.framer.com/motion/) (Hardware-accelerated transforms) & HTML5 Canvas API
- **Icons & Typography**: [Lucide React](https://lucide.dev/), Google Fonts (*Syne* & *Outfit*)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Hosting & Edge Delivery**: [Vercel](https://vercel.com/) with Edge caching & automated CI/CD

---

## 📂 Project Structure

```bash
portfolio/
├── public/                 # Favicons, vector assets, manifest
├── src/
│   ├── assets/             # Optimized WebP/PNG project screenshots & telemetry
│   ├── components/         # Reusable modular UI & interactive components
│   │   ├── About.jsx       # Academic background, skills, and research objectives
│   │   ├── BackToTop.jsx   # Dynamic scroll indicator with responsive viewport logic
│   │   ├── Contact.jsx     # Direct messaging interface & verification
│   │   ├── Footer.jsx      # Social backlinks and navigation indices
│   │   ├── Hero.jsx        # Dynamic typewriter presentation & CTAs
│   │   ├── Navbar.jsx      # Sticky blur header with mobile sheet drawer
│   │   ├── ProjectCard.jsx # Grid cards with expandable skills & modal triggers
│   │   ├── ProjectModal.jsx# Dual-tab RFC Engineering Specs & Telemetry viewer
│   │   └── Projects.jsx    # Flagship showcase, category filters & case studies
│   ├── data/
│   │   └── projects.js     # Mathematical invariants, telemetry data & RFC schemas
│   ├── App.jsx             # Top-level routing and layout composition
│   ├── index.css           # Global Tailwind tokens, scrollbar styling & keyframes
│   └── main.jsx            # React 19 concurrent root mount point
├── package.json            # Dependencies and build scripts
├── tailwind.config.js      # Custom theme colors (accent, ink, cream) and shadows
└── vite.config.js          # Build configurations and optimization plugins
```

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm** or **yarn** / **pnpm**

### Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kanishkbairagi/Kanishk.git
   cd Kanishk
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Launch the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with Hot Module Replacement (HMR).

4. **Compile for production:**
   ```bash
   npm run build
   ```

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 📬 Connect & Contact

- **Author**: **Kanishk Bairagi**
- **Email**: [kanishk.bairagi00@gmail.com](mailto:kanishk.bairagi00@gmail.com)
- **LinkedIn**: [linkedin.com/in/kanishk-bairagi-bb20a641a](https://www.linkedin.com/in/kanishk-bairagi-bb20a641a/)
- **GitHub**: [github.com/kanishkbairagi](https://github.com/kanishkbairagi)
- **Phone**: `(+91) 9294769479`

---

<div align="center">
  <sub>Designed & engineered with architectural precision by <b>Kanishk Bairagi</b>. Open-sourced under the MIT License.</sub>
</div>

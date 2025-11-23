# Portfolio Redesign Plan

## Vision
A mature, intentional, and engineering-forward portfolio that conveys polish, taste, and confidence. It serves as a hybrid space: a professional snapshot of a modern frontend engineer and a "digital playground" for creative depth.

## Design Philosophy & Inspirations
Drawing from the best elements of modern design engineers:

*   **Emil Kowalski:** Ruthless minimalism, confident whitespace, and text-driven project listings.
*   **Dmytro (pqoqubbw):** Personality through typography, grid discipline, and a warm, craft-driven intro tone.
*   **Julian Shapiro:** The "digital playground" framing—treating the site as a living knowledge space.
*   **Justin Farrugia:** A disciplined, resume-like professional snapshot on the homepage.
*   **Cooper Saye:** A single, authoritative paragraph to anchor personal identity.
*   **Raphael Salaja:** Subtle personality and controlled interactions.
*   **Paco Coursey:** Clean categorization (Building/Projects/Writing) and philosophical micro-copy.

---

## Information Architecture
The site structure is flattened to five core sections:

1.  **Home** (Identity & Snapshot)
2.  **About** (Narrative & Philosophy)
3.  **Work** (Engineering Case Studies)
4.  **Experiments** (Playground & Prototypes)
5.  **Journal** (Creative Output)
6.  **Contact** (Access)

---

## Page-by-Page Breakdown

### 1. HOME (Identity Snapshot)
**Goal:** Establish identity in 5–8 seconds with clarity and taste.

*   **Name & Title:** "Faris Ashai — Software Engineer"
*   **One-Liner:** "Building thoughtful software at scale with a focus on UI systems, interaction design, and product reliability."
*   **Subline:** "I value clarity, craft, and engineering that feels inevitable."
*   **Navigation:** Primary links (Work, About, Experiments) and secondary links (GitHub, LinkedIn, Email).
*   **Style:** Minimal, editorial, quiet.

### 2. ABOUT (The Narrative)
**Goal:** Explain engineering identity + creative roots in a coherent narrative.

*   **Professional Identity:** Focus on frontend infra, product systems, performance, and developer experience.
*   **Creative Identity:** How photography (composition), music (rhythm/interaction), and writing (clarity) inform engineering.
*   **Values & Principles:**
    *   Build for durability.
    *   Prefer clarity over cleverness.
    *   Beauty = correctness + restraint.
*   **Now (Optional):** What is currently being explored or studied.

### 3. WORK (Engineering)
**Goal:** Show depth, maturity, and rigor with brevity.

*   **Format:** Text-driven list (Emil/Paco style).
*   **Item Structure:** Project Name, 1-line description, Tech focus, Outcome/Impact.
*   **Case Studies:** Deep dives into "What was built → Why it mattered → Engineering decisions → Tradeoffs → Retrospective".

### 4. EXPERIMENTS (The Playground)
**Goal:** Show curiosity, prototyping, and lessons (Julian Shapiro style).

*   **Content:** UI prototypes, interaction studies, performance tests, micro-libraries, tiny essays.
*   **Format:** Tightly designed grid of cards.
*   **Page Detail:** Exploration goal, learnings, result, code snippet/demo.

### 5. JOURNAL (Creative)
**Goal:** Reveal the person behind the engineer in a refined way.

*   **Content:** Photography drops, essays, music, reflections.
*   **Structure:** Single chronological feed or clean tabs (Writing / Photos / Music).
*   **Vibe:** Editorial and quiet, avoiding loud social-media layouts.

### 6. CONTACT
**Goal:** Frictionless professional access.

*   **Elements:** Email, GitHub, LinkedIn, Resume (PDF), optional Calendly.
*   **Micro-copy:** Openness to interesting collaborations or research.

---

## Visual Direction
*   **Typography:** High-contrast pairing.
    *   **Serif:** For headings, editorial content, and creative sections (Taste/Emotion).
    *   **Sans-serif:** For body, engineering content, and UI elements (Clarity/System).
*   **Layout:** Strict grid discipline (Dmytro), generous whitespace (Emil).
*   **Interactions:** Subtle, meaningful motion (Framer Motion). No gimmicks.
*   **Palette:** Monochrome/neutral basics (Black, Off-white) with a muted accent color only where necessary.

## Tech Stack
*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS
*   **Content:** MDX (for Case Studies, Experiments, Journal)
*   **Animation:** Framer Motion
*   **Hosting:** Vercel
*   **Font Loading:** `next/font`

## Content Strategy (MVP)
*   **Work:** 3–5 strong engineering projects/case studies.
*   **Experiments:** 6–12 smaller prototypes or interaction explorations.
*   **Journal:** 2 photo sets, 2–3 essays, 1 music link to start.


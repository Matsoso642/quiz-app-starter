# Quiz App Starter

Starter template for the ACA orientation quiz project. Fork this repo and build your own quiz app.

## Your README goes here

### 1. What it is

Our quiz app allows users to create and take quizzes across different categories. Users can select the category they’re interested in and choose a difficulty level, with assessments adjusted accordingly.

What makes this app unique is the customization: we designed the UI to match our vision and added icons to enhance the overall look and feel, making the experience more engaging and user-friendly.

### 2. Live demo

Link to your deployed Vercel URL.

### 3. How to run locally

```bash
git clone git@github.com:Matsoso642/quiz-app-starter.git
cd quiz-app-starter
npm install
npm run dev
```

### 4. What you learned

A short reflection — what concepts clicked, what was hard, what you'd do differently.

---

## Project structure

quiz-app-starter/
├── .git/ — Git repository metadata
├── .github/ — GitHub workflow/configuration files
├── .gitignore — Files and folders excluded from Git
├── eslint.config.js — ESLint rules and linting setup
├── index.html — App shell loaded by Vite
├── node_modules/ — Installed dependencies
├── package-lock.json — Exact npm dependency versions
├── package.json — Project metadata and scripts
├── public/ — Static assets served by Vite
│ └── favicon.svg — Browser tab icon
├── README.md — Project overview and usage instructions
├── src/ — Application source code
│ ├── App.css — App layout and page-level styling
│ ├── App.tsx — Root React component and route configuration
│ ├── components/ — Reusable UI components
│ │ ├── ActionButtons.tsx — Result page action buttons
│ │ ├── CategoryBreakdown.tsx — Per-category score breakdown
│ │ ├── CategoryCard.tsx — Single category card display
│ │ ├── CategoryGrid.tsx — Category selection grid
│ │ ├── CircularScore.tsx — Circular accuracy visualization
│ │ ├── DifficultyCard.tsx — Difficulty selection and start UI
│ │ ├── DifficultyOption.tsx — Individual difficulty option button
│ │ ├── Header.tsx — Page title and subtitle header
│ │ ├── Navbar.tsx — Sidebar navigation UI
│ │ ├── ResultsHeader.tsx — Results summary heading
│ │ ├── ReviewItem.tsx — Single question review row
│ │ ├── ReviewList.tsx — Review questions list
│ │ └── SummaryCards.tsx — Score, accuracy, and time cards
│ ├── data/ — Quiz data files
│ │ ├── categories.ts — Category definitions and metadata
│ │ └── questions.ts — Quiz question bank and answers
│ ├── hooks/ — Custom React hooks
│ │ ├── useLocalStorage.ts — Local storage state helper
│ │ └── useQuiz.ts — Quiz state management helper
│ ├── index.css — Global app styling
│ ├── main.tsx — React entrypoint and app mount
│ ├── Pages/ — Page-level route components
│ │ ├── ActiveQuizPage.css — Styles for active quiz page
│ │ ├── ActiveQuizPage.tsx — Active quiz question flow
│ │ ├── Homepage.tsx — Landing page with quiz start button
│ │ ├── QuizPage.tsx — Category and difficulty selection page
│ │ └── ResultsPage.tsx — Final quiz results display
│ ├── ResultsPage.css — Results page specific styles
│ └── types/ — TypeScript type definitions
│ ├── quiz.ts — Question and quiz data types
│ └── results.ts — Results and answer record types
├── tsconfig.app.json — TypeScript config for app code
├── tsconfig.json — Base TypeScript configuration
├── tsconfig.node.json — TypeScript config for Node tooling
└── vite.config.ts — Vite build and dev server configuration

## Scripts

| Command           | What it does                           |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start the dev server at localhost:5173 |
| `npm run build`   | Type-check and build for production    |
| `npm run lint`    | Run ESLint                             |
| `npm run preview` | Preview the production build locally   |

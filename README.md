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

## Starter structure

```
src/
├── components/     ← Build your UI components here
├── data/
│   └── questions.ts   ← Your quiz questions (1 example included)
├── hooks/
│   └── useLocalStorage.ts  ← Optional helper for persisting state
├── types/
│   └── quiz.ts        ← Question type definition
├── App.tsx            ← Your starting point
├── App.css            ← Minimal styles — make it your own
├── index.css          ← Base reset
└── main.tsx           ← Entry point (no need to edit)
```

## Scripts

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start the dev server at localhost:5173 |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

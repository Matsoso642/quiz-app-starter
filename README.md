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

src/
│
├── Pages/                     # Main application pages
│   ├── ActiveQuizPage.css     # Styles for the active quiz page
│   ├── ActiveQuizPage.tsx     # Component for the active quiz interface
│   ├── Homepage.tsx           # Landing page component
│   ├── QuizPage.tsx           # Quiz-taking page
│   ├── ResultsPage.tsx        # Displays quiz results
│
├── components/                # Reusable UI components
│   ├── ActionButtons.tsx
│   ├── CategoryBreakdown.tsx
│   ├── CategoryCard.tsx
│   ├── CategoryGrid.tsx
│   ├── CircularScore.tsx
│   ├── DifficultyCard.tsx
│   ├── DifficultyOption.tsx
│   ├── Header.tsx
│   ├── Navbar.tsx
│   ├── ResultsHeader.tsx
│   ├── ReviewItem.tsx
│   ├── ReviewList.tsx
│   ├── SummaryCards.tsx
│
├── data/                      # Static data and mock content
│   ├── categories.ts
│   ├── questions.ts
│
├── hooks/                     # Custom React hooks
│   ├── useLocalStorage.ts
│   ├── useQuiz.ts
│
├── types/                     # TypeScript type definitions
│   ├── quiz.ts
│   ├── results.ts
│
├── App.css                    # Global app styles
├── App.tsx                    # Root component
├── ResultsPage.css            # Styles for results page
├── index.css                  # Global CSS imports
├── main.tsx                   # Application entry point
│
└── README.md                  # Project documentation

```

## Scripts

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start the dev server at localhost:5173 |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

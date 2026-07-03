import "../ResultsPage.css";
import SummaryCards from "../components/SummaryCards";
import ResultsHeader from "../components/ResultsHeader";
import ReviewList from "../components/ReviewList";
import CircularScore from "../components/CircularScore";
import ActionButtons from "../components/ActionButtons";
import CategoryBreakdown from "../components/CategoryBreakdown";

//mock data swap for state logic

const MOCK_SCORE = 8;
const MOCK_TOTAL = 10;
const MOCK_ACCURACY = Math.round((MOCK_SCORE / MOCK_TOTAL) * 100);
const MOCK_TIME_TAKEN = "4.32";

const MOCK_CATEGORY_BREAKDOWN = [
  { category: "git", correct: 3, total: 4 },
  { category: "react", correct: 3, total: 4 },
  { category: "typescript", correct: 3, total: 4 },
  { category: "devtools", correct: 3, total: 4 },
  { category: "deployment", correct: 3, total: 4 },
  { category: "html-css", correct: 3, total: 4 },
];

const MOCK_REVIEW = [
  {
    id: 1,
    question: "What does `git clone` do?",
    isCorrect: true,
    yourAnswer: "Downloads a repository from GitHub to your machine",
    correctAnswer: "Downloads a repository from GitHub to your machine",
    explanation:
      "git clone creates a local copy of a remote repository, including its full commit history.",
  },
  {
    id: 2,
    question: "What is the purpose of a `.gitignore` file?",
    isCorrect: false,
    yourAnswer: "Stores your GitHub login credentials",
    correctAnswer: "Specifies files and folders Git should not track",
    explanation:
      ".gitignore tells Git which files or directories to exclude from version control, like node_modules or .env files.",
  },
  {
    id: 3,
    question: "What is a React component?",
    isCorrect: true,
    yourAnswer: "A reusable piece of UI, typically a function that returns JSX",
    correctAnswer:
      "A reusable piece of UI, typically a function that returns JSX",
    explanation:
      "Components are the building blocks of a React app — reusable functions that return UI described in JSX.",
  },
];

function getPerformanceLabel(accuracy: number) {
  if (accuracy >= 90) return "Outstanding";
  if (accuracy >= 70) return "Great job";
  if (accuracy >= 50) return "Good effort";
  return "Keep practicing";
}

export default function ResultsPage() {
  return (
    <div className="results-wrapper">
      <ResultsHeader
        score={MOCK_SCORE}
        total={MOCK_TOTAL}
        performanceLabel={getPerformanceLabel(MOCK_ACCURACY)}
      />

      <SummaryCards
        score={MOCK_SCORE}
        total={MOCK_TOTAL}
        accuracy={MOCK_ACCURACY}
        timeTaken={MOCK_TIME_TAKEN}
      />

      <CircularScore
        accuracy={MOCK_ACCURACY}
        label={getPerformanceLabel(MOCK_ACCURACY)}
      />

      <CategoryBreakdown data={MOCK_CATEGORY_BREAKDOWN} />

      <ReviewList items={MOCK_REVIEW} />

      <ActionButtons />
    </div>
  );
}

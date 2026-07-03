import "../ResultsPage.css";
import SummaryCards from "../components/SummaryCards";
import ResultsHeader from "../components/ResultsHeader";
import ReviewList from "../components/ReviewList";
import CircularScore from "../components/CircularScore";
import ActionButtons from "../components/ActionButtons";
import CategoryBreakdown from "../components/CategoryBreakdown";

import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { AnswerRecord, QuizResultsState } from "../types/results";

const STORAGE_KEY = "quiz-app:last-results";
const LEADERBOARD_KEY = "quiz-app:leaderboard";

function getPerformanceLabel(accuracy: number) {
  if (accuracy >= 90) return "Outstanding";
  if (accuracy >= 70) return "Great job";
  if (accuracy >= 50) return "Good effort";
  return "Keep practicing";
}

function formatTime(totalSeconds: number): string {
  const safeSeconds = Math.max(0, Math.round(totalSeconds));
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function buildReviewItems(answers: AnswerRecord[]) {
  return answers.map((answer) => ({
    id: answer.question.id,
    question: answer.question.question,
    isCorrect: answer.isCorrect,
    yourAnswer:
      answer.selectedAnswer !== null
        ? answer.question.options[answer.selectedAnswer]
        : "No answer",
    correctAnswer: answer.question.options[answer.question.correctAnswer],
    explanation: answer.question.explanation,
  }));
}

function buildCategoryBreakdown(answers: AnswerRecord[]) {
  const byCategory = new Map<string, { correct: number; total: number }>();
  for (const answer of answers) {
    const category = answer.question.category;
    const entry = byCategory.get(category) ?? { correct: 0, total: 0 };
    entry.total += 1;
    if (answer.isCorrect) entry.correct += 1;
    byCategory.set(category, entry);
  }
  return Array.from(byCategory.entries()).map(([category, stats]) => ({
    category,
    ...stats,
  }));
}

export default function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Prefer results passed via navigate("/results", { state }); fall back to
  // sessionStorage so a page refresh doesn't lose them.
  const resultsState = useMemo<QuizResultsState | null>(() => {
    const fromRouter = location.state as QuizResultsState | undefined;
    if (fromRouter?.answers?.length) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromRouter));
      return fromRouter;
    }
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as QuizResultsState) : null;
  }, [location.state]);

  const answers = resultsState?.answers ?? [];
  const timeTakenSeconds = resultsState?.timeTakenSeconds ?? 0;

  const score = answers.filter((a) => a.isCorrect).length;
  const total = answers.length;
  const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;
  const timeTaken = formatTime(timeTakenSeconds);
  const performanceLabel = getPerformanceLabel(accuracy);

  const categoryBreakdown = useMemo(
    () => buildCategoryBreakdown(answers),
    [answers],
  );
  const reviewItems = useMemo(() => buildReviewItems(answers), [answers]);

  // Record this attempt for the leaderboard once, when results first load.
  useEffect(() => {
    if (!resultsState || total === 0) return;
    const entry = {
      score,
      total,
      accuracy,
      timeTakenSeconds,
      date: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem(LEADERBOARD_KEY) ?? "[]");
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify([...existing, entry]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultsState]);

  if (!resultsState || total === 0) {
    return (
      <div className="results-wrapper text-center py-5">
        <p className="text-muted mb-3">No quiz results to show yet.</p>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Start a Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="results-wrapper">
      <ResultsHeader
        score={score}
        total={total}
        performanceLabel={performanceLabel}
      />

      <SummaryCards
        score={score}
        total={total}
        accuracy={accuracy}
        timeTaken={timeTaken}
      />

      <CircularScore accuracy={accuracy} label={performanceLabel} />

      <CategoryBreakdown data={categoryBreakdown} />

      <ReviewList items={reviewItems} />

      <ActionButtons />
    </div>
  );
}

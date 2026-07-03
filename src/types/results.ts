import type { Question } from "./quiz";

/** A single question paired with what the user actually answered. */
export interface AnswerRecord {
  question: Question;
  /** Index into question.options, or null if the user skipped it. */
  selectedAnswer: number | null;
  isCorrect: boolean;
}
/** Everything the quiz-taking page needs to hand off to the results page. */
export interface QuizResultsState {
  answers: AnswerRecord[];
  timeTakenSeconds: number;
}

/** Per-category score, derived from answers. */
export interface CategoryStat {
  category: string;
  correct: number;
  total: number;
  percentage: number;
}

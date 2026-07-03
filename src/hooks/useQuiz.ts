import { useMemo, useState } from "react";
import type { Question } from "../types/quiz";

interface SelectedAnswers {
  [questionId: number]: number;
}

interface UseQuizReturn {
  currentQuestion: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswers: SelectedAnswers;
  score: number;
  isFinished: boolean;
  isLastQuestion: boolean;
  hasSelectedAnswer: boolean;

  selectAnswer: (answerIndex: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  submitQuiz: () => void;
  restartQuiz: () => void;
}

export function useQuiz(questions: Question[]): UseQuizReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const totalQuestions = questions.length;

  const isLastQuestion = currentIndex === totalQuestions - 1;

  const hasSelectedAnswer =
    currentQuestion && selectedAnswers[currentQuestion.id] !== undefined;

  const score = useMemo(() => {
    return questions.reduce((total, question) => {
      return (
        total +
        (selectedAnswers[question.id] === question.correctAnswer ? 1 : 0)
      );
    }, 0);
  }, [questions, selectedAnswers]);

  const selectAnswer = (answerIndex: number) => {
    if (!currentQuestion) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answerIndex,
    }));
  };

  const nextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const submitQuiz = () => {
    setIsFinished(true);
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsFinished(false);
  };

  return {
    currentQuestion,
    currentIndex,
    totalQuestions,
    selectedAnswers,
    score,
    isFinished,
    isLastQuestion,
    hasSelectedAnswer,

    selectAnswer,
    nextQuestion,
    previousQuestion,
    submitQuiz,
    restartQuiz,
  };
}

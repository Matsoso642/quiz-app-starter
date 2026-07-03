// src/Pages/ActiveQuizPage.tsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ActiveQuizPage.css";
import type { Question } from "../types/quiz";
import type { AnswerRecord } from "../types/results";
import questions from "../data/questions";

const TIMER_SECONDS = { easy: 15, medium: 11.25, hard: 7.5 };

export default function ActiveQuizPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const routeQuestions: Question[] =
    location.state?.selectedQuestions ?? questions;
  const rawDifficulty = (
    location.state?.selectedDifficulty as string | undefined
  )?.toLowerCase();
  const difficulty: "easy" | "medium" | "hard" =
    rawDifficulty === "easy" || rawDifficulty === "hard"
      ? rawDifficulty
      : "medium";

  const TOTAL_QUESTIONS = routeQuestions.length;
  // Per-question budget × question count = one continuous clock for the
  // whole quiz. Adjust this if you'd rather TIMER_SECONDS be the total
  // quiz duration outright, regardless of question count.
  const totalTime = TIMER_SECONDS[difficulty] * TOTAL_QUESTIONS;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(totalTime);

  // Answers collected so far, plus when the quiz started (for elapsed time).
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [startTime] = useState(() => Date.now());

  const currentQuestion: Question = routeQuestions[currentIndex];
  const CURRENT_QUESTION = currentIndex + 1;
  const progressPercent = (CURRENT_QUESTION / TOTAL_QUESTIONS) * 100;
  const timerPercent = (timeLeft / totalTime) * 100;
  const timerWarning = timerPercent <= 50;
  const timerDanger = timerPercent <= 25;

  // Records an answer and moves to the next question, or finishes the quiz
  // and navigates to /results.
  const handleAdvance = (answerIndex: number | null) => {
    const answerRecord: AnswerRecord = {
      question: currentQuestion,
      selectedAnswer: answerIndex,
      isCorrect:
        answerIndex !== null && answerIndex === currentQuestion.correctAnswer,
    };
    const updatedAnswers = [...answers, answerRecord];

    if (currentIndex + 1 < TOTAL_QUESTIONS) {
      setAnswers(updatedAnswers);
      setCurrentIndex((index) => index + 1);
      setSelectedOption(null);
      return;
    }

    const timeTakenSeconds = Math.round((Date.now() - startTime) / 1000);
    navigate("/results", {
      state: { answers: updatedAnswers, timeTakenSeconds },
    });
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    handleAdvance(selectedOption);
  };

  const handleExit = () => {
    navigate("/");
  };

  // Called once the overall quiz clock reaches 0. Records the current
  // question's answer (possibly unanswered) and marks every remaining
  // question as unanswered too, so the results page still sees a complete,
  // correctly-scored answers array.
  const handleQuizTimeUp = () => {
    const currentAnswer: AnswerRecord = {
      question: currentQuestion,
      selectedAnswer: selectedOption,
      isCorrect:
        selectedOption !== null &&
        selectedOption === currentQuestion.correctAnswer,
    };
    const remainingUnanswered: AnswerRecord[] = routeQuestions
      .slice(currentIndex + 1)
      .map((question) => ({
        question,
        selectedAnswer: null,
        isCorrect: false,
      }));

    const updatedAnswers = [...answers, currentAnswer, ...remainingUnanswered];
    const timeTakenSeconds = Math.round((Date.now() - startTime) / 1000);

    navigate("/results", {
      state: { answers: updatedAnswers, timeTakenSeconds },
    });
  };

  // Single continuous countdown for the whole quiz — it does NOT reset when
  // currentIndex changes, only when this effect re-runs due to timeLeft
  // itself changing.
  useEffect(() => {
    if (timeLeft <= 0) {
      handleQuizTimeUp();
      return;
    }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  return (
    <div className="active-quiz-wrapper">
      {/* ── Top bar: category + timer ── */}
      <div className="aq-topbar">
        <span className="aq-category-badge">
          <i className="bi bi-git me-1" />
          {currentQuestion.category}
        </span>

        <div
          className={`aq-timer ${timerWarning ? "aq-timer-warning" : ""} ${timerDanger ? "aq-timer-danger" : ""}`}
        >
          <div className="aq-timer-ring">
            <svg viewBox="0 0 36 36" className="aq-timer-svg">
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="2.5"
              />
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                strokeWidth="2.5"
                strokeDasharray={`${timerPercent} 100`}
                strokeDashoffset="25"
                strokeLinecap="round"
                className="aq-timer-arc"
              />
            </svg>
            <span className="aq-timer-label">{timeLeft}s</span>
          </div>
        </div>
      </div>

      {/* ── Progress bar + question count ── */}
      <div className="aq-progress-section">
        <div className="aq-progress-track">
          <div
            className="aq-progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="aq-progress-label">
          {CURRENT_QUESTION}/{TOTAL_QUESTIONS}
        </span>
      </div>

      {/* ── Question card ── */}
      <div className="aq-question-card">
        <p className="aq-question-number">Question {CURRENT_QUESTION}</p>
        <h2 className="aq-question-text">{currentQuestion.question}</h2>
      </div>

      {/* ── Answer options ── */}
      <div className="aq-options-list">
        {currentQuestion.options.map((option, index) => (
          <div
            key={index}
            className={`aq-option ${index === selectedOption ? "aq-option-selected" : ""}`}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedOption(index)}
            onKeyDown={(e) => e.key === "Enter" && setSelectedOption(index)}
          >
            <span className="aq-option-letter">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="aq-option-text">{option}</span>
            {index === selectedOption && (
              <i className="bi bi-check-circle-fill aq-option-check" />
            )}
          </div>
        ))}
      </div>

      {/* ── Footer: exit + next ── */}
      <div className="aq-footer">
        <button
          className="btn btn-outline-secondary aq-btn-back"
          onClick={handleExit}
        >
          <i className="bi bi-x me-1" />
          Exit
        </button>
        <button
          className="btn btn-primary aq-btn-next"
          onClick={handleNext}
          disabled={selectedOption === null}
        >
          {currentIndex + 1 < TOTAL_QUESTIONS ? "Next" : "Finish"}
          <i className="bi bi-arrow-right ms-1" />
        </button>
      </div>
    </div>
  );
}

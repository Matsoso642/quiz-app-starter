// src/Pages/ActiveQuizPage.tsx
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ActiveQuizPage.css";
import type { Question } from "../types/quiz";
import type { AnswerRecord } from "../types/results";
import questions from "../data/questions";

const TIMER_SECONDS = { easy: 7.5, medium: 11.25, hard: 15 };
const DIFFICULTY: "easy" | "medium" | "hard" = "medium";
const TIME_LEFT = 28;

export default function ActiveQuizPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const routeQuestions: Question[] =
    location.state?.selectedQuestions ?? questions;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Answers collected so far, plus when the quiz started (for elapsed time).
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [startTime] = useState(() => Date.now());

  const currentQuestion: Question = routeQuestions[currentIndex];
  const TOTAL_QUESTIONS = routeQuestions.length;
  const CURRENT_QUESTION = currentIndex + 1;
  const progressPercent = (CURRENT_QUESTION / TOTAL_QUESTIONS) * 100;
  const timerMax = TIMER_SECONDS[DIFFICULTY];
  const timerPercent = (TIME_LEFT / timerMax) * 100;
  const timerWarning = timerPercent <= 40;
  const timerDanger = timerPercent <= 20;

  const handleNext = () => {
    if (selectedOption === null) return;

    const answerRecord: AnswerRecord = {
      question: currentQuestion,
      selectedAnswer: selectedOption,
      isCorrect: selectedOption === currentQuestion.correctAnswer,
    };
    // Use a local variable rather than relying on the (async) state update,
    // since we need the complete, up-to-date array immediately below.
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

  const handleExit = () => {
    navigate("/");
  };

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
            <span className="aq-timer-label">{TIME_LEFT}s</span>
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

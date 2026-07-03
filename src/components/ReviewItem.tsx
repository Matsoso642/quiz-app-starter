import { useState } from "react";

interface ReviewEntry {
  id: number;
  question: string;
  isCorrect: boolean;
  yourAnswer: string;
  correctAnswer: string;
  explanation: string;
}

export default function ReviewItem({ item }: { item: ReviewEntry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="review-item">
      <div
        className="d-flex align-items-start gap-2 review-item-header"
        role="button"
        tabIndex={0}
        onClick={() => setExpanded((e) => !e)}
        onKeyDown={(e) => e.key === "Enter" && setExpanded((v) => !v)}
      >
        <i
          className={`bi ${item.isCorrect ? "bi-check-circle-fill text-success" : "bi-x-circle-fill text-danger"} mt-1`}
        />
        <div className="flex-grow-1">
          <p className="mb-0">{item.question}</p>
        </div>
        <i className={`bi ${expanded ? "bi-chevron-up" : "bi-chevron-down"} text-muted`} />
      </div>

      {expanded && (
        <div className="review-item-details mt-2 ps-4">
          <p className="mb-1 small">
            <strong>Your answer:</strong> {item.yourAnswer}
          </p>
          {!item.isCorrect && (
            <p className="mb-1 small">
              <strong>Correct answer:</strong> {item.correctAnswer}
            </p>
          )}
          <p className="mb-0 small text-muted">{item.explanation}</p>
        </div>
      )}
    </div>
  );
}
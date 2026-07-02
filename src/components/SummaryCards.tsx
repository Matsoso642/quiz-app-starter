interface SummaryCardsProps {
  score: number;
  total: number;
  accuracy: number;
  timeTaken: string;
}

export default function SummaryCards({ score, total, accuracy, timeTaken }: SummaryCardsProps) {
  const cards = [
    { icon: "bi-award", label: "Score", value: `${score}/${total}` },
    { icon: "bi-bullseye", label: "Accuracy", value: `${accuracy}%` },
    { icon: "bi-clock-history", label: "Time Taken", value: timeTaken },
  ];

  return (
    <div className="row g-3 mb-4">
      {cards.map((card) => (
        <div className="col-md-4" key={card.label}>
          <div className="card shadow-sm summary-card">
            <div className="card-body d-flex align-items-center gap-3">
              <i className={`bi ${card.icon} summary-card-icon`} />
              <div>
                <p className="mb-0 text-muted small">{card.label}</p>
                <h4 className="mb-0 fw-bold">{card.value}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
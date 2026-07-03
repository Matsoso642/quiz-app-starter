interface CircularScoreProps {
  accuracy: number;
  label: string;
}

export default function CircularScore({ accuracy, label }: CircularScoreProps) {
  const circumference = 2 * Math.PI * 15.9;

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body d-flex flex-column align-items-center py-4">
        <div className="circular-score-ring">
          <svg viewBox="0 0 36 36" className="circular-score-svg">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#E5E7EB" strokeWidth="2.5" />
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              strokeWidth="2.5"
              strokeDasharray={`${circumference} 100`}
              strokeDashoffset="25"
              strokeLinecap="round"
              className="circular-score-arc"
            />
          </svg>
          <span className="circular-score-label">{accuracy}%</span>
        </div>
        <p className="mt-3 fw-semibold mb-0">{label}</p>
      </div>
    </div>
  );
}
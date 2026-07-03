interface CategoryStat {
  category: string;
  correct: number;
  total: number;
}

interface CategoryBreakdownProps {
  data: CategoryStat[];
}

export default function CategoryBreakdown({ data }: CategoryBreakdownProps) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="mb-3">Category Breakdown</h5>
        {data.map((stat) => {
          const percent = Math.round((stat.correct / stat.total) * 100);
          return (
            <div key={stat.category} className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="text-capitalize">{stat.category}</span>
                <span className="text-muted small">
                  {stat.correct}/{stat.total}
                </span>
              </div>
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${percent}%`, backgroundColor: "#4F46E5" }}
                  aria-valuenow={percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
import { useMemo } from "react";
import Header from "../components/Header";

interface LeaderboardEntry {
  id: string;
  score: number;
  total: number;
  accuracy: number;
  category: string;
  timeTaken: string;
  date: string;
}

export default function LeaderboardPage() {
  const leaderboardData = useMemo<LeaderboardEntry[]>(() => {
    const stored = localStorage.getItem("quiz-app:leaderboard");
    if (!stored) return [];
    
    try {
      const entries = JSON.parse(stored) as LeaderboardEntry[];
      // Format dates consistently and sort by accuracy (descending), then by score (descending)
      const formatted = entries.map((entry) => ({
        ...entry,
        date: entry.date && entry.date.includes("T") 
          ? new Date(entry.date).toLocaleDateString() 
          : entry.date || "",
      }));
      return formatted.sort((a, b) => {
        if (b.accuracy !== a.accuracy) {
          return b.accuracy - a.accuracy;
        }
        return b.score - a.score;
      });
    } catch {
      return [];
    }
  }, []);

  const stats = useMemo(() => {
    if (leaderboardData.length === 0) {
      return {
        totalQuizzes: 0,
        averageAccuracy: 0,
        bestScore: 0,
        topCategory: "N/A",
      };
    }

    const totalQuizzes = leaderboardData.length;
    const averageAccuracy = Math.round(
      leaderboardData.reduce((sum, entry) => sum + entry.accuracy, 0) /
        totalQuizzes
    );
    const bestScore = Math.max(...leaderboardData.map((e) => e.accuracy));
    
    const categoryStats = leaderboardData.reduce(
      (acc, entry) => {
        acc[entry.category] = (acc[entry.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );
    
    const topCategory =
      Object.entries(categoryStats).sort((a, b) => b[1] - a[1])[0]?.[0] ||
      "N/A";

    return { totalQuizzes, averageAccuracy, bestScore, topCategory };
  }, [leaderboardData]);

  return (
    <>
      <Header
        title="Leaderboard & Stats"
        subtitle="View your quiz performance and track your progress"
      />

      {/* Stats Cards */}
      <div className="container mt-4">
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <i className="bi bi-controller" style={{ fontSize: "2rem", color: "#4f46e5" }} />
                <p className="text-muted mt-2 mb-1">Total Quizzes</p>
                <h3 className="fw-bold">{stats.totalQuizzes}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <i className="bi bi-percent" style={{ fontSize: "2rem", color: "#10b981" }} />
                <p className="text-muted mt-2 mb-1">Average Accuracy</p>
                <h3 className="fw-bold">{stats.averageAccuracy}%</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <i className="bi bi-trophy" style={{ fontSize: "2rem", color: "#f59e0b" }} />
                <p className="text-muted mt-2 mb-1">Best Score</p>
                <h3 className="fw-bold">{stats.bestScore}%</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <i className="bi bi-graph-up" style={{ fontSize: "2rem", color: "#ef4444" }} />
                <p className="text-muted mt-2 mb-1">Top Category</p>
                <h3 className="fw-bold text-capitalize">{stats.topCategory}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="container">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title mb-3">Quiz History</h5>
            {leaderboardData.length === 0 ? (
              <p className="text-muted text-center py-4">
                No quizzes completed yet. <a href="/quiz">Start a quiz</a> to see your stats here!
              </p>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>#</th>
                      <th>Category</th>
                      <th>Score</th>
                      <th>Accuracy</th>
                      <th>Time</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((entry, index) => (
                      <tr key={`${entry.id}-${index}`}>
                        <td className="fw-bold">{index + 1}</td>
                        <td className="text-capitalize">{entry.category || "mixed"}</td>
                        <td>{entry.score}/{entry.total}</td>
                        <td>
                          <span
                            className="badge"
                            style={{
                              backgroundColor:
                                entry.accuracy >= 80
                                  ? "#10b981"
                                  : entry.accuracy >= 60
                                    ? "#f59e0b"
                                    : "#ef4444",
                            }}
                          >
                            {entry.accuracy}%
                          </span>
                        </td>
                        <td>{entry.timeTaken}</td>
                        <td className="text-muted">{entry.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

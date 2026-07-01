// src/components/DifficultyCard.tsx
import DifficultyOption from "./DifficultyOption";

const difficulties = [
  { id: "easy", label: "Easy", description: "Beginner friendly", color: "#22C55E" },
  { id: "medium", label: "Medium", description: "Moderate challenge", color: "#F59E0B" },
  { id: "hard", label: "Hard", description: "Advanced level", color: "#EF4444" },
];

interface DifficultyCardProps {
  selected: string | null;
  onSelect: (id: string) => void;
  canStart: boolean;
}

function DifficultyCard({ selected, onSelect, canStart }: DifficultyCardProps) {
  return (
    <div className="card difficulty-card">
      <div className="card-body">
        <h5 className="mb-3">Difficulty</h5>
        {difficulties.map((d) => (
          <DifficultyOption key={d.id} label={d.label} description={d.description} color={d.color}
            selected={selected === d.id} onSelect={() => onSelect(d.id)} />
        ))}
        <button className="btn btn-primary w-100 mt-3" disabled={!canStart}>
          <i className="bi bi-play-fill me-2" />Start Quiz
        </button>
      </div>
    </div>
  );
}

export default DifficultyCard;
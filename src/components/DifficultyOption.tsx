// src/components/DifficultyOption.tsx
interface DifficultyOptionProps {
  label: string;
  description: string;
  color: string;
  selected: boolean;
  onSelect: () => void;
}

function DifficultyOption({ label, description, color, selected, onSelect }: DifficultyOptionProps) {
  return (
    <div
      className={`difficulty-option ${selected ? "difficulty-option-selected" : ""}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect()}
    >
      <span className="difficulty-dot" style={{ background: color }} />
      <div>
        <div className="fw-semibold">{label}</div>
        <div className="difficulty-description">{description}</div>
      </div>
    </div>
  );
}

export default DifficultyOption;
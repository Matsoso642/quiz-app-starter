import type { Category } from "../data/categories";

interface CategoryCardProps {
  category: Category;
  selected: boolean;
  onSelect: () => void;
}

function CategoryCard({ category, selected, onSelect }: CategoryCardProps) {
  return (
    <div
      className={`card category-card h-100 ${selected ? "category-card-selected" : ""}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect()}
    >
      <div className="card-body d-flex justify-content-between align-items-start">
        <div className="d-flex gap-3">
          <div className="category-icon" style={{ background: category.iconBg, color: category.iconColor }}>
            <i className={`bi ${category.icon}`} />
          </div>
          <div>
            <h5 className="mb-1">{category.title}</h5>
            <p className="category-description mb-0">{category.description}</p>
          </div>
        </div>
        <span className="badge category-badge">{category.questionCount}<br />Questions</span>
      </div>
    </div>
  );
}

export default CategoryCard;
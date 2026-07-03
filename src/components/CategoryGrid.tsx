import CategoryCard from "../components/CategoryCard";
import type { Category } from "../data/categories";

interface CategoryGridProps {
  categories: Category[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

function CategoryGrid({ categories, selectedId, onSelect }: CategoryGridProps) {
  return (
    <div>
      <h2 className="section-title">Categories</h2>
      <div className="row g-3">
        {categories.map((cat) => (
          <div className="col-md-6" key={cat.id}>
            <CategoryCard
              category={cat}
              selected={cat.id === selectedId}
              onSelect={() => onSelect(cat.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;

// src/pages/QuizPage.tsx
import { useState } from "react";
import Header from "../components/Header";
import CategoryGrid from "../components/CategoryGrid";
import DifficultyCard from "../components/DifficultyCard";
import categories from "../data/categories";

function QuizPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null,
  );
  const canStart = selectedCategory !== null && selectedDifficulty !== null;

  return (
    <>
      <Header
        title="Quiz"
        subtitle="Choose a category and difficulty to start your quiz"
      />
      <div className="container-fluid px-0">
        <div className="row g-4">
          <div className="col-lg-9">
            <CategoryGrid
              categories={categories}
              selectedId={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
          <div className="col-12">
            <DifficultyCard
              selected={selectedDifficulty}
              onSelect={setSelectedDifficulty}
              canStart={canStart}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizPage;

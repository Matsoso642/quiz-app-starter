import ReviewItem from "./ReviewItem";

interface ReviewEntry {
  id: number;
  question: string;
  isCorrect: boolean;
  yourAnswer: string;
  correctAnswer: string;
  explanation: string;
}

interface ReviewListProps {
  items: ReviewEntry[];
}

export default function ReviewList({ items }: ReviewListProps) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="mb-3">Question Review</h5>
        <div className="review-list-scroll">
          {items.map((item) => (
            <ReviewItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="display-4">Welcome to Beta Quiz</h1>
      <p className="lead">
        Sharpen your development skills with quizzes covering Git, GitHub,
        React, TypeScript, Node.js, npm, ESLint, and more. Learn, practice, and
        grow one question at a time. {questions.length} quesions
        {questions.length !== 1 ? "s" : ""} loaded
      </p>
      <div className="text-cente">
        <button className="btn btn-primary" onClick={() => navigate("/quiz")}>
          Start Quiz
        </button>
      </div>
    </>
  );
}

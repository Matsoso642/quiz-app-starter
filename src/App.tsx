import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import questions from "./data/questions";
import "./App.css";
import Navbar from "./components/Navbar";
import QuizPage from "./Pages/QuizPage";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        {started ? (
          <QuizPage />
        ) : (
          <>
            <h1 className="display-4">Welcome To Beta Quiz</h1>
            <p className="lead">
              Sharpen your development skills with quizzes covering Git, GitHub, React, TypeScript,
              Node.js, npm, ESLint, and more. Learn, practice, and grow one question at a time.{" "}
              {questions.length} question{questions.length !== 1 ? "s" : ""} loaded
            </p>
            <div className="text-center">
              <button className="btn btn-primary" onClick={() => setStarted(true)}>
                Start Quiz
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;

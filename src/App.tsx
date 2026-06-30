import "bootstrap/dist/css/bootstrap.min.css";
import questions from "./data/questions";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-layout">
        <Navbar/>

        <main className="main-content">
          <h1 className="display-4">Welcome To Beta Quiz</h1>
          <p className="lead">Sharpen your development skills with quizzes covering Git, GitHub, React, TypeScript, Node.js, npm, ESLint, and more. Learn, practice, and grow one question at a time. {questions.length} question{questions.length !== 1 ? "s" : ""} loaded</p>
      <div className="text-center">
        <button className="btn btn-primary">Start Quiz</button>
      </div>
        </main>
      </div>
  );      


}
export default App;

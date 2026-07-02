import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import ActiveQuizPage from "./Pages/ActiveQuizPage";
import Navbar from "./components/Navbar";
import ResultsPage from"./Pages/ResultsPage";

import QuizPage from "./Pages/QuizPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/active-quiz" element={<ActiveQuizPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

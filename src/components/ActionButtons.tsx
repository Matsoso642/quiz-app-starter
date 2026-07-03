import { useNavigate } from "react-router-dom";

export default function ActionButtons() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
      <button className="btn btn-primary" onClick={() => navigate("/quiz")}>
        <i className="bi bi-arrow-repeat me-1" />
        Try Again
      </button>
         
      <button className="btn btn-outline-secondary" onClick={() => navigate("/")}>
        <i className="bi bi-house me-1" />
        Home
      </button>
    </div>
  );
}
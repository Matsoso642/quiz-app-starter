import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <button
        className="btn btn-dark d-md-none sidebar-toggle"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <i className="bi bi-list" />
      </button>

      {open && (
        <div
          className="sidebar-backdrop d-md-none"
          onClick={() => setOpen(false)}
        />
      )}

      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <h2>Team Beta</h2>
          <button
            className="btn-close-custom d-md-none"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/quiz" onClick={closeMenu}>
                <i className="bi bi-plus-circle" /> New Quiz
              </Link>
            </li>
            <li>
              <Link to="/leaderboard" onClick={closeMenu}>
                <i className="bi bi-trophy" /> Leaderboard & Stats
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Navbar;
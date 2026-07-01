import {useState} from "react";

function Navbar(){

    const[open, setOpen] = useState(false);

    return(
        <>
        <button
        className="btn btn-dark d-md-none sidebar-toggle"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        >
        <i className="bi bi-list" />
        </button>

        {open && <div className="sidebar-backdrop d-md-none" onClick={() => setOpen(false)} />}

        <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
            <div className="sidebar-header">
            <h2>Team Beta</h2>
             <button className="btn-close-custom d-md-none" onClick={() => setOpen(false)} aria-label="Close menu">
                        <i className="bi bi-x-lg" />
                    </button>
                </div>


            <nav>
                    <ul>
                        <li><a href="#"><i className="bi bi-plus-circle" /> New Quiz</a></li>
                        <li><a href="#"><i className="bi bi-bar-chart" /> Stats</a></li>
                        <li><a href="#"><i className="bi bi-eye" /> Review</a></li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Navbar;
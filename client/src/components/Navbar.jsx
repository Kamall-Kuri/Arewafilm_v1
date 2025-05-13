
import movies from "../server/movies.json";
import "../css/Navbar.css";

function Navbar({ selectedDub, setSelectedDub }) {
  const uniqueDubs = [
    "All",
    ...new Set(movies.map((movie) => movie.dubbed_by)),
  ];

  return (
    <nav className="navbar">
      <ul className="dub-list">
        {uniqueDubs.map((dub, index) => (
          <li
            key={index}
            className={`dub-item ${selectedDub === dub ? "active" : ""}`}
            onClick={() => setSelectedDub(dub)}
          >
            {dub}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

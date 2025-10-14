import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-700 text-white py-4 px-6 shadow-md flex flex-wrap justify-between items-center">
      {/* App title / logo */}
      <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-300">
        📖 Bible Quiz App
      </Link>

      {/* Navigation links */}
      <ul className="flex flex-wrap gap-4 text-sm md:text-base font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 underline"
                : "hover:text-yellow-300 transition-colors"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/daily-verse"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 underline"
                : "hover:text-yellow-300 transition-colors"
            }
          >
            Daily Verse
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/verse-lookup"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 underline"
                : "hover:text-yellow-300 transition-colors"
            }
          >
            Verse Lookup
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 underline"
                : "hover:text-yellow-300 transition-colors"
            }
          >
            Quiz
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 underline"
                : "hover:text-yellow-300 transition-colors"
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

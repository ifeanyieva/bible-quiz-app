import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install with: npm i lucide-react

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white py-4 px-6 shadow-md flex justify-between items-center relative">
      {/* App title / logo */}
      <Link
        to="/"
        className="text-xl sm:text-2xl font-bold tracking-wide hover:text-yellow-300"
      >
        📖 Bible Quiz App
      </Link>

      {/* Hamburger icon (mobile only) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none"
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Navigation links (desktop view) */}
      <ul className="hidden md:flex gap-4 text-sm md:text-base font-medium">
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

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-blue-800 flex flex-col items-center space-y-4 py-4 md:hidden z-10">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
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
              onClick={() => setMenuOpen(false)}
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
              onClick={() => setMenuOpen(false)}
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
              onClick={() => setMenuOpen(false)}
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
              onClick={() => setMenuOpen(false)}
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
      )}
    </nav>
  );
};

export default NavBar;
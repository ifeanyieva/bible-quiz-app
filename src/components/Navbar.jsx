import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-blue-600 text-white">
      <h1 className="font-bold">Bible Quiz</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/verse">Verse Lookup</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

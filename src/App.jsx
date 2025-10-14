import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import DailyVerse from "./components/DailyVerse";
import VerseLookup from "./pages/VerseLookup";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily-verse" element={<DailyVerse />} />
          <Route path="/verse-lookup" element={<VerseLookup />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

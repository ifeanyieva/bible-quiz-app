// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import DailyVerse from "./components/DailyVerse";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import VerseLookup from "./pages/VerseLookup";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/daily-verse" element={<DailyVerse />} />
            <Route path="/about" element={<About />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/verse-lookup" element={<VerseLookup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

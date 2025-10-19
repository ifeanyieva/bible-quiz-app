// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar"; // ✅ Ensure the filename matches exactly
import DailyVerse from "./components/DailyVerse";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import VerseLookup from "./pages/VerseLookup";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/* ✅ Fixed Navbar on top for mobile */}
        <NavBar />

        <main className="flex-grow p-4 sm:p-6 md:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/daily-verse" element={<DailyVerse />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/verse-lookup" element={<VerseLookup />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
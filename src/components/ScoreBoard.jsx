// src/components/ScoreBoard.jsx
import React from "react";

const ScoreBoard = ({ score, current, total }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-lg px-6 py-3 w-full max-w-lg mb-4">
      <p className="text-blue-700 font-semibold">
        Score: <span className="font-bold">{score}</span>
      </p>
      <p className="text-gray-600">
        Question {current} / {total}
      </p>
    </div>
  );
};

export default ScoreBoard;

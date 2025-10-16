// src/components/QuestionCard.jsx
import React from "react";

const QuestionCard = ({ question, options, selectedAnswer, onSelect }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-lg mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {question}
      </h2>

      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option)}
            className={`border rounded-lg px-4 py-2 text-left transition-colors duration-200 ${
              selectedAnswer === option
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-blue-100"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;

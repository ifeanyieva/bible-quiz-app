import React from "react";

export default function QuestionCard({ question, answers, onAnswer, selected, correct }) {
  const getButtonClass = (answer) => {
    if (!selected) return "bg-blue-600 hover:bg-blue-700";
    if (answer === correct) return "bg-green-600";
    if (answer === selected) return "bg-red-600";
    return "bg-gray-400";
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all duration-300">
      {/* Question text */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 leading-snug">
        {question}
      </h2>

      {/* Answers grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(answer)}
            disabled={!!selected}
            className={`w-full text-sm sm:text-base md:text-lg text-white font-medium py-2 sm:py-3 md:py-3.5 px-4 rounded-xl transition duration-200 ease-in-out transform hover:scale-[1.02] ${getButtonClass(
              answer
            )}`}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
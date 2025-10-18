import React from "react";

export default function QuestionCard({ question, answers, onAnswer, selected, correct }) {
  const getButtonClass = (answer) => {
    if (!selected) return "bg-blue-600 hover:bg-blue-700";
    if (answer === correct) return "bg-green-600";
    if (answer === selected) return "bg-red-600";
    return "bg-gray-400";
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{question}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(answer)}
            disabled={!!selected}
            className={`text-white font-medium py-2 px-4 rounded-lg transition duration-200 ${getButtonClass(
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

// src/components/QuizControls.jsx
import React from "react";

const QuizControls = ({ onNext, disabled, isLastQuestion }) => {
  return (
    <div className="flex justify-end w-full max-w-lg mt-4">
      <button
        onClick={onNext}
        disabled={disabled}
        className={`px-6 py-2 rounded-lg font-semibold text-white transition ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isLastQuestion ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default QuizControls;

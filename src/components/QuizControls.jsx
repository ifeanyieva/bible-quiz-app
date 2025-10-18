import React from "react";

export default function QuizControls({ current, total, onNext, isLocked }) {
  return (
    <div className="flex justify-between items-center mt-6">
      <p className="text-gray-600 font-medium">
        Question {current} of {total}
      </p>

      {isLocked && (
        <button
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg font-medium transition duration-200"
        >
          Next Question →
        </button>
      )}
    </div>
  );
}

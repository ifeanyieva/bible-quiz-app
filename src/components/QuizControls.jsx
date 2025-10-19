import React from "react";

export default function QuizControls({ current, total, onNext, isLocked }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 sm:gap-0 text-center sm:text-left">
      {/* Question progress */}
      <p className="text-gray-600 font-medium text-sm sm:text-base md:text-lg">
        Question <span className="font-semibold text-blue-700">{current}</span> of{" "}
        <span className="font-semibold text-blue-700">{total}</span>
      </p>

      {/* Next button */}
      {isLocked && (
        <button
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 sm:px-8 rounded-lg font-medium text-sm sm:text-base transition duration-200 ease-in-out transform hover:scale-[1.02]"
        >
          Next Question →
        </button>
      )}
    </div>
  );
}
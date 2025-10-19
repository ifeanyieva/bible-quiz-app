import React from "react";

export default function ScoreBoard({ score, total, restart, questions, userAnswers }) {
  return (
    <div className="text-center px-3 sm:px-6 md:px-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 mb-3">
        🎉 Quiz Complete!
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
        You scored{" "}
        <span className="font-semibold text-blue-600 text-lg sm:text-xl">
          {score}
        </span>{" "}
        out of{" "}
        <span className="font-semibold text-gray-900 text-lg sm:text-xl">
          {total}
        </span>
      </p>

      {/* ✅ Detailed Summary Section */}
      <div className="text-left bg-gray-50 rounded-xl p-3 sm:p-4 md:p-6 max-h-[70vh] overflow-y-auto shadow-inner">
        <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg">
          Review Your Answers:
        </h3>

        <ul className="space-y-4">
          {questions.map((q, index) => {
            const isCorrect = userAnswers[index] === q.correct_answer;
            return (
              <li
                key={index}
                className="border-b pb-3 sm:pb-4 last:border-none transition-colors duration-200"
              >
                <p className="font-medium text-gray-900 text-sm sm:text-base md:text-lg">
                  {index + 1}. {q.question}
                </p>

                <p
                  className={`mt-1 text-sm sm:text-base ${
                    isCorrect ? "text-green-600" : "text-red-600"
                  }`}
                >
                  Your answer: {userAnswers[index] || "No answer"}
                </p>

                {!isCorrect && (
                  <p className="text-gray-700 text-sm sm:text-base">
                    Correct answer:{" "}
                    <span className="font-semibold text-green-700">
                      {q.correct_answer}
                    </span>
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <button
        onClick={restart}
        className="mt-6 sm:mt-8 bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg font-semibold text-sm sm:text-base transition-transform duration-200 hover:scale-105"
      >
        Restart Quiz
      </button>
    </div>
  );
}
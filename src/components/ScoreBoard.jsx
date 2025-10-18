import React from "react";

export default function ScoreBoard({ score, total, restart, questions, userAnswers }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-green-700 mb-3">Quiz Complete!</h2>
      <p className="text-lg text-gray-700 mb-4">
        You scored{" "}
        <span className="font-semibold text-blue-600">
          {score}
        </span>{" "}
        out of {total}
      </p>

      {/* Detailed Summary */}
      <div className="text-left bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
        <h3 className="font-semibold text-gray-800 mb-2">Review Your Answers:</h3>
        <ul className="space-y-3">
          {questions.map((q, index) => {
            const isCorrect = userAnswers[index] === q.correct_answer;
            return (
              <li key={index} className="border-b pb-2">
                <p className="font-medium text-gray-900">
                  {index + 1}. {q.question}
                </p>
                <p className={`mt-1 ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                  Your answer: {userAnswers[index] || "No answer"}
                </p>
                {!isCorrect && (
                  <p className="text-gray-700">
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
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg font-medium transition duration-200"
      >
        Restart Quiz
      </button>
    </div>
  );
}

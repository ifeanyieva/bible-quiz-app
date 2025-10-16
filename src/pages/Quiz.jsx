// src/pages/Quiz.jsx
import React, { useState } from "react";
import { questions } from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import ScoreBoard from "../components/ScoreBoard";
import QuizControls from "../components/QuizControls";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }

    setSelectedAnswer("");

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizOver(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizOver(false);
    setSelectedAnswer("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">📖 Bible Quiz</h1>

      {!isQuizOver ? (
        <>
          <ScoreBoard
            score={score}
            current={currentQuestionIndex + 1}
            total={questions.length}
          />

          <QuestionCard
            question={currentQuestion.question}
            options={currentQuestion.options}
            selectedAnswer={selectedAnswer}
            onSelect={handleSelect}
          />

          <QuizControls
            onNext={handleNext}
            disabled={!selectedAnswer}
            isLastQuestion={currentQuestionIndex + 1 === questions.length}
          />
        </>
      ) : (
        <div className="bg-white shadow-md rounded-xl p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Quiz Complete! 🎉
          </h2>
          <p className="text-lg mb-4">
            You scored{" "}
            <span className="font-bold text-blue-700">{score}</span> out of{" "}
            {questions.length}
          </p>
          <button
            onClick={handleRestart}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;

import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import QuizControls from "../components/QuizControls";
import ScoreBoard from "../components/ScoreBoard";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  // ✅ Bible quiz questions (main questions)
  const questions = [
    {
      question: "Who led the Israelites out of Egypt?",
      correct_answer: "Moses",
      answers: ["Abraham", "Moses", "Joseph", "David"],
    },
    {
      question: "Where was Jesus born?",
      correct_answer: "Bethlehem",
      answers: ["Nazareth", "Jerusalem", "Bethlehem", "Galilee"],
    },
    {
      question: "Who was swallowed by a great fish?",
      correct_answer: "Jonah",
      answers: ["Elijah", "Noah", "Jonah", "Peter"],
    },
    {
      question: "What is the first book of the Bible?",
      correct_answer: "Genesis",
      answers: ["Genesis", "Exodus", "Leviticus", "Numbers"],
    },
    {
      question: "Who denied Jesus three times?",
      correct_answer: "Peter",
      answers: ["Judas", "John", "Thomas", "Peter"],
    },
    {
      question: "What did God create on the first day?",
      correct_answer: "Light",
      answers: ["Man", "Animals", "Light", "Heaven"],
    },
    {
      question: "What is the shortest verse in the Bible?",
      correct_answer: "Jesus wept.",
      answers: [
        "God is love.",
        "Jesus wept.",
        "The Lord is good.",
        "Fear not.",
      ],
    },
    {
      question: "How many days did God take to create the world?",
      correct_answer: "6 days",
      answers: ["7 days", "6 days", "5 days", "8 days"],
    },
    {
      question: "Who built the ark?",
      correct_answer: "Noah",
      answers: ["Moses", "Noah", "Elijah", "Abraham"],
    },
    {
      question: "What was the first miracle of Jesus?",
      correct_answer: "Turning water into wine",
      answers: [
        "Healing the blind man",
        "Feeding the 5000",
        "Turning water into wine",
        "Walking on water",
      ],
    },
  ];

  const handleAnswer = (answer) => {
    if (isLocked) return;
    setSelected(answer);
    setIsLocked(true);
    setUserAnswers((prev) => [...prev, answer]);

    if (answer === questions[current].correct_answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setSelected(null);
      setIsLocked(false);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
    setSelected(null);
    setIsLocked(false);
    setUserAnswers([]);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      {!showScore ? (
        <>
          <QuestionCard
            question={questions[current].question}
            answers={questions[current].answers}
            onAnswer={handleAnswer}
            selected={selected}
            correct={questions[current].correct_answer}
          />
          <QuizControls
            current={current + 1}
            total={questions.length}
            onNext={handleNext}
            isLocked={isLocked}
          />
        </>
      ) : (
        <ScoreBoard
          score={score}
          total={questions.length}
          restart={restartQuiz}
          questions={questions}
          userAnswers={userAnswers}
        />
      )}
    </div>
  );
}

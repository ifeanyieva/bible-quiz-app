import { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import QuizControls from "../components/QuizControls";
import ScoreBoard from "../components/ScoreBoard";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  const fallbackQuestions = [
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
  ];

  useEffect(() => {
    async function fetchBibleQuestions() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("https://opentdb.com/api.php?amount=20&type=multiple");
        const data = await res.json();

        if (!data.results || data.results.length === 0) {
          throw new Error("No quiz data available.");
        }

        const decode = (str) =>
          new DOMParser().parseFromString(str, "text/html").body.textContent;

        const bibleKeywords = [
          "bible",
          "jesus",
          "christ",
          "moses",
          "genesis",
          "noah",
          "abraham",
          "god",
          "holy",
          "church",
          "christian",
          "disciple",
          "apostle",
          "heaven",
          "psalm",
        ];

        const filtered = data.results
          .map((q) => ({
            question: decode(q.question),
            correct_answer: decode(q.correct_answer),
            answers: [...q.incorrect_answers, q.correct_answer]
              .map(decode)
              .sort(() => Math.random() - 0.5),
          }))
          .filter((q) =>
            bibleKeywords.some((kw) =>
              q.question.toLowerCase().includes(kw.toLowerCase())
            )
          );

        const finalQuestions =
          filtered.length >= 5 ? filtered.slice(0, 5) : fallbackQuestions;

        setQuestions(finalQuestions);
      } catch (err) {
        setError(err.message);
        setQuestions(fallbackQuestions);
      } finally {
        setLoading(false);
      }
    }

    fetchBibleQuestions();
  }, []);

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


  if (loading)
    return <p className="text-center mt-10 text-gray-600">Loading Bible quiz...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

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

import DailyVerse from "../components/DailyVerse";
import VerseLookupForm from "../components/VerseLookupForm";

const Home = () => {
  return (
    <div>
      <DailyVerse />
      <VerseLookupForm />
    </div>
  );
};

export default Home;
import DailyVerse from "../components/DailyVerse";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-700">
        Welcome to the Bible Quiz App
      </h1>
      <DailyVerse />
    </div>
  );
};

export default Home;

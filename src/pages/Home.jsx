import DailyVerse from "../components/DailyVerse";
import VerseLookupForm from "../components/VerseLookupForm";

const Home = () => {
  return (
    <div className="p-6">
      <DailyVerse />
      <VerseLookupForm />
    </div>
  );
};

export default Home;

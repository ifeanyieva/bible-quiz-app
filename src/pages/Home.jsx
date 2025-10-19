import DailyVerse from "../components/DailyVerse";
import VerseLookupForm from "../components/VerseLookupForm";

const Home = () => {
  return (
    <main className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Daily Verse Section */}
        <section className="flex flex-col items-center">
          <DailyVerse />
        </section>

        {/* Verse Lookup Section */}
        <section className="flex flex-col items-center">
          <VerseLookupForm />
        </section>
      </div>
    </main>
  );
};

export default Home;
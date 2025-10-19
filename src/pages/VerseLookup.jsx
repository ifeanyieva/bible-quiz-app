import VerseLookupForm from "../components/VerseLookupForm";

const VerseLookup = () => {
  return (
    <main className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-gray-50 min-h-screen flex justify-center items-start">
      <div className="w-full max-w-3xl">
        <VerseLookupForm />
      </div>
    </main>
  );
};

export default VerseLookup;
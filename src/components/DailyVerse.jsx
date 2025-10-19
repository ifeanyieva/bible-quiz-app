import { useEffect, useState } from "react";

const DailyVerse = () => {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_BIBLE_API_KEY;
  const BIBLE_ID = "de4e12af7f28f599-02"; // KJV

  const sampleReferences = [
    "JHN.3.16",
    "PSA.23.1",
    "ROM.8.28",
    "ISA.41.10",
    "PHI.4.13",
    "PRO.3.5",
    "MAT.5.9",
  ];

  const getRandomRef = () =>
    sampleReferences[Math.floor(Math.random() * sampleReferences.length)];

  useEffect(() => {
    const fetchVerse = async () => {
      setLoading(true);
      setError(null);

      try {
        const randomRef = getRandomRef();
        const response = await fetch(
          `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/verses/${randomRef}`,
          {
            headers: {
              "api-key": API_KEY,
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch verse");

        const data = await response.json();
        setVerse(data.data);
      } catch (err) {
        console.error(err);
        setError("Unable to fetch verse. Check your API key or connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchVerse();
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white p-4 sm:p-6 md:p-10 mt-8 sm:mt-12 shadow-md rounded-2xl transition-all duration-300">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-blue-700 mb-4 sm:mb-6">
        📖 Verse of the Day
      </h2>

      {loading && (
        <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg">
          Loading...
        </p>
      )}

      {error && (
        <p className="text-center text-red-600 text-sm sm:text-base md:text-lg px-2">
          {error}
        </p>
      )}

      {verse && (
        <div className="text-center">
          <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-2 text-gray-800">
            {verse.reference}
          </h3>
          <p
            className="text-gray-700 italic text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose px-2 sm:px-4"
            dangerouslySetInnerHTML={{ __html: verse.content }}
          />
        </div>
      )}
    </div>
  );
};

export default DailyVerse;
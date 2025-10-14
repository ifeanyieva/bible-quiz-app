import { useEffect, useState } from "react";

const DailyVerse = () => {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_BIBLE_API_KEY;
  const BIBLE_ID = "de4e12af7f28f599-02"; // KJV

  // A list of references we can pick from (to simulate daily/random verse)
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
    <div className="max-w-2xl mx-auto bg-white p-6 mt-10 shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
        📖 Verse of the Day
      </h2>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {verse && (
        <div className="text-center">
          <h3 className="font-semibold text-lg mb-2">{verse.reference}</h3>
          <p
            className="text-gray-700 italic"
            dangerouslySetInnerHTML={{ __html: verse.content }}
          />
        </div>
      )}
    </div>
  );
};

export default DailyVerse;

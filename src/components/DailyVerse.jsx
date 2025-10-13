import { useEffect, useState } from "react";

const DailyVerse = () => {
  const [verse, setVerse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Replace with your actual API key
  const API_KEY = import.meta.env.VITE_API_BIBLE_KEY;

  useEffect(() => {
    const fetchDailyVerse = async () => {
      setLoading(true);
      try {
        // Example: fetch John 3:16 (You can later randomize or use Verse of the Day)
        const response = await fetch(
          "https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/verses/JHN.3.16",
          {
            headers: {
              "api-key": API_KEY,
            },
          }
        );

        const data = await response.json();
        setVerse(data.data);
      } catch (err) {
        setError("Failed to fetch verse.");
      } finally {
        setLoading(false);
      }
    };

    fetchDailyVerse();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading verse...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">Verse of the Day</h2>
      {verse && (
        <>
          <p className="italic text-gray-700 mb-2">{verse.reference}</p>
          <p className="text-gray-800">{verse.content}</p>
        </>
      )}
    </div>
  );
};

export default DailyVerse;

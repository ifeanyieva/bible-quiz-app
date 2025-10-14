import { useEffect, useState } from "react";

const DailyVerse = () => {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ List of random verses to pick from
  const randomVerses = [
    "John 3:16",
    "Psalm 23:1",
    "Romans 8:28",
    "Proverbs 3:5",
    "Isaiah 40:31",
    "Philippians 4:13",
    "Genesis 1:1",
    "Matthew 5:9",
    "1 Corinthians 13:4",
    "Psalm 27:1",
  ];

  const fetchVerse = async () => {
    setLoading(true);
    setError(null);

    try {
      const randomRef = randomVerses[Math.floor(Math.random() * randomVerses.length)];
      const apiKey = import.meta.env.VITE_API_BIBLE_KEY;

      const response = await fetch(
        `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/passages/${encodeURIComponent(randomRef)}?content-type=text`,
        {
          headers: { "api-key": apiKey },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch verse");
      }

      const data = await response.json();
      setVerse({
        reference: data.data.reference,
        content: data.data.content.replace(/<[^>]*>?/gm, ""), // remove HTML tags
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVerse();
  }, []);

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-3">🌿 Verse of the Day</h2>

      {loading && <p className="text-gray-500">Loading verse...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {verse && (
        <div>
          <p className="text-lg text-gray-700 italic mb-2">{verse.content}</p>
          <p className="font-semibold text-blue-600">{verse.reference}</p>
        </div>
      )}

      <button
        onClick={fetchVerse}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        🔁 Get Another Verse
      </button>
    </div>
  );
};

export default DailyVerse;

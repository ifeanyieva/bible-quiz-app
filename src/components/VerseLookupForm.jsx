import { useState } from "react";

const VerseLookupForm = () => {
  const [reference, setReference] = useState("");
  const [verse, setVerse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_BIBLE_API_KEY;
  const BIBLE_ID = "de4e12af7f28f599-02"; // KJV

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!reference.trim()) return;

    setLoading(true);
    setError(null);
    setVerse(null);

    try {
      // Convert "John 3:16" → "JHN.3.16"
      const formattedRef = reference
        .trim()
        .toUpperCase()
        .replace(/\s+/g, "")
        .replace(":", ".");
      const response = await fetch(
        `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/verses/${formattedRef}`,
        {
          headers: {
            "api-key": API_KEY,
          },
        }
      );

      if (!response.ok) throw new Error("Verse not found");

      const data = await response.json();
      setVerse(data.data);
    } catch (err) {
      console.error(err);
      setError("Could not fetch verse. Try another reference (e.g. John 3:16).");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 mt-10 shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
        🔍 Search Bible Verse
      </h2>

      <form onSubmit={handleSearch} className="flex gap-2 justify-center mb-4">
        <input
          type="text"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          placeholder='Enter verse (e.g. "John 3:16")'
          className="border border-gray-300 rounded-lg px-3 py-2 w-2/3 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

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

export default VerseLookupForm;

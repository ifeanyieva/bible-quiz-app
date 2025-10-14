import { useState } from "react";

const VerseLookupForm = () => {
  const [reference, setReference] = useState("");
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!reference.trim()) return;

    setLoading(true);
    setError(null);
    setVerse(null);

    try {
      const apiKey = import.meta.env.VITE_API_BIBLE_KEY;
      const bibleId = "de4e12af7f28f599-02"; // KJV Bible ID (you can change later)

      const response = await fetch(
        `https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${encodeURIComponent(
          reference.trim()
        )}?content-type=text`,
        {
          headers: {
            "api-key": apiKey,
          },
        }
      );

      if (!response.ok) throw new Error("Verse not found. Please check the reference.");

      const data = await response.json();

      setVerse({
        reference: data.data.reference,
        content: data.data.content.replace(/<[^>]*>?/gm, ""), // Clean HTML
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-md p-6 text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">🔍 Verse Lookup</h2>

      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 justify-center">
        <input
          type="text"
          placeholder="Enter a Bible verse (e.g. John 3:16)"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 flex-grow focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-500">Loading verse...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {verse && (
        <div className="mt-6">
          <p className="text-lg text-gray-700 italic mb-2">{verse.content}</p>
          <p className="font-semibold text-blue-600">{verse.reference}</p>
        </div>
      )}
    </div>
  );
};

export default VerseLookupForm;

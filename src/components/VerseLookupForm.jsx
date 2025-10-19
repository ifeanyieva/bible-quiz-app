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
    <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 mt-10 shadow-lg rounded-2xl border border-gray-100">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6 text-center">
        🔍 Search Bible Verse
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-6 px-2 sm:px-0"
      >
        <input
          type="text"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          placeholder='Enter verse (e.g. "John 3:16")'
          className="border border-gray-300 rounded-md px-3 py-2 sm:py-3 w-full sm:w-2/3 md:w-3/4 focus:ring-2 focus:ring-blue-400 outline-none text-sm sm:text-base"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-medium py-2 sm:py-3 px-5 sm:px-6 rounded-md hover:bg-blue-700 transition duration-200 w-full sm:w-auto"
        >
          Search
        </button>
      </form>

      {/* Feedback */}
      {loading && <p className="text-center text-gray-500 text-sm sm:text-base">Loading...</p>}
      {error && <p className="text-center text-red-600 text-sm sm:text-base">{error}</p>}

      {/* Verse result */}
      {verse && (
        <div className="text-center mt-6 px-2 sm:px-0">
          <h3 className="font-semibold text-lg sm:text-xl mb-3 text-gray-800">
            {verse.reference}
          </h3>
          <p
            className="text-gray-700 italic text-sm sm:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: verse.content }}
          />
        </div>
      )}
    </div>
  );
};

export default VerseLookupForm;
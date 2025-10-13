import { useState } from "react";
import SearchBar from "./SearchBar";

const VerseLookupForm = () => {
  const [query, setQuery] = useState("");
  const [verse, setVerse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_API_BIBLE_KEY;

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    setVerse(null);

    try {
      // Convert reference to proper format (e.g. John 3:16 → JHN.3.16)
      const formattedRef = query
        .replace(/\s+/g, "")
        .replace("John", "JHN")
        .replace("Genesis", "GEN")
        .replace("Matthew", "MAT")
        .replace("Luke", "LUK")
        .replace("Mark", "MRK"); // You can expand this list later

      const response = await fetch(
        `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/verses/${formattedRef}`,
        {
          headers: { "api-key": API_KEY },
        }
      );

      if (!response.ok) throw new Error("Verse not found");

      const data = await response.json();
      setVerse(data.data);
    } catch (err) {
      setError("Could not find that verse. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md max-w-xl mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">🔍 Look Up a Bible Verse</h2>

      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />

      {loading && <p className="text-gray-500 mt-4">Searching...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {verse && (
        <div className="mt-4">
          <p className="font-semibold mb-2">{verse.reference}</p>
          <p className="text-gray-800">{verse.content}</p>
        </div>
      )}
    </div>
  );
};

export default VerseLookupForm;

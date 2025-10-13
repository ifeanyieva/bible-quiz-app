import React, { useEffect, useState } from "react";

const DailyVerse = () => {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://bible-api.com/john%203:16");
        if (!response.ok) throw new Error("Failed to fetch verse");
        const data = await response.json();
        setVerse(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVerse();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading verse...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Verse of the Day</h2>
        <p className="text-gray-700 italic mb-4">{verse?.text}</p>
        <p className="text-sm text-gray-500">— {verse?.reference}</p>
      </div>
    </div>
  );
};

export default DailyVerse;

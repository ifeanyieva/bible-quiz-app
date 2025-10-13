const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter verse reference (e.g., John 3:16)"
        className="border p-2 rounded-l-md w-64 outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

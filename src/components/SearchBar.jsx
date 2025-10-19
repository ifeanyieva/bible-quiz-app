const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6 px-4">
      {/* Input field */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter verse reference (e.g., John 3:16)"
        className="border border-gray-300 p-2 sm:p-3 rounded-md sm:rounded-l-md w-full sm:w-72 md:w-96 outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
      />

      {/* Search button */}
      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 sm:py-3 sm:px-6 rounded-md sm:rounded-r-md font-medium transition duration-200 w-full sm:w-auto"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
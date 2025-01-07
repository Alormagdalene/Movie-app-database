import useSearchStore from "../../store/useSearchStore";

const SearchResults = () => {
  const searchResults = useSearchStore((state) => state.searchResults);

  if (!searchResults || searchResults.length === 0) {
    return (
      <p className="text-slate-100 text-center mt-5">
        No results found. Please try a different search.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {searchResults.map((movieData, index) => (
        <div
          key={index}
          className="p-4 bg-gray-800 rounded-lg shadow-md text-slate-100"
        >
          <h3 className="text-3xl font-serif font-bold">
            {movieData.Title || "Unknown Title"}
          </h3>
          <h4>
            Released Date:{" "}
            <span className="text-green-600 font-bold font-mono">
              {movieData.Year || "N/A"}
            </span>
          </h4>
          <h4>IMDB Rating: {movieData.imdbRating || "N/A"}</h4>
          <h4>{movieData.Plot || "N/A"}</h4>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;

import useSearchStore from "../../store/useSearchStore";

const SearchResults = () => {
  const { searchResults } = useSearchStore(state => state);
  console.log("Search Results:", searchResults);

  const movies = searchResults?.Search || [];

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div
                className="bg-transparent rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                key={movie.imdbID}
              >
                <img
                  className="w-full h-64 object-cover"
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <div className="px-4 py-2">
                  <h3 className="text-xl font-bold text-slate-200 mb-2">{movie.Title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{movie.Plot}</p>
                  <p className="text-sm">
                    Year: <span className="text-green-700 font-extrabold">{movie.Year}</span>
                  </p>
                  <p className="text-sm">
                    IMDB Rating: {movie.imbdrating || "N/A"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-xl text-gray-300">
              No movies found. Try searching for something else!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
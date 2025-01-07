import NavBar from "../common/Nav";
import useSearchStore from "../../store/useSearchStore";

const Movie = () => {
  const searchResults = useSearchStore((state) => state.searchResults);

  console.log("Search Results:", searchResults); 

  // Extract movies from searchResults
  const movies = Array.isArray(searchResults)
    ? searchResults // If it's an array, use it directly
    : searchResults?.Search || []; // If it's an object with `Search`, use the array

  return (
    <div>
      <NavBar />
      <div className="flex flex-wrap gap-6 max-w-3/5 justify-round mt-5 px-4 py-2 text-white font-sans">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imbdID}>
              <img src={movie.Poster}
                alt={movie.Title}
              />
              <h3 className="text-left font-bold text-slate-200">{movie.Title}</h3>
              <h3>{movie.overview}</h3>
              <p>Year: <span className="text-green-700 font-extrabold">{movie.Year}</span></p>
              <p>IMBD {movie.imbdRtating}</p>
              
            </div>
          ))
        ) : (
          <p>No movies found. Try searching for something else!</p>
        )}
      </div>
    </div>
  );
};

export default Movie;

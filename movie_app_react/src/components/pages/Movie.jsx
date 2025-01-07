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
      <div className="flex flex-wrap gap-6 justify-center items-center mt-5 w-[100%] ">
        {movies.length > 0 ? (
          movies.map((movie, id) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.Poster}
                alt={movie.Title}
              />
              <h3 className="text-justify text-2xl text-slate-200">{movie.Title}</h3>
              <h3>{movie.Plot}</h3>
              <p>Year: {movie.Year}</p>
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

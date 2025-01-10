// MovieDisplay.jsx
import useMovieData from "../../hooks/useMovieData";

const MovieDisplay = (props) => {
  const { movieName } = props;
  const [isPending, error, movieData] = useMovieData(movieName);

  if (isPending) return <p className="text-center text-gray-500">Fetching Movie. Please Hold On...</p>;
  if (error) return <p className="text-center text-red-500">Something went wrong. Please try again later.</p>;

  return movieData ? (
    <div className="bg-transparent rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div className="p-4">
        <div className="flex flex-col items-center">
          {movieData.Poster ? (
            <img
              src={movieData.Poster}
              alt={`Poster of ${movieData.Title || "Unknown Title"}`}
              className=" h-64 object-cover rounded-md"
            />
          ) : (
            <p className="text-gray-400">Poster not available</p>
          )}
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-semibold text-white">{movieData.Title || "Unknown Title"}</h3>
          <h4 className="mt-1 text-lg text-gray-400">Released: <span className="text-green-600 font-extrabold">{movieData.Year || "N/A"}</span></h4>
        </div>
      </div>
    </div>
  ) : (
    <p className="text-center text-gray-500">No movie data available.</p>
  );
};

export default MovieDisplay;

import useMovieData from "../../hooks/useMovieData";


const MovieDisplay = (props) => {
  const { movieName } = props;
  const [isPending, error, movieData] = useMovieData(movieName);

  if (isPending) return <p>Fetching Movie. Please Hold On</p>;
  if (error) return <p>Something is wrong, Be patient while we fix it</p>;

  return movieData ? (
      <div>
          {movieData.Poster && movieData.Title ? (
              <img
                  src={movieData.Poster}
                  alt={`Poster of ${movieData.Title || "Unknown Title"}`}
              />
          ) : (
              <p>Poster not available</p>
          )}
          <h3>{movieData.Title || "Unknown Title"}</h3>
          <h4>Released Date: {movieData.Year || "N/A"}</h4>
          <h4>IMBD Rating: {movieData.imdbRating || "N/A"}</h4>
      </div>
  ) : (
      <p>No movie data available</p>
  );
};


export default MovieDisplay;

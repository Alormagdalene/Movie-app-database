import useMovieData from "../../hooks/useMovieData";


const MovieDisplay = (props) => {
  const { movieName } = props;
  const [isPending, error, movieData] = useMovieData(movieName);

  if (isPending) return <p>Fetching Movie. Please Hold On</p>;
  if (error) return <p>Something is wrong, Be patient while we fix it</p>;

  return movieData ? (
      <div className='flex flex-row justify-around py-6'>
          <span className="">{movieData.Poster && movieData.Title ? (
              <img
                  src={movieData.Poster}
                  alt={`Poster of ${movieData.Title || "Unknown Title"}`}
              />
          ) : (
              <p>Poster not available</p>
          )}</span>
          <div className="m-4 text-slate-300 px-4 py-4">
          <h3 className="text-slate-100 text-3xl font-serif font-bold">{movieData.Title || "Unknown Title"}</h3>
          <h4>Released Date: <span className="text-green-600 font-bold font-mono">{movieData.Year || "N/A"}</span></h4>
          <h4>IMBD Rating: {movieData.imdbRating || "N/A"}</h4>
          <h4>{movieData.Plot || "N/A"}</h4>
          </div>
      </div>
  ) : (
      <p>No movie data available</p>
  );
};


export default MovieDisplay;

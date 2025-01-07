import MovieDisplay from "../common/MovieDisplay";
import NavBar from "../common/Nav";


// movieList = [
//   "Squid Game",
//   "House of dragon",
//   "Game of thrones",
//   "Suits",
//   "Prison Break",
// ]
const TvShows = () => {

  return (
    <div>
      <NavBar />
      <MovieDisplay movieName = "Squid Game" />
    <MovieDisplay movieName = "Game of thrones" />  
    <MovieDisplay movieName = "Suits" /> 
    <MovieDisplay movieName = "Merlin" />
      {/* {movieList.map((movieTitle) => (
        <MovieDisplay movieName={movie} />
      ))}; */}
  </div>
  );
};

export default TvShows;

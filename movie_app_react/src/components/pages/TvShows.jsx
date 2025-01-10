import MovieDisplay from "../common/MovieDisplay";
import NavBar from "../common/Nav";


const movieList = [
  "Squid Game",
  "House of the dragon",
  "Game of thrones",
  "Suits",
  "Prison Break",
  "Merlin",
  "legend of the seeker",
  "Monk",
  "Vikings",
  "Jack Ryan",
  "Desperate housewives",
  "devious maids",
];
const TvShows = () => {

  return (
   <> <NavBar />
   <div className="flex flex-wrap">
      {movieList.map((movieTitle) => (
        <MovieDisplay movieName={movieTitle} />
      ))};
  </div>
  </>
  );
};

export default TvShows;

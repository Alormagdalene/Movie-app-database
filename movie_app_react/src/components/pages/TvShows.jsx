import { Outlet } from "react-router-dom";
import MovieDisplay from "../common/MovieDisplay";
import NavBar from "../common/Nav";

const TvShows = () => {

  return (
    <div>
      <Outlet />
      <NavBar />
      <MovieDisplay movieName = "Squid game" />
      <MovieDisplay movieName = "Game of Thrones" />
      <MovieDisplay movieName = "Prison Break" />
      <MovieDisplay movieName = "Merlin" />
      <MovieDisplay movieName = "Suits" />
  </div>
  );
};

export default TvShows;

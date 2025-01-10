import NavBar from "../common/Nav";
import SearchResults from "../common/SearchResults";

const Movie = () => {
  return (
    <>
    <NavBar />
    <div className="p-6">
      <h1 className="text-4xl text-slate-100 mb-4">Movie Search Results</h1>
      <SearchResults />
    </div>
    </>
  );
};

export default Movie;

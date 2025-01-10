import React from "react";
import MovieDisplay from "./MovieDisplay";
import useMovieData from "../../hooks/useMovieData";


const Hero = ({ movieName }) => {
  const [isPending, error, movieData] = useMovieData(movieName);

  if (isPending) return <p className="text-center text-gray-500">Fetching Movie Details...</p>;
  if (error) return <p className="text-center text-red-500">Something went wrong. Please try again later.</p>;

  return (
    <>
    <div className="bg-transparent text-white p-6 rounded-lg shadow-lg my-8">
      <h4 className="text-3xl font-bold mb-4">Movie Details</h4>
      {movieName ? (
        <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Movie Poster */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <MovieDisplay movieName={movieName} />
        </div>
      
        {/* Movie Details */}
        <div className="flex-grow">
          <div className="mt-4">
            <h5 className="text-xl font-semibold text-gray-200"></h5>
            <p className="text-gray-400">{movieData.Plot || "No plot available."}</p>
          </div>
          <div className="mt-4">
            <h5 className="text-xl font-semibold text-gray-200">Cast:</h5>
            <ul className="text-gray-400">
              {movieData.Actors
                ? movieData.Actors.split(",").map((actor, index) => (
                    <li key={index}>{actor}</li>
                  ))
                : <li>No cast information available.</li>}
            </ul>
          </div>
          <div className="mt-4">
            <h5 className="text-xl font-semibold text-gray-200">Rating: 
              <span className="text-yellow-500 font-bold"> {movieData.imdbRating || "N/A"}</span>
            </h5>
            <h5 className="text-xl font-semibold text-gray-200 mt-4">Genre: 
              <span className="text-gray-400 text-sm"> {movieData.Genre || "N/A"}</span>
            </h5>
          </div>
        </div>
      </div>
      ) : (
        <p className="text-center text-gray-400">Select a movie to view details</p>
      )}
    </div>
    </>
  );
};

export default Hero;

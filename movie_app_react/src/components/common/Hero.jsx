import React, { useEffect, useState } from "react";
import useSearchMovie from "../../hooks/useSearchMovie"; // Your existing hook

const Hero = ({ movieData }) => {
  const [query, setQuery] = useState(movieData); // Initialize query with movieName
  const [isPending, error, data] = useSearchMovie(query); // Fetch movie data using the hook

  useEffect(() => {
    if (movieData) {
      setQuery(movieData); // Update query when movieName changes
    }
  }, [movieData]);
  console.log(movieData)

  if (isPending) return <p>Fetching Movie. Please Hold On...</p>;
  if (error) return <p>Something went wrong. Please try again later.</p>;

  return movieData ? (
    <div className="hero-container">
      {movieData.Poster ? (
        <img
          src={movieData.Poster}
          alt={`Poster of ${movieData.Title || "Unknown Title"}`}
          className="hero-poster"
        />
      ) : (
        <div className="placeholder">No Poster Available</div>
      )}
      <h1>{movieData.Title || "Unknown Title"}</h1>
      <p>{movieData.Plot || "No plot available"}</p>
      <p>{movieData.Genre || "No genre available"}</p>
      <p>{movieData.Year || "No year available"}</p>
      <p>IMDB Rating: {movieData.imdbRating || "No rating available"}</p>
    </div>
  ) : (
    <p>No movie data available</p>
  );
};

export default Hero;

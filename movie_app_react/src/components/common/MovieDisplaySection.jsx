// MovieDisplaySection.jsx
import React from 'react';
import MovieDisplay from './MovieDisplay';

const movieList = [
  'Pushpa', 
  'Lion king', 
  "John Wick", 
  'Wrath of man', 
  'Home Alone', 
  'Avengers',
  'Home front',
  'The Beekeeper'
];

const MovieDisplaySection = ({ onSelectMovie }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
      {movieList.map((movieTitle) => (
        <div
          key={movieTitle}
          className="cursor-pointer transform hover:scale-105 transition-all duration-300"
          onClick={() => onSelectMovie(movieTitle)}
        >
          <MovieDisplay movieName={movieTitle} />
        </div>
      ))};
    </div>
  );
};

export default MovieDisplaySection;

import React from 'react'
import MovieDisplay from './MovieDisplay';

const movieList= [
    'Pushpa', 
    'Lion king', 
    "John Wick", 
    'Wrath of man', 
    'Home Alone', 
    'Avengers',
    'Home front',
    'the Beekeeper'
];
const MovieDisplaySection = () => {
  return (
    <div className='flex items-center justify-center max-w- flex-wrap gap-16'>
    {movieList.map((movieTitle) => (<MovieDisplay movieName = {movieTitle} />))};
    </div>
  );
};

export default MovieDisplaySection;

// Home.jsx
import Hero from './common/Hero';
import MovieDisplaySection from './common/MovieDisplaySection';
import NavBar from './common/Nav';
import { useState } from 'react';


const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movieName) => {
    setSelectedMovie(movieName);
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-6">
        <Hero movieName={selectedMovie} />
        <MovieDisplaySection onSelectMovie={handleMovieSelect} />
      </div>
    </>
  );
};

export default Home;

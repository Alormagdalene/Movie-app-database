import MovieDisplay from './common/MovieDisplay';
import NavBar from './common/Nav';
import Hero from './common/Hero';

const Home = () => {
   

  return (
    <>
    <NavBar />
    <Hero />
    <div className='flex gap-3 justify-center items-center mt-5'>
    <MovieDisplay movieName = "Home coming" />
    <MovieDisplay movieName = "John Wick" />  
    <MovieDisplay movieName = "Joker" /> 
    <MovieDisplay movieName = "Iron man" />
    </div>
    </>
  );
};

export default Home;

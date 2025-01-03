import { Outlet } from 'react-router-dom';
import MovieDisplay from './common/MovieDisplay';
import NavBar from './common/Nav';

const Home = () => {
   

  return (
    <>
    <NavBar />
    <Outlet />
    <MovieDisplay movieName = "Home coming" />
    <MovieDisplay movieName = "John Wick" />  
    <MovieDisplay movieName = "Joker" /> 
    <MovieDisplay movieName = "Iron man" />
    </>
  );
};

export default Home;

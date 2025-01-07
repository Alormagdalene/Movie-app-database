import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <div className='flex gap-16 bg-gray-500 h-16 mt-1'>
    <nav className="py-2 px-2 items-center justify-center font-bold hover:text-green-500" >
      <Link to = "/" className='text-green-900 text-2xl font-serif font-extrabold'>MOVIESPLASH</Link>
      <Link to = "/" className="ml-72" >Home</Link>
      <Link to = "/movie" className='mx-24'>Movie</Link>
      <Link to = "/tvShows">TvShows</Link>  
    </nav>
    <SearchBar />
    </div>
  );
};

export default NavBar;

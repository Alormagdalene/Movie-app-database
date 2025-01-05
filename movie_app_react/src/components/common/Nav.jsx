import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <div className='flex gap-40 bg-slate-600 h-16 w-[100%] mt-1'>
    <nav className="py-2 px-2 flex items-center justify-center" >
      <Link to = "/">MOVIESPLASH</Link>
      <Link to = "/" className="ml-96" >Home</Link>
      <Link to = "/movie" className='mx-24'>Movie</Link>
      <Link to = "/tvShows">TvShows</Link>  
    </nav>
    <SearchBar />
    </div>
  );
};

export default NavBar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-800 h-16 mt-1">
      <nav className="flex justify-between items-center py-2 px-4 gap-11 sm:px-8">

        <Link to="/" className="text-green-900 text-2xl font-serif font-extrabold hover:text-white">
          MOVIESPLASH
        </Link>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-green-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:flex sm:gap-12 items-center ml-auto`}
        >
          <Link to="/" className="text-white hover:text-green-500">
            Home
          </Link>
          <Link to="/movie" className="text-white hover:text-green-500">
            Movie
          </Link>
          <Link to="/tvShows" className="text-white hover:text-green-500">
            TV Shows
          </Link>
        </div> 
      <SearchBar />
      </nav>
      
    </div>
  );
};

export default NavBar;

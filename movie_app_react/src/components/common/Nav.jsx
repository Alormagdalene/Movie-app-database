import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to = "/">Home</Link>
      <Link to = "/movie">Movie</Link>
      <Link to = "/tvShows">TvShows</Link>
    </nav>
  );
};

export default NavBar;

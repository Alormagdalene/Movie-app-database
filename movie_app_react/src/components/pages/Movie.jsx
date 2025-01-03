import React from 'react'
import MovieDisplay from '../common/MovieDisplay'
import NavBar from '../common/Nav'
import { Outlet } from 'react-router-dom'

const Movie = () => {
  return (
    <div>
      <Outlet />
      <NavBar />
      <MovieDisplay movieName = "Justice League" />
      <MovieDisplay movieName = "Joker" />
      <MovieDisplay movieName = "Eagle" />
      <MovieDisplay movieName = "Wonder Woman" />
   
    </div>
  )
}

export default Movie

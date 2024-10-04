import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies)
  // console.log(movies);
  
  return (
      movies.nowPlayingMovies && (
        // -mt-52 pl-12 relative z-20
        <div className='bg-black'>
    <div className='-mt-20 relative z-20 '>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      <MovieList 
      title={"Upcoming Movies"} 
      movies={movies.nowPlayingMovies} />
      <MovieList 
      title={"Horror"} 
      movies={movies.nowPlayingMovies} />
      {/* 
        MovieList - Popular
          MovieCard * n
        MovieList - NowPlaying
        MovieList - Trending
        MovieList - Horror
      */}
    </div>
    </div>
      )
  )
}

export default SecondaryContainer
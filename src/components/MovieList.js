import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    
  return (
    <div className='p-6 bg-black text-white'>
              <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
        <div className='flex overflow-x-scroll'>
                <div className='flex'> 
                    {movies?.map((movie) => {
                        console.log(movie.poster_path);
                        return <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    })}
                </div>
        </div>
    </div>
  )
}

export default MovieList
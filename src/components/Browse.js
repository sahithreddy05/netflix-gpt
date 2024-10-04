import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  
  const showzGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    <div>
      <Header/>
      {
        showzGptSearch ? (<GptSearch />) : (
        <> 
        <MainContainer/>
        <SecondaryContainer/>
        </>
        )}
       <MainContainer/>
       <SecondaryContainer/>
      {/*
      Main Container
       - VideoBackground
       - VideoTitle
      Secondary Container
       - MovieList * n
          - cards * n
      */}
      </div>
  )
}

export default Browse
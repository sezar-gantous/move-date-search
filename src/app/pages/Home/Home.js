import React, { useEffect, useState } from 'react';
import api from 'services/api';
import { MovieGrid } from 'features/MovieGrid';
// import * as ImageListStyles from './styledComponents';

const Home = () => {
  const posterBaseUrl = 'https://www.themoviedb.org/t/p/w500';
  const [getMovies, setMovies] = useState([]);

  // Fetch todays moview on app mount
  useEffect(() => {
    api({
      url: `${process.env.REACT_APP_MOVIEDB_API}&sort_by=popularity.desc&page=1`,
      method: 'GET',
    })
      .then(response => setMovies(response?.data?.results))
      .catch(e => {
        console.log(`Error`, e);
      });
  }, []);

  return <MovieGrid movies={getMovies} posterBaseUrl={posterBaseUrl} />;
};
export default Home;

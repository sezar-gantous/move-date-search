import React, { useEffect, useState } from 'react';
import api from 'services/api';
import { MovieGrid } from 'features/MovieGrid';
import { MoviePagenation } from 'features/MoviePagenation';
// import * as ImageListStyles from './styledComponents';

const Home = () => {
  const posterBaseUrl = 'https://www.themoviedb.org/t/p/w500';
  const [getMovies, setMovies] = useState([]);
  const [getTotalMovies, setTotalMovies] = useState(0);
  const [getCurrentPage, setCurrentPage] = useState(0);

  // On app mount fetch todays hotest movies :fire
  useEffect(() => {
    api({
      url: `${process.env.REACT_APP_MOVIEDB_API}&sort_by=popularity.desc&page=1`,
      method: 'GET',
    })
      .then(response => {
        setMovies(response?.data?.results);
        setTotalMovies(response?.data?.total_pages);
        setCurrentPage(response?.data?.page);
      })
      .catch(e => {
        console.log(`Error`, e);
      });
  }, []);

  const changePage = (event, value) => {
    api({
      url: `${process.env.REACT_APP_MOVIEDB_API}&sort_by=popularity.desc&page=${value}`,
      method: 'GET',
    })
      .then(response => {
        console.log(`in`, response?.data?.page);
        setMovies(response?.data?.results);
        setTotalMovies(response?.data?.total_pages);
        setCurrentPage(response?.data?.page);
      })
      .catch(e => {
        console.log(`Error`, e);
      });
  };

  return (
    <>
      <MovieGrid movies={getMovies} posterBaseUrl={posterBaseUrl} />
      <MoviePagenation
        totalMovies={getTotalMovies}
        currentPage={getCurrentPage}
        handleChange={changePage}
      />
    </>
  );
};
export default Home;

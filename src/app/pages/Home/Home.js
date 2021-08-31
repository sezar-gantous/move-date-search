import React, { useEffect, useState } from 'react';
import api from 'services/api';
import { MovieGrid } from 'features/MovieGrid';
import { MoviePagenation } from 'features/MoviePagenation';
import { MovieDateSearch } from 'features/MovieDateSearch';
import { format } from 'date-fns';
import { generateApiUrl } from 'common/utils';

const Home = () => {
  const posterBaseUrl = 'https://www.themoviedb.org/t/p/w500';
  const [getMovies, setMovies] = useState([]);
  const [getTotalMovies, setTotalMovies] = useState(0);
  const [getCurrentPage, setCurrentPage] = useState(0);
  const [getSelectedStartDate, setSelectedStartDate] = useState(null);
  const [getSelectedEndDate, setSelectedEndDate] = useState(null);

  const applyChanges = response => {
    setMovies(response?.data?.results);
    setTotalMovies(response?.data?.total_pages);
    setCurrentPage(response?.data?.page);
  };

  // On app mount fetch todays hotest movies :fire
  useEffect(() => {
    api({
      url: `${process.env.REACT_APP_MOVIEDB_API}&sort_by=popularity.desc&page=1`,
      method: 'GET',
    })
      .then(response => {
        applyChanges(response);
      })
      .catch(e => {
        console.log(`Error`, e);
      });
  }, []);

  const changePage = (event, value) => {
    const formatedEnddDate =
      getSelectedEndDate !== null
        ? format(getSelectedEndDate, 'yyyy-MM-dd')
        : getSelectedEndDate;
    const formatedStartedDate =
      getSelectedStartDate !== null
        ? format(getSelectedStartDate, 'yyyy-MM-dd')
        : getSelectedStartDate;
    api({
      url: generateApiUrl(value, formatedStartedDate, formatedEnddDate),
      method: 'GET',
    })
      .then(response => {
        console.log(`in`, response?.data?.page);
        applyChanges(response);
      })
      .catch(e => {
        console.log(`Error`, e);
      });
  };

  const changeStartDate = date => {
    console.log('DATE', date);
    if (new Date(date) > 0 || date === null) {
      const formatedDate = date !== null ? format(date, 'yyyy-MM-dd') : date;
      const formatedEnddDate =
        getSelectedEndDate !== null
          ? format(getSelectedEndDate, 'yyyy-MM-dd')
          : getSelectedEndDate;
      api({
        url: generateApiUrl(1, formatedDate, formatedEnddDate),
        method: 'GET',
      })
        .then(response => {
          applyChanges(response);
          setSelectedStartDate(date);
        })
        .catch(e => {
          console.log(`Error`, e);
        });
    }
  };

  const changeEndDate = date => {
    if (new Date(date) > 0 || date === null) {
      const formatedDate = date !== null ? format(date, 'yyyy-MM-dd') : date;
      const formatedStartedDate =
        getSelectedStartDate !== null
          ? format(getSelectedStartDate, 'yyyy-MM-dd')
          : getSelectedStartDate;
      api({
        url: generateApiUrl(1, formatedStartedDate, formatedDate),
        method: 'GET',
      })
        .then(response => {
          applyChanges(response);
          setSelectedEndDate(date);
        })
        .catch(e => {
          console.log(`Error`, e);
        });
    }
  };

  return (
    <>
      <MovieDateSearch
        changeStartDate={changeStartDate}
        changeEndDate={changeEndDate}
        selectedStartDate={getSelectedStartDate}
        selectedEndDate={getSelectedEndDate}
      />
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

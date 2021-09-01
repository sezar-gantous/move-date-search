import React, { useEffect, useState } from 'react';
import api from 'services/api';
import { MovieGrid } from 'features/MovieGrid';
import { MoviePagenation } from 'features/MoviePagenation';
import { MovieDateSearch } from 'features/MovieDateSearch';
import { format } from 'date-fns';
import { generateApiUrl } from 'common/utils';
import * as HomeStyles from './styledComponents';

const Home = () => {
  const DATE_PICKERS = { StartDate: 1, EndDate: 2 };

  const posterBaseUrl = 'https://www.themoviedb.org/t/p/w500';
  const [getMovies, setMovies] = useState([]);
  const [getTotalMovies, setTotalMovies] = useState(0);
  const [getCurrentPage, setCurrentPage] = useState(0);
  const [getSelectedStartDate, setSelectedStartDate] = useState(null);
  const [getSelectedEndDate, setSelectedEndDate] = useState(null);
  const [getIsLoading, setIsLoading] = useState(false);

  const applyChanges = (response, date, pickerID = null) => {
    setMovies(response?.data?.results);
    setTotalMovies(response?.data?.total_pages);
    setCurrentPage(response?.data?.page);
    if (pickerID !== null) {
      if (pickerID === DATE_PICKERS.StartDate) {
        setSelectedStartDate(date);
      } else {
        setSelectedEndDate(date);
      }
    }
  };

  const formateTheDate = date =>
    date !== null ? format(date, 'yyyy-MM-dd') : date;

  // When app mounts fetch todays hotest movies :fire
  useEffect(() => {
    setIsLoading(true);
    api({
      url: `${process.env.REACT_APP_MOVIEDB_API}&sort_by=popularity.desc&page=1`,
      method: 'GET',
    })
      .then(response => {
        setIsLoading(false);
        setMovies(response?.data?.results);
        setTotalMovies(response?.data?.total_pages);
        setCurrentPage(response?.data?.page);
      })
      .catch(e => {
        setIsLoading(false);
        console.log(`Error`, e);
      });
  }, []);

  const changePage = (event, value) => {
    setIsLoading(true);

    api({
      url: generateApiUrl(
        value,
        formateTheDate(getSelectedStartDate),
        formateTheDate(getSelectedEndDate)
      ),
      method: 'GET',
    })
      .then(response => {
        setIsLoading(false);
        applyChanges(response);
      })
      .catch(e => {
        setIsLoading(false);
        console.log(`Error`, e);
      });
  };

  const changeDate = (date, pickerID) => {
    if (new Date(date) > 0 || date === null) {
      setIsLoading(true);

      const selectedDate =
        pickerID === DATE_PICKERS.StartDate
          ? getSelectedEndDate
          : getSelectedStartDate;

      api({
        url: generateApiUrl(
          1,
          formateTheDate(selectedDate),
          formateTheDate(date)
        ),
        method: 'GET',
      })
        .then(response => {
          applyChanges(response, date, pickerID);
          setIsLoading(false);
        })
        .catch(e => {
          setIsLoading(false);
          console.log(`Error`, e);
        });
    }
  };

  return (
    <>
      <MovieDateSearch
        changeStartDate={date => {
          changeDate(date, DATE_PICKERS.StartDate);
        }}
        changeEndDate={date => {
          changeDate(date, DATE_PICKERS.EndDate);
        }}
        selectedStartDate={getSelectedStartDate}
        selectedEndDate={getSelectedEndDate}
      />
      {getMovies.length === 0 && !getIsLoading ? (
        <HomeStyles.NoMovies>Could not find movies, sorry!</HomeStyles.NoMovies>
      ) : (
        <MovieGrid
          movies={getMovies}
          posterBaseUrl={posterBaseUrl}
          isLoading={getIsLoading}
        />
      )}
      {!getIsLoading && (
        <MoviePagenation
          totalMovies={getTotalMovies}
          currentPage={getCurrentPage}
          handleChange={changePage}
        />
      )}
    </>
  );
};
export default Home;

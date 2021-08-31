import React, { useEffect, useState } from 'react';
import api from 'services/api';
import * as ImageListStyles from './styledComponents';

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

  return (
    <ImageListStyles.ImageListContainer>
      {getMovies.map(item => (
        <ImageListStyles.CardContainer key={item.id}>
          <ImageListStyles.PosterContainer
            image={`${posterBaseUrl}${item.poster_path}`}
            alt={item.title}
            title={item.title}
          />
          <ImageListStyles.CardContent>
            <ImageListStyles.Typography
              gutterBottom
              variant="h5"
              component="h2"
            >
              {item.title}
            </ImageListStyles.Typography>
            <ImageListStyles.Rating
              variant="body2"
              color="textSecondary"
              component="span"
            >
              {item.vote_average}
              <ImageListStyles.RatingIcon />
            </ImageListStyles.Rating>
            <ImageListStyles.ReleaseDate
              variant="body2"
              color="textSecondary"
              component="span"
            >
              {item.release_date}
            </ImageListStyles.ReleaseDate>
          </ImageListStyles.CardContent>
        </ImageListStyles.CardContainer>
      ))}
    </ImageListStyles.ImageListContainer>
  );
};
export default Home;

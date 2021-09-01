import React from 'react';
import PropTypes from 'prop-types';
import { MovieSkeletonLoading } from './component/MovieSkeletonLoading';
import * as MovieGridStyles from './styledComponents';

const MovieGrid = ({ movies, posterBaseUrl, isLoading }) => (
  <MovieGridStyles.MovieGridContainer data-testid="movieGridContainer">
    {isLoading ? (
      <>
        <MovieSkeletonLoading />
        <MovieSkeletonLoading />
        <MovieSkeletonLoading />
        <MovieSkeletonLoading />
        <MovieSkeletonLoading />
      </>
    ) : (
      movies.map(item => (
        <MovieGridStyles.CardContainer
          key={item.id}
          data-testid={`movieItem-${item.id}`}
        >
          <MovieGridStyles.PosterContainer
            image={`${posterBaseUrl}${item.poster_path}`}
            alt={item.title}
            title={item.title}
          />

          <MovieGridStyles.CardContent>
            <MovieGridStyles.Typography
              gutterBottom
              variant="h5"
              component="h2"
            >
              {item.title}
            </MovieGridStyles.Typography>

            <MovieGridStyles.Rating
              variant="body2"
              color="textSecondary"
              component="span"
            >
              {item.vote_average}
              <MovieGridStyles.RatingIcon />
            </MovieGridStyles.Rating>

            <MovieGridStyles.ReleaseDate
              variant="body2"
              color="textSecondary"
              component="span"
            >
              {item.release_date}
            </MovieGridStyles.ReleaseDate>
          </MovieGridStyles.CardContent>
        </MovieGridStyles.CardContainer>
      ))
    )}
  </MovieGridStyles.MovieGridContainer>
);

export const defaultProps = {
  movies: [],
  posterBaseUrl: 'https://www.themoviedb.org/t/p/w500',
  isLoading: false,
};

MovieGrid.defaultProps = defaultProps;

MovieGrid.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
      release_date: PropTypes.string,
    })
  ),
  posterBaseUrl: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default MovieGrid;

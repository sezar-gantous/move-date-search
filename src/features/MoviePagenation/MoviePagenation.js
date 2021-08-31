import React from 'react';
import PropTypes from 'prop-types';
import * as PagenationStyles from './styledComponents';

const MoviePagenation = ({ totalMovies, currentPage, handleChange }) => (
  <PagenationStyles.PagenationContainer data-testid="PagenationContainer">
    <PagenationStyles.WhitePagination
      count={totalMovies}
      page={currentPage}
      onChange={handleChange}
      size="large"
      hidePrevButton
      hideNextButton
      variant="outlined"
    />
  </PagenationStyles.PagenationContainer>
);

export const defaultProps = {
  totalMovies: 0,
  currentPage: 0,
  handleChange: () => {},
};

MoviePagenation.defaultProps = defaultProps;

MoviePagenation.propTypes = {
  totalMovies: PropTypes.number,
  currentPage: PropTypes.number,
  handleChange: PropTypes.func,
};

export default MoviePagenation;

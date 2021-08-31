import React from 'react';
import * as MovieFooterStyles from './styledComponents';

const PageFooter = () => (
  <MovieFooterStyles.FooterContainer data-testid="PageFooterContainer">
    <MovieFooterStyles.FooterTitle
      variant="body2"
      color="textSecondary"
      component="p"
    >
      The project can be found on{' '}
      <MovieFooterStyles.Link
        href="https://github.com/sezar-gantous/movie-date-search"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </MovieFooterStyles.Link>
    </MovieFooterStyles.FooterTitle>
  </MovieFooterStyles.FooterContainer>
);

export default PageFooter;

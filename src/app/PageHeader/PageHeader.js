import React from 'react';
import * as MovieHeaderStyles from './styledComponents';

const PageHeader = () => (
  <MovieHeaderStyles.HeaderContainer data-testid="PageHeaderContainer">
    <MovieHeaderStyles.HeaderTitle variant="h4" component="h2">
      Movie Date Search
    </MovieHeaderStyles.HeaderTitle>
  </MovieHeaderStyles.HeaderContainer>
);

export default PageHeader;

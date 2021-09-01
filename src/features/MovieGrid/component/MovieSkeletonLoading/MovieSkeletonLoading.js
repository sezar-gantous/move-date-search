import React from 'react';
import * as MovieSkeletonLoadingStyles from '../../styledComponents';

const MovieSkeletonLoading = () => (
  <MovieSkeletonLoadingStyles.CardContainer data-testid="MovieSkeletonLoadingContainer">
    <MovieSkeletonLoadingStyles.Skeleton
      animation="wave"
      variant="rect"
      height="300px"
    />
    <MovieSkeletonLoadingStyles.CardContent>
      <MovieSkeletonLoadingStyles.Skeleton
        animation="wave"
        height={10}
        width="85%"
      />
      <MovieSkeletonLoadingStyles.Skeleton
        animation="wave"
        height={10}
        width="40%"
      />
      <MovieSkeletonLoadingStyles.Skeleton
        animation="wave"
        variant="circle"
        width={20}
        height={20}
      />
    </MovieSkeletonLoadingStyles.CardContent>
  </MovieSkeletonLoadingStyles.CardContainer>
);

export default MovieSkeletonLoading;

/* eslint-disable import/prefer-default-export */

export function generateApiUrl(
  currentPage = 1,
  startDate = null,
  endDate = null
) {
  const startDateParam =
    startDate !== null ? `&primary_release_date.gte=${startDate}` : '';
  const endDateParam =
    endDate !== null ? `&primary_release_date.lte=${endDate}` : '';

  // Added this extra step only becuase the selection of movies are much better
  // when sorting by popularity
  const storyBy =
    startDate === null && endDate === null
      ? '&popularity.desc'
      : '&sort_by=vote_average.desc';

  return `${process.env.REACT_APP_MOVIEDB_API}${storyBy}&page=${currentPage}${startDateParam}${endDateParam}`;
}

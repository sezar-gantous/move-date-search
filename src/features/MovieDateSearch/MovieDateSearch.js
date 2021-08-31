import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import PropTypes from 'prop-types';
import * as MovieDateSearchStyles from './styledComponents';

const MovieDateSearch = ({
  changeStartDate,
  changeEndDate,
  selectedStartDate,
  selectedEndDate,
}) => (
  <MovieDateSearchStyles.HeaderContainer data-testid="MovieDateSearchContainer">
    <MovieDateSearchStyles.MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MovieDateSearchStyles.SearchGrid Grid container justifyContent="center">
        <MovieDateSearchStyles.KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy-MM-dd"
          margin="normal"
          id="StartDate"
          label="Start Date: 2021-08-31"
          value={selectedStartDate}
          onChange={changeStartDate}
          KeyboardButtonProps={{
            'aria-label': 'change start date',
          }}
        />
        <MovieDateSearchStyles.KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy-MM-dd"
          margin="normal"
          id="EndDate"
          label="End Date: 2021-08-31"
          value={selectedEndDate}
          onChange={changeEndDate}
          KeyboardButtonProps={{
            'aria-label': 'change end date',
          }}
        />
      </MovieDateSearchStyles.SearchGrid>
    </MovieDateSearchStyles.MuiPickersUtilsProvider>
  </MovieDateSearchStyles.HeaderContainer>
);

export const defaultProps = {
  selectedStartDate: new Date(),
  selectedEndDate: new Date(),
  changeStartDate: () => {},
  changeEndDate: () => {},
};

MovieDateSearch.defaultProps = defaultProps;

MovieDateSearch.propTypes = {
  selectedStartDate: PropTypes.objectOf(PropTypes.Date),
  selectedEndDate: PropTypes.objectOf(PropTypes.Date),
  changeStartDate: PropTypes.func,
  changeEndDate: PropTypes.func,
};
export default MovieDateSearch;

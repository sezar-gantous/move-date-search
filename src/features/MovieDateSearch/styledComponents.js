import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const HeaderContainer = styled.div`
  background-color: white;
  margin-bottom: 1em;
`;

export const HeaderTitle = styled(Typography)`
  text-align: center
`;

export const SearchGrid = styled(Grid)`
  gap: 1em;
`;

export { KeyboardDatePicker };
export { MuiPickersUtilsProvider };


import styled from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';

/* eslint-disable import/prefer-default-export */
export const PagenationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`;
export const WhitePagination = styled(Pagination)`
  .MuiPaginationItem-root{ 
    color: white !important;
  }
  .MuiPaginationItem-page.Mui-selected{ 
    background-color: rgba(0, 0, 0, 0.80) !important;
  }
`;
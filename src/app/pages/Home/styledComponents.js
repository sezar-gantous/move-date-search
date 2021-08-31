import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';

export const ImageListContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, auto);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, 300px);
  }
`;
export const PosterContainer = styled(CardMedia)`
  height: 0;
  padding-top: 100%;
  background-position-y: 18% !important;
`;
export const CardContainer = styled(Card)`
  width: 100%;
  position: relative;
  text-align: center;
`;
export const Rating = styled(Typography)`
  position: absolute;
  bottom: 0;
  right: 1rem;
`;

export const ReleaseDate = styled(Typography)`
  position: absolute;
  bottom: 0;
  left: 1rem;
`;
export const RatingIcon = styled(StarIcon)`
  vertical-align: bottom;
`;


export { CardContent };
export { Typography };

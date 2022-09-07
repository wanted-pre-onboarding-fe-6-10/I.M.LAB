import styled from 'styled-components';

const MovieCardGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(230px, auto));
  max-width: 1200px;
  gap: 80px 10px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, auto));
  }
`;

export default MovieCardGridBox;

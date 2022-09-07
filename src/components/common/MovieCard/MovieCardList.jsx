import styled from 'styled-components';
import MovieCard from './MovieCard';

const MovieCardList = () => {
  return (
    <>
      <ContainerGridBox>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </ContainerGridBox>
    </>
  );
};

const ContainerGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, auto));
  gap: 100px 10px;
`;

export default MovieCardList;

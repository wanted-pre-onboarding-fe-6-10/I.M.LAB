import styled from 'styled-components';
import MoviesTab from './MoviesTab/MoviesTab';
import PopularMoviesList from './PopularMoviesList/PopularMoviesList';

const Home = () => {
  return (
    <Container>
      Home Page
      <MoviesTab />
      <PopularMoviesList />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: black;
`;

export default Home;

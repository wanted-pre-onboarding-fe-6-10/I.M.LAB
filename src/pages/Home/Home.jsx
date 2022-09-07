import styled from 'styled-components';
import MoviesTab from './MoviesTab/MoviesTab';
import PopularMoviesList from './PopularMoviesList/PopularMoviesList';
import ContentsBox from './TopContents/ContentsBox';

const Home = () => {
  return (
    <Container>
      <ContentsBox />
      <MoviesTab />
      <PopularMoviesList />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.bgColor};
`;

export default Home;

import styled from 'styled-components';
import MoviesTab from './MoviesTab/MoviesTab';

const Home = () => {
  return (
    <Container>
      Home Page
      <MoviesTab />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: black;
`;

export default Home;

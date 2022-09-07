import styled from 'styled-components';

const TopContents = ({ movies, toNext, toPrev }) => {
  const posterURL = 'https://image.tmdb.org/t/p/original';
  const backdropURL = 'https://image.tmdb.org/t/p/original';
  return (
    <Container>
      <div onClick={() => toPrev(100)}>prev</div>
      <Box bg={backdropURL + movies.backdrop_path}>
        <Poster src={posterURL + movies.poster_path} />
        <Wrapper>
          <Title>{movies.title}</Title>
          <SubTitle>{movies.original_title}</SubTitle>
          <OverView>{movies.release_date}</OverView>
          <OverView>{movies.overview}</OverView>
          <UserRate>회원점수 {movies.vote_average}점</UserRate>
        </Wrapper>
      </Box>
      <div onClick={() => toNext(-100)}>next</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 3em;
  float: left;
`;

const Poster = styled.img``;

const Box = styled.div`
  display: flex;
  padding: 3em;
  position: relative;
  background-image: ${props => `url(${props.bg})`};
  background-repeat: no-repeat;
  background-position: center;
  width: 1440px;
  height: 500px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1``;
const SubTitle = styled.h3``;
const OverView = styled.p``;
const UserRate = styled.p``;

export default TopContents;

import styled from 'styled-components';

const TopContents = ({ movies, toNext, toPrev }) => {
  const imgURL = process.env.REACT_APP_IMG_URL;

  return (
    <Container>
      <div onClick={() => toPrev(100)}>prev</div>
      <Box bg={imgURL + movies.backdrop_path}>
        <Poster src={imgURL + movies.poster_path} />
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
  align-items: center;
  width: 100vw;
  padding: 3em;
  background-color: #fff;
  float: left;
`;

const Box = styled.div`
  display: flex;
  padding: 3em;
  position: relative;
  background-image: ${props => `url(${props.bg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 1440px;
  height: 500px;
`;

const Poster = styled.img`
  border-radius: 10px;
  border: 2px solid #fff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2em;
`;

const Title = styled.h1``;

const SubTitle = styled.h3``;

const OverView = styled.p``;

const UserRate = styled.p``;

export default TopContents;

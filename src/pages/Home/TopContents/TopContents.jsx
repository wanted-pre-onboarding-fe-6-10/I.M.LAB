import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../../styles/theme';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const TopContents = ({ movies, toNext, toPrev }) => {
  const imgURL = process.env.REACT_APP_IMG_URL;
  const navigate = useNavigate();

  const movieOverView = movies.overview.substr(0, 150);
  const toMovieDetail = path => navigate(`/movieDetail/${path}`);
  const movieRate = `Rate : ${Math.floor(movies.vote_average)} / 10 점`;

  return (
    <Container>
      <MoveButton onClick={() => toPrev(100)}>
        <GrPrevious />
      </MoveButton>
      <Box bg={imgURL + movies.backdrop_path}>
        <Poster src={imgURL + movies.poster_path} onClick={() => toMovieDetail(movies.id)} />
        <Wrapper>
          <MovieTitle>
            <Title>{movies.title}</Title>
            <SubTitle>
              {movies.original_title} <ReleaseDate>{movies.release_date}</ReleaseDate>
            </SubTitle>
          </MovieTitle>
          <RateWrapper>{movieRate}</RateWrapper>
          <OverView>{movieOverView.length ? movieOverView + ' ...' : movieOverView}</OverView>
        </Wrapper>
      </Box>
      <MoveButton onClick={() => toNext(-100)}>
        <GrNext />
      </MoveButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 3em;
  background-color: ${lightTheme.subBoxColor};
  float: left;
`;

const Box = styled.div`
  display: flex;
  padding: 3em;
  position: relative;
  width: 1440px;
  height: 400px;
  &::before {
    content: '';
    position: absolute;
    background-image: ${props => `url(${props.bg})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 0.5;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`;

const Poster = styled.img`
  border-radius: 10px;
  border: 3px solid ${lightTheme.borderColor};
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  &:hover {
    margin: -1em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 3em;
  position: relative;
`;

const MoveButton = styled.button`
  width: 100px;
  margin: 1em;
  border: none;
  background-color: transparent;
  font-size: 2em;
  opacity: 0.1;
  color: ${darkTheme.textColor};
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const MovieTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2em;
`;

const Title = styled.h1`
  font-size: 2.2em;
  font-weight: bold;
  color: ${lightTheme.textColor};
`;

const SubTitle = styled.h3`
  font-size: 1.5em;
  color: #424242;
`;

const ReleaseDate = styled.span`
  font-size: 0.7em;
  color: #424242;
  margin-left: 1em;
`;

const OverView = styled.p`
  margin: 2em 0;
  width: 70%;
  font-size: 1em;
  color: ${lightTheme.textColor};
  line-height: 1.7em;
`;

const RateWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-weight: bold;
  color: ${lightTheme.textColor};
`;

export default TopContents;

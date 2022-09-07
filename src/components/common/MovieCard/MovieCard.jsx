import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchTopRatedMovie } from '../../../api/api';

const MovieCard = () => {
  const [topRated, setTopRated] = useState({});
  useEffect(() => {
    const SetData = async () => {
      const data = await fetchTopRatedMovie(1);
      setTopRated(data.results[1]);
      console.log(data.results[1]);
    };
    SetData();
  }, []);
  return (
    <>
      <Container>
        <Front>
          <FrontImg src={`https://image.tmdb.org/t/p/w500${topRated.poster_path}`} />
        </Front>
        <Back>
          <MovieHeader>
            <Img src={`https://image.tmdb.org/t/p/w500${topRated.poster_path}`} />
            <Title>{topRated.title}</Title>
            <MovieMadeAt>{topRated.release_date}</MovieMadeAt>
            <Rate>평점 8.4</Rate>
          </MovieHeader>
          <Desc>
            <Overview>{topRated.overview}</Overview>
          </Desc>
        </Back>
      </Container>
      <MovieTitle>{topRated.title}</MovieTitle>
    </>
  );
};

export default MovieCard;

const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
    transition: all 0.4s;
  }
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.4s;
  &:hover {
    opacity: 0;
  }
`;

const FrontImg = styled.img`
  float: left;
  width: 100%;
  height: 100%;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
  transition: all 0.4s;
  background: linear-gradient(to right, rgba(26, 25, 28, 0.95) 100%, transparent 100%);
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;

const Rate = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: #959595;
`;

const MovieHeader = styled.div`
  position: relative;
  padding: 25px;
  height: 40%;
  width: 100%;
`;

const Title = styled.div`
  color: #959595;
  font-weight: 400;
  width: 240px;
  font-size: 18px;
`;

const MovieTitle = styled.h1`
  color: black;
  font-weight: 400;
  width: 100%;
  font-size: 18px;
  padding-top: 15px;
  text-align: center;
`;

const MovieMadeAt = styled.h4`
  color: #555;
  font-weight: 400;
  font-size: 14px;
`;

const Overview = styled.p`
  display: inline-block;
  color: #959595;
  margin-top: 5px;
  height: 100%;
  font-size: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
`;

const Img = styled.img`
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
`;

const Desc = styled.div`
  padding: 25px;
  height: 60%;
  width: 100%;
`;

const MovieSocial = styled.div`
  height: 10%;
  padding-left: 15px;
  padding-bottom: 20px;
`;

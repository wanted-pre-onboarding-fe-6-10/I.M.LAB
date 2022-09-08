import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../../store/movieSlice';
import { fetchMovieDetail, fetchMovieVides } from '../../../api/api';
import MovieInfoTitle from '../MovieInfoBox/MovieInfoTitle';
import MovieInfoBody from '../MovieInfoBox/MovieInfoBody';
import MovieBuy from '../MovieInfoBox/MovieBuy';
import { useQuery } from '@tanstack/react-query';

const DetailHeader = ({ path }) => {
  const [videosData, setVideosData] = useState(null);

  const dispatch = useDispatch();
  const detailData = useSelector(state => state.movies[path]);
  console.log(buyData);
  // console.log(detailData); // [TODO] 60625, 429번은 아예 안나옴

  const { data } = useQuery(['videoData'], () => fetchMovieVides(path));

  useEffect(() => {
    fetchMovieDetail(path).then(result => {
      dispatch(add(result));
    });

    if (data) {
      setVideosData(data);
    }
  }, [dispatch, path, data]);

  const isRender = detailData && videosData;

  return (
    <div>
      {isRender && (
        <Container>
          <BackdropImg
            imgUrl={`https://image.tmdb.org/t/p/original${
              detailData.backdrop_path ?? detailData.poster_path
            }`}
          />

          <HeaderBox>
            {videosData.results?.[0] ? (
              <YouTube
                videoId={videosData.results?.[0].key}
                opts={{
                  width: '720',
                  height: '445',
                  playerVars: {
                    autoplay: 1,
                    mute: 1,
                  },
                }}
              />
            ) : (
              <NoVideoBox>no video</NoVideoBox>
            )}
            <InfoBox>
              <MovieInfoTitle path={path} />
              <MovieInfoBody path={path} />
              <MovieBuy path={path} />
            </InfoBox>
          </HeaderBox>
        </Container>
      )}
    </div>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
`;

const BackdropImg = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-image: url(${prop => prop.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;

const HeaderBox = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const NoVideoBox = styled.div`
  width: 720px;
  height: 445px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const InfoBox = styled.div`
  width: 90%;
  padding: 0 1.3rem;
  padding-bottom: 1.25rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: white;
`;

export default DetailHeader;

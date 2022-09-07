import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import { fetchMovieDetail, fetchMovieVides, fetchMovieBuy } from '../../../api/api';
import { BsHeartFill, BsFillBookmarkFill, BsFillStarFill } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../../store/movieSlice';

const DetailHeader = ({ path }) => {
  const [videosData, setVideosData] = useState(null);
  const [buyData = {}, setBuyData] = useState(null);
  const [iconStatus, setIconStatus] = useState({
    heartStatus: false,
    markStatus: false,
    rateStatus: false,
  });
  const [rateValue, setRateValue] = useState(0);
  let [rateShow, setRateShow] = useState(false);
  // console.log(detailData); // [TODO] 60625, 429번은 아예 안나옴

  const dispatch = useDispatch();
  const detailData = useSelector(state => state.movies[path]);

  useEffect(() => {
    fetchMovieDetail(path).then(result => {
      dispatch(add(result));
    });
    fetchMovieVides(path).then(result => setVideosData(result));
    fetchMovieBuy(path).then(result => setBuyData(result.results.KR));
  }, []);

  return (
    <div>
      {detailData && videosData && buyData && (
        <Container>
          <BackdropImg
            alt="img"
            src={`https://image.tmdb.org/t/p/original${
              detailData?.backdrop_path ?? detailData?.poster_path
            }`}
          />

          <HeaderBox
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              display: 'grid',
              placeItems: 'center',
              gridTemplateColumns: '50% 50%',
            }}
          >
            {videosData.results?.[0] ? (
              <YouTube
                videoId={videosData.results?.[0].key}
                opts={{
                  width: '696',
                  height: '376',
                  playerVars: {
                    autoplay: 1,
                    mute: 1,
                  },
                }}
              />
            ) : (
              <NoVideoBox>no video</NoVideoBox>
            )}

            <MovieInfoBox>
              <TitleWrapper>
                <Title>
                  {detailData.title}
                  &#40; {detailData.release_date?.slice(0, 4)} &#41;
                </Title>
                <IconWrapper>
                  <IconButton
                    onClick={() =>
                      setIconStatus(prev => ({ ...prev, heartStatus: !prev.heartStatus }))
                    }
                    status={iconStatus.heartStatus}
                  >
                    <BsHeartFill />
                  </IconButton>
                  <IconButton
                    onClick={() =>
                      setIconStatus(prev => ({ ...prev, markStatus: !prev.markStatus }))
                    }
                    status={iconStatus.markStatus}
                  >
                    <BsFillBookmarkFill />
                  </IconButton>
                  <IconButton
                    onClick={() => setRateShow(prev => !prev)} //  show만 조절
                    status={rateValue > 0 ? true : false} //  색깔 조절
                  >
                    <BsFillStarFill />
                  </IconButton>

                  {/* 평점 라벨 */}
                  <RatingWrapper
                    style={{
                      backgroundColor: 'lightgray',
                      border: `1px solid gray`,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {rateShow && (
                      <>
                        <TiDeleteOutline
                          onClick={() => setRateValue(0)}
                          style={{
                            fontSize: '24px',
                            color: 'gray',
                            marginLeft: '4px',
                          }}
                        />
                        <Rating
                          name="half-rating"
                          precision={0.5}
                          value={rateValue}
                          style={{
                            fontSize: '30px',
                            // padding: '5px 10px', // [TODO]  수정해야함
                          }}
                          onChange={(e, newValue) => {
                            setRateValue(newValue);
                          }}
                        />
                      </>
                    )}
                  </RatingWrapper>
                </IconWrapper>
              </TitleWrapper>

              <InfoWrapper>
                <Info>{detailData.adult ? 19 : '전체'}</Info>
                <Info>{detailData.release_date}</Info>
                <Info>{detailData.spoken_languages[0].name}</Info>
                <Info>
                  {detailData.genres.map(data => (
                    <span key={data.id}>{data.name}</span>
                  ))}
                </Info>
                <Info>{detailData.runtime}m</Info>
              </InfoWrapper>

              <InfoWrapper>
                {detailData.belongs_to_collection
                  ? detailData.belongs_to_collection?.name
                  : 'none series'}
              </InfoWrapper>

              <InfoWrapper>
                Product : {detailData.production_countries[0].iso_3166_1} ,
                {detailData.production_companies.map(data => (
                  <span key={data.id}> {data.name} , </span>
                ))}
              </InfoWrapper>

              <RateWrapper>Rate : {Math.floor(detailData.vote_average)} / 10</RateWrapper>

              <InfoWrapper>{detailData.tagline}</InfoWrapper>
              <InfoWrapper>
                <OverView>{detailData.overview}</OverView>
              </InfoWrapper>

              <BuyWrapper>
                <div>
                  <p>buy</p>
                  {buyData.buy?.map((data, idx) => (
                    <a href={`${BUY_URL[data.provider_name]}`} key={idx}>
                      <img
                        src={`https://image.tmdb.org/t/p/original${data.logo_path}`}
                        width="50"
                        height="50"
                        alt="img"
                      />
                    </a>
                  ))}
                  {buyData.flatrate?.map((data, idx) => (
                    <a href={`${BUY_URL[data.provider_name]}`} key={idx}>
                      <img
                        src={`https://image.tmdb.org/t/p/original${data.logo_path}`}
                        width="50"
                        height="50"
                        alt="img"
                      />
                    </a>
                  ))}
                </div>
                <div>
                  <p>rent</p>
                  {buyData.rent?.map((data, idx) => (
                    <a href={`${BUY_URL[data.provider_name]}`} key={idx}>
                      <img
                        key={idx}
                        src={`https://image.tmdb.org/t/p/original${data.logo_path}`}
                        width="50"
                        height="50"
                        alt="img"
                      />
                    </a>
                  ))}
                  {buyData.free?.map((data, idx) => (
                    <img
                      key={idx}
                      src={`https://image.tmdb.org/t/p/original${data.logo_path}`}
                      width="50"
                      height="50"
                      alt="img"
                    />
                  ))}
                </div>
              </BuyWrapper>
            </MovieInfoBox>
          </HeaderBox>
        </Container>
      )}
    </div>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;

const BackdropImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.5;
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
  width: 560px;
  height: 315px;
`;

const MovieInfoBox = styled.div`
  width: 100%;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-bottom: 10px;
`;

const IconButton = styled.button.attrs({ type: 'button' })`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 18px;
  margin-right: 10px;
  background-color: #af2828;
  color: ${prop => (prop.status ? '#ffd000' : 'beige')};
  border: none;
  border-radius: 50%;
`;

const RatingWrapper = styled.div`
  //
`;

const InfoWrapper = styled.div`
  margin-bottom: 10px;
`;

const Info = styled.span`
  margin-right: 10px;
`;

const RateWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const OverView = styled.div`
  width: 80%;
  line-height: 20px;
`;

const BuyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;

  p {
    font-size: 16px;
    font-weight: bold;
  }

  img {
    margin-right: 10px;
  }
`;

export default DetailHeader;

const BUY_URL = {
  Netflix: 'https://www.netflix.com/kr/',
  wavve:
    'https://www.wavve.com/?utm_source=google&utm_medium=search&utm_campaign=wavve_pc&utm_content=0.%EB%B8%8C%EB%9E%9C%EB%93%9C%ED%82%A4%EC%9B%8C%EB%93%9C&utm_term=WAVVE&gclid=Cj0KCQjw39uYBhCLARIsAD_SzMQ5LNlYwfOHqW-QQ1i0lD2dAbwBGmgcfm2rQsitgnB7VpiFP-5kqsUaAjo-EALw_wcB',
  'Google Play Movies': 'https://play.google.com/store/movies',
  'Naver Store': 'https://serieson.naver.com/v2/movie',
  'Disney Plus':
    'https://www.disneyplus.com/ko-kr?cid=DSS-Search-Google-71700000088339394-&s_kwcid=AL!8468!3!584589737656!b!!g!!%EB%94%94%EC%A6%88%EB%8B%88%20%ED%94%8C%EB%9F%AC%EC%8A%A4&gclid=Cj0KCQjw39uYBhCLARIsAD_SzMSEzHnOztm1jAwuZHJxDXmnL6ee4giIsV8s69uMZZnLTJPdEQvX4t8aAkFwEALw_wcB&gclsrc=aw.ds',
  Plex: 'https://www.plex.tv/',
  'Amazon Prime Video': 'https://www.primevideo.com/ref=atv_dp_mv_c_9zZ8D2_1_0',
  'Amazon Video': 'https://www.amazon.com/Amazon-Video/b?ie=UTF8&node=2858778011',
  'Apple iTunes': 'https://itunes.apple.com/us/genre/movies/id33',
  'Claro video': 'https://www.clarovideo.com/',
  'Sky Store': 'https://www.skystore.com/',
  'Microsoft Store': 'https://www.microsoft.com/en-us/store/movies-and-tv',
  YouTube: 'https://www.youtube.com/feed/storefront',
};

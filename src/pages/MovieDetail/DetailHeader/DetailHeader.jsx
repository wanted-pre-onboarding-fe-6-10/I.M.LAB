import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieDetail, fetchMovieVides, fetchMovieBuy } from '../../../api/api';
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

const DetailHeader = () => {
  const [detailData, setDetailData] = useState({});
  const [videosData, setVideosData] = useState({});
  const [buyData, setBuyData] = useState({});
  const getRequest = async () => {
    await fetchMovieVides(557).then(result => setVideosData(result));
    await fetchMovieBuy(557).then(result => setBuyData(result.results.KR));
    await fetchMovieDetail(557).then(result => setDetailData(result));
  };

  useEffect(() => {
    // [질문] api호출 여러개 있는데 이렇게 하는거 맞는지?
    getRequest();
  }, []);

  console.log(buyData);

  return (
    <div>
      {/* [질문] : 이렇게 detailData가 받아온 후 jsx 읽히게끔 하는거 맞는지? <- 데이터 3개 중 1개가 늦게 받아지면 렌더안됨 */}
      {detailData.id && (
        <div style={{ position: 'relative', width: '100%', height: '500px' }}>
          <img
            alt="img"
            width="100%"
            height="100%"
            style={{ opacity: 0.3 }}
            src={`https://image.tmdb.org/t/p/original${detailData?.backdrop_path}`}
          />

          {/* 질문 : iframe에 absolute로 지정 못해서 div을 만들었음. 마크업 이렇게 괜찮은지? */}
          <div
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
            <iframe
              width="96%"
              height="453"
              src={`https://www.youtube.com/embed/${videosData.results?.[0].key}?autoplay=1`} // [질문] 자동재생이 리로드?되야만 실행됨
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div style={{ width: '100%' }}>
              <h2>
                {detailData.title}
                &#40; {detailData.release_date?.slice(0, 4)} &#41;
              </h2>
              <p>
                {detailData.adult ? 19 : '전체'}
                {detailData.release_date}
                {detailData.spoken_languages[0].name}
                {detailData.genres.map(data => (
                  <span key={data.id}>{data.name}</span>
                ))}
                {detailData.runtime}m
              </p>
              <p>{detailData.belongs_to_collection?.name}</p>
              <p>{detailData.production_countries[0].iso_3166_1}</p>
              <p>
                {detailData.production_companies.map(data => (
                  <span key={data.id}>{data.name}</span>
                ))}
              </p>
              <div style={{ display: 'flex' }}>
                rate : {Math.floor(detailData.vote_average)}
                <ul style={{ display: 'flex' }}>
                  <li>좋아요</li>
                  <li>북마크</li>
                  <li>별표(클릭시 평점별5개)</li>
                </ul>
              </div>
              <p>{detailData.tagline}</p>
              <p>{detailData.overview}</p>
              <div>
                <div>
                  buy
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
                  rent
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
                </div>
                <div>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

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

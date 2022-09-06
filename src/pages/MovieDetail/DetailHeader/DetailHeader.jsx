import React, { useState, useEffect } from 'react';
import { fetchMovieDetail, fetchMovieVides, fetchMovieBuy } from '../../../api/api';
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

const DetailHeader = () => {
  const [detailData, setDetailData] = useState({});
  const [videosData, setVideosData] = useState({});
  const [buyData, setBuyData] = useState({});

  console.log(buyData);

  useEffect(() => {
    // [질문] api호출 여러개 있는데 이렇게 하는거 맞는지?
    fetchMovieVides(557).then(result => setVideosData(result));
    fetchMovieBuy(557).then(result => setBuyData(result.results.KR));
    fetchMovieDetail(557).then(result => setDetailData(result));
  }, []);

  return (
    <div>
      {/* [질문] : 이렇게 detailData가 받아온 후 jsx 읽히게끔 하는거 맞는지? <- 데이터 3개 중 1개가 늦게 받아지면 렌더안됨 */}
      {detailData.id && (
        <div style={{ position: 'relative', width: '100%', height: '500px' }}>
          <img
            alt="img"
            width="100%"
            height="100%"
            style={{ opacity: 0.1 }}
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
              gridTemplateColumns: '60% 40%',
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
              <p style={{ display: 'flex' }}>
                rate : {Math.floor(detailData.vote_average)}
                <ul style={{ display: 'flex' }}>
                  <li>좋아요</li>
                  <li>북마크</li>
                  <li>별표(클릭시 평점별5개)</li>
                </ul>
              </p>
              <p>{detailData.tagline}</p>
              <p>{detailData.overview}</p>
              <div>
                buy
                {buyData.buy.map((data, idx) => (
                  <img
                    key={idx}
                    src={`https://image.tmdb.org/t/p/original${data.logo_path}`}
                    width="50"
                    height="50"
                    alt="img"
                  />
                ))}
                rent
                {buyData.rent.map((data, idx) => (
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
      )}
    </div>
  );
};

export default DetailHeader;

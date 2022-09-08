import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchMovieBuy } from '../../../api/api';
import styled from 'styled-components';

const MovieBuy = ({ path }) => {
  const [buyData = {}, setBuyData] = useState(null);
  const { data } = useQuery(['buyData'], () => fetchMovieBuy(path));

  useEffect(() => {
    if (data) {
      setBuyData(data.results.KR);
    }
  }, [path, data]);

  return (
    <div>
      {buyData && (
        <BuyWrapper>
          <BuyIconBox>
            <p>buy</p>
            {buyData.buy?.map((data, idx) =>
              makeProviderIcon(`${BUY_URL[data.provider_name]}`, data.logo_path, idx)
            )}
            {buyData.flatrate?.map((data, idx) =>
              makeProviderIcon(`${BUY_URL[data.provider_name]}`, data.logo_path, idx)
            )}
          </BuyIconBox>
          <BuyIconBox>
            <p>rent</p>
            {buyData.rent?.map((data, idx) =>
              makeProviderIcon(`${BUY_URL[data.provider_name]}`, data.logo_path, idx)
            )}
            {buyData.free?.map((data, idx) =>
              makeProviderIcon(`${BUY_URL[data.provider_name]}`, data.logo_path, idx)
            )}
          </BuyIconBox>
        </BuyWrapper>
      )}
    </div>
  );
};

export default MovieBuy;

const BuyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BuyIconBox = styled.div`
  width: 50%;

  p {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.625rem;
  }

  img {
    margin-right: 0.625rem;
  }
`;

const makeProviderIcon = (linkUrl, imgPath, idx) => {
  return (
    <a href={linkUrl} key={idx}>
      <img src={`https://image.tmdb.org/t/p/original${imgPath}`} width="50" height="50" alt="img" />
    </a>
  );
};

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

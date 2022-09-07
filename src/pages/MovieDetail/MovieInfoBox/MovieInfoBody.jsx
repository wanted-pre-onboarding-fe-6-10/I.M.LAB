import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const MovieInfoBody = ({ path }) => {
  const detailData = useSelector(state => state.movies[path]);

  return (
    <>
      <InfoWrapper>
        <Info>
          <IsAdult>{detailData.adult ? '19세 이상' : '전체관람가'}</IsAdult>
        </Info>
        <Info>{detailData.release_date} •</Info>
        <Info>{detailData.spoken_languages[0].name} •</Info>
        <Info>
          {detailData.genres.map((data, idx) => (
            <span key={data.id}>
              {data.name}
              {idx !== detailData.genres.length - 1 ? ', ' : ' '}
            </span>
          ))}
          •
        </Info>
        <Info>{detailData.runtime}m</Info>
      </InfoWrapper>

      <RateWrapper>Rate : {Math.floor(detailData.vote_average)} / 10</RateWrapper>

      <InfoWrapper>
        {detailData.belongs_to_collection ? detailData.belongs_to_collection?.name : 'no series'}
      </InfoWrapper>

      <InfoWrapper>
        Product : {detailData.production_countries[0].iso_3166_1} •
        {detailData.production_companies.map((data, idx) => (
          <span key={data.id}>
            {data.name}
            {idx !== detailData.production_companies.length - 1 ? ', ' : ' '}
          </span>
        ))}
      </InfoWrapper>

      <InfoWrapper size="20" weight="bold" top="20">
        {detailData.tagline}
      </InfoWrapper>
      <InfoWrapper>
        <OverView>
          {detailData.overview.length > 320
            ? `${detailData.overview.slice(0, 321)}...`
            : detailData.overview}
        </OverView>
      </InfoWrapper>
    </>
  );
};

export default MovieInfoBody;

const InfoWrapper = styled.div`
  margin-bottom: 0.6rem;
  margin-top: ${prop => prop.top}px;
  font-size: ${prop => prop.size}px;
  font-weight: ${prop => prop.weight};
`;

const Info = styled.span`
  margin-right: 0.625rem;
`;

const IsAdult = styled.span`
  border: 1px solid white;
  padding: 3px;
  border-radius: 5px;
`;

const RateWrapper = styled.div`
  display: flex;
  margin-top: 1.25rem;
  margin-bottom: 0.6rem;
`;

const OverView = styled.div`
  width: 95%;
  line-height: 1.4rem;
`;

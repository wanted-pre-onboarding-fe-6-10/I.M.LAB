import React from 'react';
import styled from 'styled-components';
import { DetailHeader } from './DetailHeader';
import MovieCast from './MovieCast/MovieCast';
import MovieOpinion from './MovieOpinion/MovieOpinion';
import MovieSuggest from './MovieSuggest/MovieSuggest';
import MovieExtraDetail from './MovieExtraDetail/MovieExtraDetail';

const MovieMain = () => {
  return (
    <>
      <DetailHeader />
      <MovieDetailBlock>
        <MovieDetailLower>
          <MovieCast />
          <MovieOpinion />
          <MovieSuggest />
        </MovieDetailLower>
        <MovieDetailAside>
          <MovieExtraDetail />
        </MovieDetailAside>
      </MovieDetailBlock>
    </>
  );
};

export default MovieMain;

const MovieDetailBlock = styled.div`
  width: 1440px;
  padding: 1rem 5rem;
  margin: 0 auto;
  display: flex;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;
const MovieDetailAside = styled.div`
  width: 30%;
  padding-top: 1rem;
`;
const MovieDetailLower = styled.div`
  width: 70%;
  margin-right: 3rem;
`;

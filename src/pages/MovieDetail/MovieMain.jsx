import React from 'react';
import styled from 'styled-components';
import DetailHeader from './DetailHeader/DetailHeader';
import MovieCast from './MovieCast/MovieCast';
import MovieOpinion from './MovieOpinion/MovieOpinion';
import MovieSuggest from './MovieSuggest/MovieSuggest';
import MovieExtraDetail from './MovieExtraDetail/MovieExtraDetail';
import { useParams } from 'react-router-dom';

const MovieMain = () => {
  const { path } = useParams();
  return (
    <>
      <DetailHeader path={path} />
      <MovieDetailBlock>
        <MovieDetailLower>
          <MovieCast path={path} />
          <MovieOpinion path={path} />
          <MovieSuggest path={path} />
        </MovieDetailLower>
        <MovieDetailAside>
          <MovieExtraDetail path={path} />
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

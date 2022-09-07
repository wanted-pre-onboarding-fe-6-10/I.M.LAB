import React from 'react';
import styled from 'styled-components';
import MovieCast from './MovieCast/MovieCast';
import MovieOpinion from './MovieOpinion/MovieOpinion';

function MovieDetail() {
  return (
    <MovieDetailBlock>
      <MovieDetailLower>
        <MovieCast />
        <MovieOpinion />
      </MovieDetailLower>
    </MovieDetailBlock>
  );
}

export default MovieDetail;

const MovieDetailBlock = styled.div``;
const MovieDetailLower = styled.div`
  padding: 1rem;
  width: 70%;
`;

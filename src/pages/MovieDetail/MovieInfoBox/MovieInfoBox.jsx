import React from 'react';
import styled from 'styled-components';
import MovieInfoTitle from './MovieInfoTitle';
import MovieInfoBody from './MovieInfoBody';
import MovieBuy from './MovieBuy';

const MovieInfoBox = ({ path }) => {
  return (
    <InfoContainer>
      <MovieInfoTitle path={path} />
      <MovieInfoBody path={path} />
      <MovieBuy path={path} />
    </InfoContainer>
  );
};

export default MovieInfoBox;

const InfoContainer = styled.div`
  width: 90%;
  padding: 0 1.3rem;
  padding-bottom: 1.25rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: white;
`;

import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/theme';
import MovieReviewModal from '../MovieOpinion/MovieReviewModal';

function MovieReview() {
  const { path } = useParams();
  return (
    <MovieReviewBlock>
      <MovieInfo>11</MovieInfo>
      <MovieReviewBox>
        <ReviewButton>리뷰 쓰기</ReviewButton>
        <MovieReviewModal path={path} />
      </MovieReviewBox>
    </MovieReviewBlock>
  );
}

export default MovieReview;

const MovieReviewBlock = styled.div`
  width: 100%;
`;
const MovieInfo = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
`;

const MovieReviewBox = styled.div`
  width: 70%;
  margin: 1rem auto;
`;
const ReviewButton = styled.button`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  background-color: ${lightTheme.textColor};
  border: none;
  outline: none;
  color: ${lightTheme.bgColor};
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

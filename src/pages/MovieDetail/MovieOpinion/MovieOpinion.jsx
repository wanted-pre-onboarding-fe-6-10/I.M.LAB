import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/theme';
import MovieReviewModal from './MovieReviewModal';

function MovieOpinion() {
  return (
    <MovieOpinionBlock>
      <h3>사용자 의견</h3>
      <MovieReviewModal />
      <TotalReview>
        <Link to="reviews">모든 리뷰 보기</Link>
      </TotalReview>
    </MovieOpinionBlock>
  );
}

export default MovieOpinion;

const MovieOpinionBlock = styled.div`
  font-weight: 600;
  font-size: 1.4em;
  margin-bottom: 20px;
  padding: 1rem;
  border-bottom: 1px solid ${lightTheme.borderColor};

  h3 {
    margin-bottom: 1rem;
  }
`;
const TotalReview = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
`;

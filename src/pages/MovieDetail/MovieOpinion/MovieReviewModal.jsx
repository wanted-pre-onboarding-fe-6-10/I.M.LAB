import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { fetchReview } from '../../../api/api';
import { lightTheme } from '../../../styles/theme';
import { AiFillStar } from 'react-icons/ai';

function MovieReviewModal({ path }) {
  const [reviews, setReviews] = useState([]);
  const { data: movieReviews } = useQuery(['reviews'], () => fetchReview(path));

  useEffect(() => {
    if (movieReviews) {
      setReviews(movieReviews.results.slice(0, 3));
    }
  }, [movieReviews]);

  return (
    movieReviews &&
    (reviews.length === 0 ? (
      <MovieOpinionBlank>
        <span>리뷰가 없습니다</span>
      </MovieOpinionBlank>
    ) : (
      reviews.map((review, index) => (
        <MovieOpinionBox key={index}>
          {review.author_details.avatar_path ? <AuthorImage /> : <AuthorImageDummy />}
          <AuthorDetailWrapper>
            <AuthorDetailUpper>
              <div className="upperTitle">
                <span style={{ fontWeight: 'bold' }}>{review.author}의 리뷰</span>
                <div className="rating">
                  <AiFillStar />
                  <span> {review.author_details.rating}</span>
                </div>
              </div>
              <span style={{ fontSize: '0.9rem' }}>
                <span style={{ fontWeight: 500 }}>{review.author_details.name}</span>(이)가{' '}
                {review.created_at.slice(0, 10)}에 작성
              </span>
            </AuthorDetailUpper>
            <AuthorDetailLower>{review.content}</AuthorDetailLower>
          </AuthorDetailWrapper>
        </MovieOpinionBox>
      ))
    ))
  );
}

export default MovieReviewModal;

const MovieOpinionBox = styled.div`
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  padding: 1rem;
  border-radius: 5px;
  display: flex;
`;

const AuthorImage = styled.div``;
const AuthorImageDummy = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${lightTheme.borderColor};
  margin-right: 1rem;
`;
const AuthorDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const AuthorDetailUpper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 1.5rem;

  .upperTitle {
    display: flex;
    align-items: center;

    .rating {
      display: flex;
      align-items: center;
      margin-left: 1rem;
      font-size: 0.9rem;
      padding: 1px 8px;
      background-color: black;
      color: white;
      border-radius: 7px;
      font-weight: 400;

      svg {
        margin-right: 0.3rem;
        color: white;
        width: 10px;
      }
    }
  }
`;
const AuthorDetailLower = styled.p`
  font-weight: normal;
  font-size: 1rem;
`;
const MovieOpinionBlank = styled.div`
  margin: 1rem 0;
  font-weight: normal;
  font-size: 1rem;
`;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { fetchKeywords } from '../../../api/api';
import { lightTheme } from '../../../styles/theme';
import { useSelector } from 'react-redux';
import addComma from '../../../utils/addComma';

function MovieExtraDetail({ path }) {
  const [keywords, setKeywords] = useState([]);
  const { data: movieKeywords } = useQuery(['keywords'], () => fetchKeywords(path));
  const detailData = useSelector(state => state.movies[path]);

  useEffect(() => {
    if (movieKeywords) {
      setKeywords(movieKeywords.keywords);
    }
  }, [movieKeywords]);

  return (
    detailData && (
      <MovieExtraDetailBlock>
        <ExtraDetailBox>
          <span>원제</span>
          <span>{detailData.original_title}</span>
        </ExtraDetailBox>
        <ExtraDetailBox>
          <span>상태</span>
          <span>{detailData.status}</span>
        </ExtraDetailBox>
        <ExtraDetailBox>
          <span>원어</span>
          <span>{detailData.original_language}</span>
        </ExtraDetailBox>
        <ExtraDetailBox>
          <span>제작비</span>
          <span>${addComma(detailData.budget)}</span>
        </ExtraDetailBox>
        <ExtraDetailBox>
          <span>수익</span>
          <span>${addComma(detailData.revenue)}</span>
        </ExtraDetailBox>
        <ExtraKeywordBox>
          {keywords.map(keyword => (
            <ExtraKeywordWrapper key={keyword.id}>{keyword.name}</ExtraKeywordWrapper>
          ))}
        </ExtraKeywordBox>
      </MovieExtraDetailBlock>
    )
  );
}

export default MovieExtraDetail;

const MovieExtraDetailBlock = styled.div`
  width: 100%;
`;
const ExtraDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  span {
    &:first-child {
      font-weight: bold;
    }
  }
`;

const ExtraKeywordBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const ExtraKeywordWrapper = styled.div`
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  background-color: ${lightTheme.borderColor};
  padding: 4px 10px;
  border-radius: 4px;
`;

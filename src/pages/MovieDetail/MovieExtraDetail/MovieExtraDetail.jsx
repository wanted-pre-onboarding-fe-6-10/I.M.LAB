import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { fetchKeywords } from '../../../api/api';
import { lightTheme } from '../../../styles/theme';

function MovieExtraDetail({ path }) {
  const [keywords, setKeywords] = useState([]);
  const { data: movieKeywords } = useQuery(['keywords'], () => fetchKeywords(path));

  useEffect(() => {
    if (movieKeywords) {
      setKeywords(movieKeywords.keywords);
    }
  }, [movieKeywords]);

  return (
    <MovieExtraDetailBlock>
      <ExtraDetailBox>
        <span>원제</span>
        <span>11</span>
      </ExtraDetailBox>
      <ExtraDetailBox>
        <span>상태</span>
        <span>11</span>
      </ExtraDetailBox>
      <ExtraDetailBox>
        <span>원어</span>
        <span>11</span>
      </ExtraDetailBox>
      <ExtraDetailBox>
        <span>제작비</span>
        <span>11</span>
      </ExtraDetailBox>
      <ExtraDetailBox>
        <span>수익</span>
        <span>11</span>
      </ExtraDetailBox>
      <ExtraKeywordBox>
        {keywords.map(keyword => (
          <ExtraKeywordWrapper key={keyword.id}>{keyword.name}</ExtraKeywordWrapper>
        ))}
      </ExtraKeywordBox>
    </MovieExtraDetailBlock>
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

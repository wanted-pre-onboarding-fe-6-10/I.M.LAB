import { useQuery } from '@tanstack/react-query';
import { fetchPopularMovie } from '../../../api/api';
import TopContents from './TopContents';
import styled from 'styled-components';
import { useState } from 'react';

const ContentsBox = () => {
  const pageNumber = 1;
  const { isLoading, data } = useQuery(['topMovies'], () => fetchPopularMovie(pageNumber));
  const [moveImg, setMoveImg] = useState(0);

  const handleMoveImg = value => {
    setMoveImg(prev => prev + value);
  };

  if (isLoading) return <span>is Loading</span>;

  return (
    <Container>
      <Box move={moveImg}>
        {(data.results || []).map(movie => {
          return <TopContents key={movie.id} movies={movie} move={handleMoveImg} />;
        })}
      </Box>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
`;

const Box = styled.div`
  width: 2000vw;
  margin-left: ${props => props.move}%;
`;

export default ContentsBox;

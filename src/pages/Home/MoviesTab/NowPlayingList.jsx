import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { fetchNowPlayingMovie } from '../../../api/api';
import MoviesCard from './MoviesCard';

const NowPlayingList = () => {
  const { isLoading, data, refetch } = useQuery(['homeNowPlaying'], () => fetchNowPlayingMovie(1), {
    staleTime: 60 * 1000, // 1 minute
  });

  // 한시간마다 갱신되게 처리
  return (
    <Wrapper>
      {!isLoading ? data.results.map(item => <MoviesCard key={item.id} item={item} />) : '로딩중 '}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
`;

export default NowPlayingList;

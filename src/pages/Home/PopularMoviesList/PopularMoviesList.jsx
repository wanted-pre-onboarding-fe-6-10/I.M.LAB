import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { fetchPopularMovie } from '../../../api/api';
import MoviesCard from '../MoviesTab/MoviesCard';
import SeeMoreButton from '../MoviesTab/SeeMoreButton';

const PopularMoviesList = () => {
  const { ref, inView } = useInView();
  const { isLoading, data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['homePopular'],
    ({ pageParam = 1 }) => fetchPopularMovie(pageParam),
    { getNextPageParam: lastPage => lastPage.page + 1 }
  );

  useEffect(() => {
    // if (!hasNextPage) {
    //   alert('마지막 페이지입니다.');
    //   return;
    // }
    if (inView) fetchNextPage();
  }, [inView]);

  return (
    <Box>
      <Header>Popular</Header>
      <GuideText>현재 가장 인기있는 영화들을 보여드릴게요!</GuideText>
      <Wrapper>
        {!isLoading
          ? data.pages[0].results.map(item => <MoviesCard key={item.id} item={item} width="100%" />)
          : '로딩중 '}
      </Wrapper>
    </Box>
  );
};

const Box = styled.div`
  padding: 60px 100px;
`;

const Header = styled.h2`
  color: ${props => props.theme.textColor};
  font-size: 3em;
  font-weight: 600;
  margin-bottom: 8px;
`;

const GuideText = styled.div`
  color: ${props => props.theme.subTextColor};
`;

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: repeat(5, minmax(200px, 1fr));

  @media (max-width: 650px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default PopularMoviesList;

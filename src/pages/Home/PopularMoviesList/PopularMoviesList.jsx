import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { fetchPopularMovie } from '../../../api/api';
import { IMG_BASE_URL, PopularListCard } from '../MoviesTab/Temp';

const PopularMoviesList = () => {
  const { isLoading, data, refetch } = useQuery(['homePopular'], () => fetchPopularMovie(1), {
    staleTime: 60 * 1000, // 1 minute
  });

  return (
    <Box>
      <Header>Popular</Header>

      <Wrapper>
        {!isLoading
          ? data.results.map(item => (
              <PopularListCard key={item.id}>
                {item.id}
                <img src={IMG_BASE_URL + item.poster_path} alt={item.title} />
                {item.title}
              </PopularListCard>
            ))
          : '로딩중 '}
      </Wrapper>
    </Box>
  );
};

const Box = styled.div`
  /* display: grid; */
`;

const Header = styled.h2`
  color: ${props => props.theme.textColor};
  font-size: xx-large;
  font-weight: 600;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 100%;
  /* grid-column-gap: 5px; */

  @media (max-width: 650px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export default PopularMoviesList;

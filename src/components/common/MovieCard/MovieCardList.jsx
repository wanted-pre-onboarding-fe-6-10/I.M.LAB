import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchTopRatedMovie } from '../../../api/api';

const MovieCardList = () => {
  const [topRated, setTopRated] = useState(null);
  useEffect(() => {
    const SetData = async () => {
      const data = await fetchTopRatedMovie(1);
      setTopRated(data.results);
    };
    SetData();
  }, []);
  return (
    <>
      {topRated ? (
        <ContainerGridBox>
          {topRated.map(res => (
            <MovieCard CardData={res} key={res.title} />
          ))}
        </ContainerGridBox>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

const ContainerGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, auto));
  gap: 80px 10px;
`;

export default MovieCardList;

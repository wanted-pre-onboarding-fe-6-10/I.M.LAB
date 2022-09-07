import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { fetchNowPlayingMovie, fetchTopRatedMovie } from '../../api/api';
import MovieCardList from '../../components/common/MovieCard/MovieCardList';
import MovieCardGridBox from '../../components/common/MovieCard/GridBox';
const TopRated = () => {
  const { ref, inView } = useInView();
  const { status, data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['infinite', 'top_rated'],
    ({ pageParam = 1 }) => fetchTopRatedMovie(pageParam),
    {
      getNextPageParam: lastPage => {
        return lastPage.page + 1;
      },
    }
  );
  useEffect(() => {
    if (!hasNextPage) {
      alert('마지막 페이지입니다.');
      return;
    }
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  return (
    <>
      {status === 'loading' ? (
        <>Loading...</>
      ) : (
        <>
          <MovieCardGridBox>
            {data.pages.map(res => (
              <MovieCardList MovieListValue={res.results} key={`${res.page}-cardList`} />
            ))}
          </MovieCardGridBox>
          ))
          <div ref={ref}>{inView}</div>
        </>
      )}
    </>
  );
};

export default TopRated;

import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { fetchNowPlayingMovie, fetchTopRatedMovie } from '../../api/api';

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
        <div>
          {data.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.results.map(v => (
                <div key={v.id}>
                  <div>{v.original_title}</div>
                  <div>{v.title}</div>
                  <div>{v.release_date}</div>
                </div>
              ))}
            </React.Fragment>
          ))}
          <div ref={ref}>{inView}</div>
        </div>
      )}
    </>
  );
};

export default TopRated;

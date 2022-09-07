import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { rearg } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { fetchNowPlayingMovie, fetchTopRatedMovie, fetchUpcomingMovie } from '../../api/api';
import { genres } from '../../utils/constant';
import { sortBy } from '../../utils/sort';

const TopRated2 = () => {
  const { ref, inView } = useInView();
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [total, setTotal] = useState(0);
  const {
    status,
    data: topRatedMovieList,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['infinite', 'top_rated'],
    ({ pageParam = 1 }) => fetchTopRatedMovie(pageParam),
    {
      getNextPageParam: lastPage => {
        return lastPage.page + 1;
      },
    }
  );

  const getTMDB = async page => {
    const res = await fetchTopRatedMovie(page);
    if (!total) {
      if (res.total_pages > 500) {
        setTotal(500);
      } else {
        setTotal(res.total_pages);
      }
    }
    res.results.forEach(v => setTopRatedMovies(prev => [...prev, v]));
  };

  useEffect(() => {
    getTMDB();
  }, []);

  useEffect(() => {
    if (total) {
      setTopRatedMovies([]);
      for (let i = 1; i < total + 1; i++) {
        getTMDB(i);
      }
      // *************************************************************
      // *************************************************************
      // 해당 부분은 필터 부분의 dropbox를 선택할 때 동작하도록 구현하면 됨
      // dropbox별로 키값을 value로 정하고 선택하면 해당 키값으로 동작하게끔 구현하기.
      // *************************************************************
      // *************************************************************
      // const sortResult = sortBy(topRatedMovies, 'vote_average_asc');
      // console.log(sortResult);
    }
  }, [total]);

  useEffect(() => {
    if (status === 'loading') return;
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
          {topRatedMovieList.pages.map((page, i) => (
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

export default TopRated2;

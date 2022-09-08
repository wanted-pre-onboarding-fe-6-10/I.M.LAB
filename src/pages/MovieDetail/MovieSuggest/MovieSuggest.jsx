import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import { fetchRecommendations } from '../../../api/api';
import { lightTheme } from '../../../styles/theme';

const IMAGE_URL = process.env.REACT_APP_IMG_BASE_URL;
function MovieSuggest({ path }) {
  const [recommends, setRecommend] = useState([]);
  const { data: movieRecommend } = useQuery(['recommendation'], () => fetchRecommendations(path));

  useEffect(() => {
    if (movieRecommend) {
      setRecommend(movieRecommend.results);
    }
  }, [movieRecommend]);

  const onMoveMovieDetail = id => {
    window.location.replace(`/movieDetail/${id}`);
  };

  return (
    movieRecommend && (
      <MovieSuggestBlock>
        <h3>추천</h3>
        <SwiperBox>
          <Swiper
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
          >
            {recommends.map(recommend => (
              <SwiperSlide key={recommend.id} onClick={() => onMoveMovieDetail(recommend.id)}>
                <RecommendImage
                  src={`${IMAGE_URL}/${recommend.backdrop_path}`}
                  alt="recommendImg"
                />
                <RecommendInfo>
                  <span>{recommend.title}</span>
                  <span>{Math.round(recommend.vote_average * 10)}%</span>
                </RecommendInfo>
              </SwiperSlide>
            ))}
            <div className="swiper-button-next">
              <BsFillArrowRightCircleFill />
            </div>
            <div className="swiper-button-prev">
              <BsFillArrowLeftCircleFill />
            </div>
          </Swiper>
        </SwiperBox>
      </MovieSuggestBlock>
    )
  );
}

export default MovieSuggest;

const MovieSuggestBlock = styled.div`
  font-weight: 600;
  font-size: 1.4em;
  margin-bottom: 20px;
  padding: 1rem;
  border-bottom: 1px solid ${lightTheme.borderColor};
  h3 {
    margin-bottom: 1rem;
  }
`;

const SwiperBox = styled.div`
  .swiper-wrapper {
    padding: 1rem;
    padding-left: 0;
    .swiper-slide {
      border-radius: 7px;
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 20vh;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    svg {
      color: ${lightTheme.bgColor};
      opacity: 0.8;
      font-size: 100px;
    }
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
`;

const RecommendImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 7px;
`;
const RecommendInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 1rem;
  margin-top: 0.4rem;
`;

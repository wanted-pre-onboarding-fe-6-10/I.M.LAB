import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { lightTheme } from '../../../styles/theme';
import { useQuery } from '@tanstack/react-query';
import { fetchMovieCredits } from '../../../api/api';

function MovieCast() {
  const [casts, setCasts] = useState([]);
  const { data } = useQuery(['detail'], () => fetchMovieCredits(361743));

  useEffect(() => {
    if (data) {
      setCasts(data.cast);
    }
  }, [data]);

  return (
    <MovieCastBlock>
      <h3>주요 출연진</h3>
      <SwiperBox>
        <Swiper
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView="auto"
        >
          {casts.map(cast => (
            <SwiperSlide key={cast.cast_id}>
              {cast.profile_path ? (
                <CastImage
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt="castProfile"
                />
              ) : (
                <CastDummyImage />
              )}
              <CastInfo>
                <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{cast.name}</span>
                <span>{cast.character}</span>
              </CastInfo>
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
    </MovieCastBlock>
  );
}

export default MovieCast;

const MovieCastBlock = styled.div`
  font-weight: 600;
  font-size: 1.4em;
  margin-bottom: 20px;
  padding: 1rem;
  border-bottom: 1px solid ${lightTheme.borderColor};
`;

const SwiperBox = styled.div`
  .swiper-wrapper {
    padding: 1rem;
    padding-left: 0;
    .swiper-slide {
      border-radius: 7px;
      box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
      width: 18%;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 30vh;
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

const CastImage = styled.img`
  width: 100%;
  height: 175px;
  border-radius: 7px 7px 0 0;
`;

const CastDummyImage = styled.div`
  width: 100%;
  height: 175px;
  background-color: ${lightTheme.subTextColor};
  border-radius: 7px 7px 0 0;
`;
const CastInfo = styled.div`
  margin: 1rem 1rem 1rem 1.5rem;
  font-weight: normal;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

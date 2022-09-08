import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { BsHeartFill, BsFillBookmarkFill, BsFillStarFill } from 'react-icons/bs';
import { BsDashCircle } from 'react-icons/bs';
import Rating from '@mui/material/Rating';

const MovieInfoTitle = ({ path }) => {
  const [iconStatus, setIconStatus] = useState({
    heartStatus: false,
    markStatus: false,
    rateStatus: false,
  });
  const [rateValue, setRateValue] = useState(0);
  let [rateShow, setRateShow] = useState(false);

  const detailData = useSelector(state => state.movies[path]);

  return (
    <TitleWrapper>
      <Title>
        {detailData.title}
        &#40; {detailData.release_date?.slice(0, 4)} &#41;
      </Title>

      <IconWrapper>
        <IconButton
          onClick={() => setIconStatus(prev => ({ ...prev, heartStatus: !prev.heartStatus }))}
          status={iconStatus.heartStatus}
        >
          <BsHeartFill />
        </IconButton>

        <IconButton
          onClick={() => setIconStatus(prev => ({ ...prev, markStatus: !prev.markStatus }))}
          status={iconStatus.markStatus}
        >
          <BsFillBookmarkFill />
        </IconButton>

        <IconButton
          onClick={() => setRateShow(prev => !prev)}
          status={rateValue > 0 ? true : false}
        >
          <BsFillStarFill />
        </IconButton>
      </IconWrapper>

      <RatingWrapper>
        {rateShow && (
          <Bubble>
            <Rating
              name="half-rating"
              precision={0.5}
              value={rateValue}
              className="rateStar"
              onChange={(e, newValue) => {
                setRateValue(newValue);
              }}
            />
            <BsDashCircle onClick={() => setRateValue(0)} className="deleteCircle" />
          </Bubble>
        )}
      </RatingWrapper>
    </TitleWrapper>
  );
};

export default MovieInfoTitle;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.25rem;
  padding-bottom: 0.6rem;
  position: absolute;
  right: 1.6rem;
  top: 0.8rem;
`;

const IconButton = styled.button.attrs({ type: 'button' })`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 1.1rem;
  margin-left: 1rem;
  background-color: #af2828;
  color: ${prop => (prop.status ? '#ffd000' : 'beige')};
  border: none;
  border-radius: 50%;
`;

const RatingWrapper = styled.div`
  background-color: lightgray;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 4rem;

  .rateStar {
    font-size: 1.9rem;
    padding: 5px 0;
    padding-left: 5px;
  }

  .deleteCircle {
    font-size: 1.25rem;
    color: gray;
    margin-left: 5px;
    margin-bottom: 4px;
  }
`;

const Bubble = styled.div`
  position: relative;
  width: 190px;
  height: 40px;
  padding: 0px;
  background: #ffffff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;

  &::after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 12px 20px;
    border-color: #ffffff transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -20px;
    left: 133px;
  }
`;

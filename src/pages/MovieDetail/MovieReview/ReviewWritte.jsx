import React, { useState } from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';

const ReviewWritte = () => {
  let [rateValue, setRateValue] = useState(0);

  return (
    <WritteContainer>
      <Header>
        <HeaderMessage>별점을 선택해주세요.</HeaderMessage>
        <RatingBox>
          <Rating
            name="half-rating"
            precision={0.5}
            value={rateValue}
            style={{
              fontSize: '30px',
            }}
            onChange={(e, newValue) => {
              setRateValue(newValue);
            }}
          />
          <RateNum>{rateValue * 2}/10</RateNum>
        </RatingBox>
        <section>
          <textarea />
        </section>
      </Header>
    </WritteContainer>
  );
};

const WritteContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: aliceblue;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderMessage = styled.p`
  margin-bottom: 10px;
`;

const RatingBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const RateNum = styled.p`
  margin-left: 10px;
  margin-top: 5px;
  font-size: 20px;
`;

const TextArea = styled.textarea`
  //
`;

export default ReviewWritte;

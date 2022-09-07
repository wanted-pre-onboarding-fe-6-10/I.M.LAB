import React, { useState } from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import { FaUserAlt } from 'react-icons/fa';

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
        <Section>
          <TextArea placeholder="감상평을 남겨주세요." />
          <SpoilerBox>
            <p>감상평에 스포일러가 포함되어있나요?</p>
            <InputLabel>
              <input type="radio" name="spoiler" value="true" /> 있다
            </InputLabel>
            <InputLabel>
              <input type="radio" name="spoiler" value="false" /> 없다
            </InputLabel>
          </SpoilerBox>
        </Section>
        <footer>
          <button>취소</button>
          <button>확인</button>
        </footer>
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
  font-size: 1.5rem;
`;

const RatingBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RateNum = styled.p`
  margin-left: 10px;
  margin-top: 5px;
  font-size: 20px;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const TextArea = styled.textarea`
  width: 70%;
  height: 10rem;
  resize: none;
  padding: 10px;
`;

const SpoilerBox = styled.div`
  margin-top: 2rem;
  border-top: 2px solid lightgray;
  width: 90%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputLabel = styled.label`
  margin-top: 5px;
`;

export default ReviewWritte;

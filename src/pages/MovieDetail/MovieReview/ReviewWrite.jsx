import React, { useState } from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';

const ReviewWrite = ({ setOpen }) => {
  const [userReview, setUserReview] = useState({ rateValue: 0, reviewText: '', isSpoiler: '' });
  const [errShow, setErrShow] = useState(false);

  return (
    <WriteContainer>
      <Header>
        <HeaderMessage>리뷰을 작성해주세요.</HeaderMessage>
        <RatingBox>
          <Rating
            name="half-rating"
            precision={0.5}
            value={userReview.rateValue}
            className="rate"
            onChange={(e, newValue) => {
              setUserReview(prev => ({ ...prev, rateValue: +newValue }));
            }}
          />
          <RateNum>{userReview.rateValue * 2}/10</RateNum>
        </RatingBox>

        <Section>
          <TextArea
            placeholder="감상평을 남겨주세요."
            value={userReview.reviewText}
            onChange={e => setUserReview(prev => ({ ...prev, reviewText: e.target.value }))}
          />
          <ErrMessageBox>
            {!userReview.reviewText && errShow && <ErrMessage>리뷰를 작성해주세요</ErrMessage>}
          </ErrMessageBox>
          <SpoilerBox>
            <div>
              <p>감상평에 스포일러가 포함되어있나요?</p>
              <ErrMessageBox>
                {!userReview.isSpoiler && errShow && <ErrMessage>선택해주세요</ErrMessage>}
              </ErrMessageBox>
            </div>
            <LabelBox>
              <InputLabel>
                <input
                  type="radio"
                  name="spoiler"
                  value="true"
                  onChange={e => setUserReview(prev => ({ ...prev, isSpoiler: e.target.value }))}
                />
                있다
              </InputLabel>
              <InputLabel>
                <input
                  type="radio"
                  name="spoiler"
                  value="false"
                  onChange={e => setUserReview(prev => ({ ...prev, isSpoiler: e.target.value }))}
                />
                없다
              </InputLabel>
            </LabelBox>
          </SpoilerBox>
        </Section>

        <Footer>
          <Button type="button" onClick={() => setOpen(prev => !prev)}>
            취소
          </Button>
          <Button
            type="submit"
            onClick={() => {
              if (userReview.reviewText && userReview.isSpoiler) {
                setOpen(prev => !prev);
                alert('등록되었습니다');
                return;
              } else {
                setErrShow(true);
              }
            }}
          >
            확인
          </Button>
        </Footer>
      </Header>
    </WriteContainer>
  );
};

const WriteContainer = styled.div`
  width: 100%;
  height: 100%;
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

  .rate {
    font-size: 2rem;
  }
`;

const RateNum = styled.p`
  margin-left: 10px;
  margin-top: 5px;
  font-size: 1.5rem;
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
  padding: 0.8rem;
  margin-top: 1rem;
`;

const ErrMessageBox = styled.div`
  width: 70%;
  height: 10px;
`;

const ErrMessage = styled.p`
  color: #cf0606;
`;

const SpoilerBox = styled.div`
  margin-top: 2rem;
  border-top: 2px solid lightgray;
  width: 95%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputLabel = styled.label`
  margin-top: 1rem;
`;

const LabelBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`;

const Footer = styled.footer`
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
  width: 80%;
`;

const Button = styled.button`
  width: 13rem;
  height: 2rem;
  border-radius: 0.2rem;
  border: 1px solid gray;
  cursor: pointer;
`;

export default ReviewWrite;

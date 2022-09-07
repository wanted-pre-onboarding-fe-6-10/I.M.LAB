import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/theme';
import { useSelector } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import MovieReviewModal from '../MovieOpinion/MovieReviewModal';
import ReviewWrite from './ReviewWrite';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const IMAGE_URL = process.env.REACT_APP_IMG_BASE_URL;

function MovieReview() {
  const [open, setOpen] = React.useState(false);
  const { path } = useParams();
  const detailData = useSelector(state => state.movies[path]);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    detailData && (
      <MovieReviewBlock>
        <MovieInfo>
          <ReviewImage src={`${IMAGE_URL}/${detailData.poster_path}`} alt="posterImage" />
          <ReviewTextBox>
            <div className="reviewTextTop">
              <span>{detailData.title}</span>
              <span>({detailData.release_date.slice(0, 4)})</span>
            </div>
            <div className="reviewTextBottom" onClick={() => navigate(-1)}>
              <AiOutlineArrowLeft />
              <span>메인으로 돌아가기</span>
            </div>
          </ReviewTextBox>
        </MovieInfo>
        <MovieReviewBox>
          <Button onClick={handleOpen}>
            <ReviewButton>리뷰 쓰기</ReviewButton>
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <ReviewWrite />
            </Box>
          </Modal>
          <MovieReviewModal path={path} />
        </MovieReviewBox>
      </MovieReviewBlock>
    )
  );
}

export default MovieReview;

const MovieReviewBlock = styled.div`
  width: 100%;
`;
const MovieInfo = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 3.5rem 15rem;
  background-color: ${lightTheme.borderColor};
`;

const MovieReviewBox = styled.div`
  width: 70%;
  margin: 1rem auto;
`;

const ReviewImage = styled.img`
  width: 57px;
  height: 87px;
  border-radius: 7px;
  margin-right: 1.5rem;
`;
const ReviewTextBox = styled.div`
  .reviewTextTop {
    span {
      font-size: 2.2rem;
      &:first-child {
        font-weight: 700;
        margin-right: 0.5rem;
      }
      &:last-child {
        font-weight: 400;
        opacity: 0.8;
      }
    }
  }

  .reviewTextBottom {
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    opacity: 0.6;

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const ReviewButton = styled.p`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  background-color: ${lightTheme.textColor};
  border: none;
  outline: none;
  color: ${lightTheme.bgColor};
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: '70%',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '8px',
  p: 4,
};

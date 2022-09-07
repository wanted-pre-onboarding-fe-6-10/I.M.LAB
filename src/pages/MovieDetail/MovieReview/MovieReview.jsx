import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/theme';
import MovieReviewModal from '../MovieOpinion/MovieReviewModal';
import ReviewWritte from './ReviewWritte';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function MovieReview() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { path } = useParams();
  return (
    <MovieReviewBlock>
      <MovieInfo>11</MovieInfo>
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
            <ReviewWritte />
          </Box>
        </Modal>
        <MovieReviewModal />
        <ReviewButton>리뷰 쓰기</ReviewButton>
        <MovieReviewModal path={path} />
      </MovieReviewBox>
    </MovieReviewBlock>
  );
}

export default MovieReview;

const MovieReviewBlock = styled.div`
  width: 100%;
`;
const MovieInfo = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
`;

const MovieReviewBox = styled.div`
  width: 70%;
  margin: 1rem auto;
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

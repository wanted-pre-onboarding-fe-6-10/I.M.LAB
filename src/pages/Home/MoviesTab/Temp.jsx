import styled from 'styled-components';

/* 공통으로 뺼 컴포넌트들 */
export const PreviewCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  padding: 4px 0;
  width: 60px;
  z-index: 1;
  box-shadow: black;

  :hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  & + & {
    margin-left: 10px;
  }
`;

export const PopularListCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  padding: 4px 0;
  width: 100px;
  z-index: 1;
  box-shadow: black;

  :hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

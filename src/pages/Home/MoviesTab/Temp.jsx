import styled from 'styled-components';

/* 공통으로 뺼 컴포넌트들 */
export const PreviewCard = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: rgba(0, 0, 0, 0.3); */
  border-radius: 4px;
  /* padding: 4px 0; */
  /* overflow: hidden; */
  margin: 32px 0;
  width: 15%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  :hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  & + & {
    margin-left: 12px;
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

export const MoviesCard = ({ item }) => {
  return <></>;
  {
    /* <div class="news-card">
        <a href="#" class="news-card__card-link"></a>
        <img
          src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
          class="news-card__image"
        />
        <div class="news-card__text-wrapper">
          <h2 class="news-card__title">Amazing First Title</h2>
          <div class="news-card__post-date">Jan 29, 2018</div>
          <div class="news-card__details-wrapper">
            <p class="news-card__excerpt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore
              repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;
            </p>
            <a href="#" class="news-card__read-more">
              Read more <i class="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div> */
  }
  // </Wrapper>
};

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

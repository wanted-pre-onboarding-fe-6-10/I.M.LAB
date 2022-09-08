import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MoviesCard = ({ item, width }) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/movieDetail/${item.id}`)} width={width ?? '15%'}>
      <MoviePoster src={process.env.REACT_APP_IMG_BASE_URL + item.poster_path} alt={item.title} />
      <MovieDetail className="movie-detail">
        <Title>{item.title}</Title>
        <ReleaseDate>{item.release_date}</ReleaseDate>
        <GenreGroup>
          {item.genre_ids.map(item => (
            <GenreBadge key={item}>{item}</GenreBadge>
          ))}
        </GenreGroup>
        <Overview>{item.overview}</Overview>
      </MovieDetail>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 4px;
  margin: 32px 0;
  width: ${props => props.width};
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  align-items: stretch;
  cursor: pointer;

  & + & {
    margin-left: 12px;
  }
`;

const MoviePoster = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const MovieDetail = styled.div`
  /* display: none; */
  flex-direction: column;
  position: absolute;
  top: 0px;
  transition: background-color 0.5s ease;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 4px;
  color: transparent;
  overflow: hidden;
  &:hover {
    display: flex;
    background-color: rgba(0, 0, 0, 0.7);
    transition: background-color 0.5s ease;
  }
`;

const Title = styled.div`
  font-size: x-large;
  font-weight: 600;
  color: transparent;
  ${MovieDetail}:hover & {
    color: white;
    transition: color 0.5s ease;
  }
`;

const ReleaseDate = styled.div`
  ${MovieDetail}:hover & {
    color: darkgray;
    transition: color 0.5s ease;
  }
`;

const GenreGroup = styled.div`
  display: flex;
  ${MovieDetail}:hover & {
    color: white;
    transition: color 0.5s ease;
  }
`;

const GenreBadge = styled.span`
  padding: 2px;
  border-radius: 4px;
  font-size: small;
  & + & {
    margin-left: 2px;
  }
  ${MovieDetail}:hover & {
    color: white;
    transition: background-color 0.5s ease, color 0.5s ease;
    background-color: orange;
  }
`;

const Overview = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: small;
  ${MovieDetail}:hover & {
    color: white;
    transition: color 0.5s ease;
  }
`;

export default MoviesCard;

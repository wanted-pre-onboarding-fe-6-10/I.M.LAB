import MovieCard from './MovieCard';

const MovieCardList = ({ MovieListValue }) => {
  const MovieList = MovieListValue;
  return (
    <>
      {MovieList ? (
        <>
          {MovieList.map(res => (
            <MovieCard CardData={res} key={`${res.id}-MovieCard`} />
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default MovieCardList;

import {
  List,
  MovieDate,
  MovieImg,
  MovieItem,
  MovieLink,
  MovieTitle,
} from './MoviesList.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`}>
            <MovieImg
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              width={200}
              alt="poster"
            />
            <MovieTitle>{movie.title || movie.name}</MovieTitle>
            {movie.release_date && (
              <MovieDate>
                ({String(movie.release_date).substring(0, 4)})
              </MovieDate>
            )}
          </MovieLink>
        </MovieItem>
      ))}
    </List>
  );
};

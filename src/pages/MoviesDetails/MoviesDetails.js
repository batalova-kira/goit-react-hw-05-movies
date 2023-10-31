import { getMovieById } from 'components/API';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  AboutImg,
  AboutText,
  AdditionalTitle,
  Box,
  BoxAbout,
  BtnBack,
  Img,
  ItemAdd,
  ListAdd,
} from './MoviesDetails.styled';
import { MovieLink } from 'components/MoviesList/MoviesList.styled';
import { Error, Loader } from 'components/Loader/Loader';

const MoviesDetails = () => {
  const [oneMovie, setOneMovie] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const { movieId } = useParams();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) return;
    const getOneMovie = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const fetchMovie = await getMovieById(movieId);
        setOneMovie(fetchMovie);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getOneMovie();
  }, [movieId]);

  return (
    <Box>
      <BtnBack to={backLinkLocationRef.current}>&#8920; Go back</BtnBack>
      <BoxAbout>
        <AboutImg>
          <Img
            src={
              oneMovie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`
                : defaultImg
            }
            width={300}
            alt="poster"
          />
        </AboutImg>
        <AboutText>
          {oneMovie.title ? (
            <h2>
              {oneMovie.title || oneMovie.original_title} (
              {String(oneMovie.release_date).substring(0, 4)})
            </h2>
          ) : (
            'Unfortunately this movie was not found! Please return to Home page!'
          )}
          {oneMovie.vote_average ? (
            <p>User Score {Math.floor(Number(oneMovie.vote_average) * 10)}%</p>
          ) : (
            ' '
          )}
          {oneMovie.overview && oneMovie.overview.length > 0 ? (
            <>
              <h3>Overview</h3>
              <p>{oneMovie.overview}</p>
            </>
          ) : (
            'Unfortunately, no description was found for this film.'
          )}
          {oneMovie.genres && oneMovie.genres.length > 0 ? (
            <>
              <h3>Genres</h3>
              <ul>
                {oneMovie.genres.map(item => (
                  <li key={item.id}>
                    <p>{item.name}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            'Not found genres'
          )}
        </AboutText>
      </BoxAbout>
      <AdditionalTitle>Additional information</AdditionalTitle>
      <ListAdd>
        <ItemAdd>
          <MovieLink to="cast">Cast</MovieLink>
        </ItemAdd>
        <ItemAdd>
          <MovieLink to="reviews">Reviews</MovieLink>
        </ItemAdd>
      </ListAdd>
      {isLoading && <Loader />}
      {error && <Error />}
      <Suspense fallback={<div>Please, wait few time..</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
export default MoviesDetails;

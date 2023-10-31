import { TrendingMovies } from 'components/API';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { BoxMovieList, Title } from './Home.styled';
import { Error, Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const moviesTrending = await TrendingMovies();
        setMovies(moviesTrending);
        if (moviesTrending.length === 0) {
          toast.error('Not found any movie!');
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <BoxMovieList>
      <Title>Trending today</Title>
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
      {error && <Error />}
    </BoxMovieList>
  );
};

export default Home;

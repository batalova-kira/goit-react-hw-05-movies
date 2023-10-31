import { getMovieSearch } from 'components/API';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BoxSearch, SearchBtn, SearchForm, SearchInput } from './Movies.styled';
import { Error, Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!searchMovie) return;
    async function getSearchMovie() {
      try {
        setIsLoading(true);
        setError(false);
        const fetchMovie = await getMovieSearch(searchMovie);
        setMovies(fetchMovie);
        if (fetchMovie.length === 0) {
          toast.error('Not found any movie!');
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getSearchMovie();
  }, [searchMovie]);

  const onSubmit = e => {
    e.preventDefault();

    const formValue = e.currentTarget;
    if (formValue.elements.query.value === '') {
      toast.error('Please fill out this field!');
      return setSearchParams({});
    }
    setSearchParams({ query: formValue.elements.query.value });
    formValue.reset();
  };

  return (
    <BoxSearch>
      <SearchForm onSubmit={onSubmit}>
        <SearchInput
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search..."
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchForm>

      {movies && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
      {error && <Error />}
    </BoxSearch>
  );
};

export default Movies;

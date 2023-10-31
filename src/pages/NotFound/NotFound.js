import { MovieLink, MovieTitle } from 'components/MoviesList/MoviesList.styled';

const NotFound = () => {
  return (
    <>
      <MovieTitle>
        Whoops! Page not found! Please return to {''}
        <MovieLink to="/">Home page</MovieLink> !
      </MovieTitle>
    </>
  );
};
export default NotFound;

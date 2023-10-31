import { getMovieReviews } from 'components/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewBox, ReviewText, ReviewTitle } from './Rewiews.styled';
import { Error, Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';

const Rewiews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const getReview = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const fetchReview = await getMovieReviews(movieId);
        setReviews(fetchReview.results);
        if (fetchReview.results.length === 0) {
          toast.error('Sorry, we don`t have any reviews for this movie!');
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getReview();
  }, [movieId]);

  return (
    <ReviewBox>
      {isLoading && <Loader />}
      {error && <Error />}
      {reviews ? (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <ReviewTitle> {item.username || item.author}</ReviewTitle>
              <ReviewText>{item.content}</ReviewText>
            </li>
          ))}
        </ul>
      ) : (
        <p>'Sorry, we don`t have any reviews for this movie!'</p>
      )}
    </ReviewBox>
  );
};

export default Rewiews;

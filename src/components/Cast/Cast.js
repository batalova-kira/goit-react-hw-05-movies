import { getMovieCast } from 'components/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Actor,
  Actors,
  CastBox,
  CharacterCast,
  ImgCast,
  TitleCast,
} from './Cast.styled';
import { Error, Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const fetchCast = await getMovieCast(movieId);
        setActors(fetchCast);
        if (fetchCast.length === 0) {
          toast.error('Sorry, there is no information about the cast!');
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <CastBox>
      {isLoading && <Loader />}
      {error && <Error />}
      {actors ? (
        <Actors>
          {actors.map(item => (
            <Actor key={item.id}>
              <ImgCast
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                    : defaultImg
                }
                width={150}
                alt="poster"
              />
              <TitleCast> {item.name || item.original_name}</TitleCast>
              <CharacterCast>Character: {item.character}</CharacterCast>
            </Actor>
          ))}
        </Actors>
      ) : (
        'Sorry, there is no information about the cast!'
      )}
    </CastBox>
  );
};

export default Cast;

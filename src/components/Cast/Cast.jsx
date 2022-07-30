import { getCast } from 'services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { List, ListItem, Image, Name } from './Cast.styled';
import imageDefault from '../../defaultImages/no_image.png';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(setCast).catch(console.log);
  }, [movieId]);

  return (
    <>
      {cast && (
        <List>
          {cast
            .slice(0, 21)
            .map(
              ({
                original_name: name,
                character,
                id,
                profile_path: avatar,
              }) => (
                <ListItem key={id}>
                  <Image
                    src={
                      avatar
                        ? `https://image.tmdb.org/t/p/w500${avatar}`
                        : imageDefault
                    }
                    alt="actor"
                    width="177"
                  />
                  <Name>{name}</Name>
                  <p>{character}</p>
                </ListItem>
              )
            )}
        </List>
      )}
      {cast?.length === 0 && <p>No information</p>}
    </>
  );
};

export default Cast;

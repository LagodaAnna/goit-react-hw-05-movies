import { getReviews } from 'services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ListItem, Author } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setReviews).catch(console.log);
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <ListItem key={id}>
              <Author>{author}</Author>
              <p>{content}</p>
            </ListItem>
          ))}
        </ul>
      ) : (
        <p>We don't have any review for this movie</p>
      )}
    </>
  );
};

export default Reviews;

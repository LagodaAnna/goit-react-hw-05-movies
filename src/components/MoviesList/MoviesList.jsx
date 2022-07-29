import { ListItem, Link } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies, propsLink }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <ListItem key={id}>
          <Link to={`${propsLink}${id}`} state={{ from: location }}>
            {title}
          </Link>
        </ListItem>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  propsLink: PropTypes.string.isRequired,
};

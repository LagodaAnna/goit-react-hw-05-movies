import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { useState, useEffect, Suspense } from 'react';
import defaultPoster from '../../defaultImages/no_poster.png';

import {
  Poster,
  Title,
  Score,
  OverviewTitle,
  Overview,
  GenresTitle,
  List,
  ListItem,
  Link,
  Button,
} from './MovieDetails.styled';
import Box from 'components/Box';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(movieId).then(setMovie).catch(console.log);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const {
    title,
    release_date: date,
    vote_average: userScore,
    overview,
    genres,
    poster_path: poster,
  } = movie;

  return (
    <main>
      <Button to={backLinkHref}>Go back</Button>
      <Box display="flex" mb={5} p={4} boxShadow="normal">
        {poster ? (
          <Poster
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt="poster"
            width="200"
          />
        ) : (
          <Poster src={defaultPoster} alt="poster" width="200" />
        )}
        <div>
          <Title>
            {title} ({date?.substr(0, 4) ?? 'Unknown'})
          </Title>
          <Score>
            User Score{' '}
            {userScore ? (userScore * 10).toFixed() + '%' : 'Unknown'}
          </Score>
          <OverviewTitle>Overview</OverviewTitle>
          <Overview>{overview}</Overview>
          <GenresTitle>Genres</GenresTitle>
          <p>{genres ? genres.map(item => item.name).join(' ') : 'Unknown'}</p>
        </div>
      </Box>
      <List>
        <ListItem>
          <Link to="cast" state={{ from: location.state.from }}>
            Cast
          </Link>
        </ListItem>
        <ListItem>
          <Link to="reviews" state={{ from: location.state.from }}>
            Reviews
          </Link>
        </ListItem>
      </List>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;

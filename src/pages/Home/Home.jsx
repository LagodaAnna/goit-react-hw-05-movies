import { useEffect, useState } from 'react';
import { Title } from './Home.styled';
import { getTrending } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    getTrending().then(setTrendMovies).catch(console.log);
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      <MoviesList movies={trendMovies} propsLink="movies/" />
    </main>
  );
};

export default Home;

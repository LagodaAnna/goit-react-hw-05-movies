import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { getMoviesByName } from 'services/api';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [moviesList, setMoviesList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setMoviesList(null);
    const name = searchParams.get('name');
    if (!name) {
      return;
    }
    getMoviesByName(name).then(setMoviesList).catch(console.log);
  }, [searchParams]);

  const updateQueryString = name => {
    name = name.trim();
    const query = name !== '' ? { name } : {};
    setSearchParams(query);
  };

  return (
    <main>
      <SearchBox onSubmitQuery={updateQueryString} />
      {moviesList && <MoviesList movies={moviesList} />}
    </main>
  );
};

export default Movies;

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Box from 'components/Box';
import { Header, List, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <List>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </List>
        </nav>
      </Header>
      <Box p={5}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

export default SharedLayout;

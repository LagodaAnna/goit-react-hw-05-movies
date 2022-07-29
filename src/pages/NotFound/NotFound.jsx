import { useNavigate } from 'react-router-dom';
import { Message, Button } from './NotFound.styled';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Message>
        Sorry, we couldn't find this page. Please, back to home page.
      </Message>
      <Button type="button" onClick={() => navigate('/', { replace: true })}>
        Go home
      </Button>
    </main>
  );
};

export default NotFound;

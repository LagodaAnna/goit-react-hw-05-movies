import PropTypes from 'prop-types';
import { Form, Input, Button } from './SearchBox.styled';

export const SearchBox = ({ onSubmitQuery }) => {
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        const form = e.currentTarget;
        onSubmitQuery(form.elements.name.value);
        form.reset();
      }}
    >
      <Input type="text" name="name" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchBox.propTypes = {
  onSubmitQuery: PropTypes.func.isRequired,
};

import { Box } from 'components/Box/Box';
import { useState } from 'react';

export const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newQuery = e.target.elements[0].value.trim();
    if (query === newQuery || newQuery === '') {
      return;
    }

    onSubmit(newQuery);
    setQuery(newQuery);
  };

  return (
    <Box as="form" m="0 auto" p={4} onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your query" />
      <button type="submit">Submit</button>
    </Box>
  );
};

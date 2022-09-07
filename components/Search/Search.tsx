import * as React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import VisuallyHidden from '@reach/visually-hidden';

const Search = () => {
  return (
    <Wrapper data-testid={'search'}>
      <FiSearch data-testid={'search-icon'} />
      <VisuallyHidden>
        <label htmlFor='search'>Search</label>
      </VisuallyHidden>
      <Input type='text' name='search' id='search' placeholder='Search...' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 1px solid var(--color-neutral-gray-300);
  max-width: 175px;
  display: flex;
  align-items: center;
  padding: 4px;
  & > svg {
    color: var(--color-neutral-gray-300);
    margin-right: 10px;
  }
`;
const Input = styled.input`
  border: none;
  background: transparent;
  color: var(--color-neutral-gray-500);
  font-size: 14px;
  &::placeholder {
    color: var(--color-neutral-gray-500);
  }
  &:focus-visible {
    outline-offset: 4px;
  }
`;

export default Search;

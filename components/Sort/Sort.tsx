import * as React from 'react';
import styled from 'styled-components';
import { Select } from '@mantine/core';
import { FiChevronDown } from 'react-icons/fi';

type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;

interface SortProps {
  options: Array<{ value: string; label: string }>;
  setSort: Dispatcher<string>;
  defaultValue?: string;
}

interface SortOnChangeProps {
  event: React.ChangeEvent<HTMLSelectElement>;
}

const Sort = ({ options, setSort, ...rest }: SortProps) => {
  return (
    <Wrapper>
      <Label htmlFor='sort-select'>Sort</Label>
      <StyledMantineSelect
        id={'sort-select'}
        name={'sort-select'}
        rightSection={<FiChevronDown size={24} />}
        data={options}
        onChange={(event: SortOnChangeProps) => {
          setSort(event?.target?.value);
        }}
        {...rest}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;
const Label = styled.label`
  color: var(--color-neutral-gray-700);
  margin-right: 16px;
  font-weight: var(--font-weight-medium);
  font-size: 16px;
  line-height: 19px;
`;

const StyledMantineSelect = styled(Select)`
  .mantine-Select-input {
    border: none;
    color: var(--color-neutral-gray-900);
    background: var(--color-neutral-gray-100);
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    width: 190px;
    height: 42px;
    padding: 12px 16px;
  }
  .mantine-Select-rightSection {
    color: var(--color-neutral-gray-900);
  }
`;

export default Sort;

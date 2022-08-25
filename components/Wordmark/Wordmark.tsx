import * as React from 'react';
import styled from 'styled-components';

interface WordmarkProps {
  children: React.ReactNode;
}

const Wordmark = ({ children, ...restProps }: WordmarkProps) => {
  return <Title {...restProps}>{children}</Title>;
};

const Title = styled.h1`
  color: var(--color-gray-900);
  font-weight: var(--font-weight-bold);
  font-size: 24px;
  line-height: 28px;
`;

export default Wordmark;

import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import VisuallyHidden from '@reach/visually-hidden';
import Search from '../Search';
import { FiShoppingBag } from 'react-icons/fi';

const SuperHeader = () => {
  return (
    <Wrapper data-testid='superheader'>
      <Copy>Free shipping on domestic orders over $75!</Copy>
      <RightGroup>
        <Search />
        <Link href='/help'>
          <Anchor>Help</Anchor>
        </Link>
        <IconWrapper>
          <Link href='/cart'>
            <Anchor>
              <VisuallyHidden>Shopping Bag</VisuallyHidden>
              <FiShoppingBag data-testid={'shopping-bag-icon'} />
            </Anchor>
          </Link>
        </IconWrapper>
      </RightGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  background: var(--color-neutral-gray-900);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px;
`;

const Copy = styled.p`
  color: var(--color-neutral-white);
  font-size: ${14 / 16 + 'rem'};
  font-weight: var(--font-weight-medium);
  line-height: 1.15;
`;

const RightGroup = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const Anchor = styled.a`
  color: var(--color-neutral-gray-300);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  font-size: 14px;
  line-height: 1.15;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: var(--color-neutral-white);
  }
`;

const IconWrapper = styled.div`
  svg {
    color: var(--color-neutral-gray-300);
  }
  &:hover {
    svg {
      color: var(--color-neutral-white);
      cursor: pointer;
    }
  }
`;

export default SuperHeader;

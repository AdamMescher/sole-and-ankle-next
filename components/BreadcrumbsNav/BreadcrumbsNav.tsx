import * as React from 'react';
import Link from 'next/link';
import { Breadcrumbs, Anchor } from '@mantine/core';
import styled from 'styled-components';

interface BreadcrumbsNavProps {
  items: Array<{
    label: string;
    value: string;
    href: string;
  }>;
}

const BreadcrumbsNav = ({ items }: BreadcrumbsNavProps) => {
  if (!items) {
    throw new Error('items prop is required within BreadcrumsNav component');
  }
  return (
    <StyledMantineBreadcrumbs data-testid={'breadcrumbs-nav'}>
      {items.map((item, index) => (
        <Link key={index} href={item.href}>
          <StyledMantineAnchor>{item.label}</StyledMantineAnchor>
        </Link>
      ))}
    </StyledMantineBreadcrumbs>
  );
};

const StyledMantineBreadcrumbs = styled(Breadcrumbs)`
  font-size: 14px;
  font-weight: var(--font-weight-medium);
  line-height: 1.15;
  .mantine-Breadcrumbs-separator {
    color: var(--color-neutral-gray-300);
  }
`;

const StyledMantineAnchor = styled(Anchor)`
  color: var(--color-neutral-gray-700);
`;

export default BreadcrumbsNav;

import { Breadcrumbs } from '@mantine/core';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import BreadcrumbsNav from './BreadcrumbsNav';

expect.extend(toHaveNoViolations);

describe('Search Component', () => {
  it('Should Render without errors', () => {
    const items = [
      {
        label: 'One',
        value: 'one',
        href: '/',
      },
      {
        label: 'Two',
        value: 'two',
        href: '/two',
      },
    ];
    render(<BreadcrumbsNav items={items} />);
    expect(screen.getByTestId('breadcrumbs-nav')).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    const items = [
      {
        label: 'One',
        value: 'one',
        href: '/',
      },
      {
        label: 'Two',
        value: 'two',
        href: '/two',
      },
    ];
    render(<BreadcrumbsNav items={items} />);
    expect(
      await axe(screen.getByTestId('breadcrumbs-nav'))
    ).toHaveNoViolations();
  });
  it('Should conatin expected children', () => {
    const items = [
      {
        label: 'One',
        value: 'one',
        href: '/',
      },
      {
        label: 'Two',
        value: 'two',
        href: '/two',
      },
    ];
    render(<BreadcrumbsNav items={items} />);
    expect(screen.getByText(/one/i)).toBeInTheDocument();
    expect(screen.getByText(/two/i)).toBeInTheDocument();
  });
});

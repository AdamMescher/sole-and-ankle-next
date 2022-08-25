import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Wordmark from './Wordmark';

expect.extend(toHaveNoViolations);

describe('App Component', () => {
  it('Should Render without errors', () => {
    render(<Wordmark>hello world</Wordmark>);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    render(<Wordmark>title goes here</Wordmark>);
    expect(
      await axe(screen.getByText(/title goes here/i))
    ).toHaveNoViolations();
  });
});

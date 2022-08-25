import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Search from './Search';

expect.extend(toHaveNoViolations);

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
describe('Search Component', () => {
  it('Should Render without errors', () => {
    render(<Search />);
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    render(<Search />);
    expect(await axe(screen.getByTestId('search'))).toHaveNoViolations();
  });
  it('Should conatin expected children', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });
});

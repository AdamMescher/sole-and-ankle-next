import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Home from './Home';

expect.extend(toHaveNoViolations);

describe('App Component', () => {
  it('Should Render without errors', () => {
    render(<Home />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    render(<Home />);
    expect(await axe(screen.getByTestId('home'))).toHaveNoViolations();
  });
});

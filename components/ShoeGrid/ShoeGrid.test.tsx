import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ShoeGrid from './ShoeGrid';
import SHOES from '../../utils/SHOES';

expect.extend(toHaveNoViolations);
describe('ShoeGrid Component', () => {
  it('Should Render without errors', () => {
    render(<ShoeGrid shoes={SHOES} />);
    expect(screen.getByTestId('shoe-grid')).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    render(<ShoeGrid shoes={SHOES} />);
    expect(await axe(screen.getByTestId('shoe-grid'))).toHaveNoViolations();
  });
});

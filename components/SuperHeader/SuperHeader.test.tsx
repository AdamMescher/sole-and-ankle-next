import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import SuperHeader from './SuperHeader';

expect.extend(toHaveNoViolations);

describe('SuperHeader Component', () => {
  it('Should Render without errors', () => {
    render(<SuperHeader />);
    expect(screen.getByTestId(/superheader/i)).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    render(<SuperHeader />);
    expect(await axe(screen.getByTestId(/superheader/i))).toHaveNoViolations();
  });
  it('Should conatin expected children', () => {
    const marketingCopy = 'Free shipping on domestic orders over $75!';
    render(<SuperHeader />);
    expect(screen.getByText(marketingCopy)).toBeInTheDocument();
    expect(screen.getByText(/help/i)).toBeInTheDocument();
    expect(screen.getByTestId(/shopping-bag-icon/i)).toBeInTheDocument();
  });
});

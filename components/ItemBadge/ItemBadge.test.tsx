import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ItemBadge from './ItemBadge';

expect.extend(toHaveNoViolations);

describe('ItemBadge Component', () => {
  it('Should Render without errors', () => {
    render(<ItemBadge salePrice={1000} />);
    render(<ItemBadge releaseDate={1000} />);
    expect(screen.getByTestId(/sale-badge/i)).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    render(<ItemBadge salePrice={1000} />);
    render(<ItemBadge releaseDate={1000} />);
    expect(await axe(screen.getByTestId(/sale-badge/i))).toHaveNoViolations();
    expect(
      await axe(screen.getByTestId(/new-release-badge/i))
    ).toHaveNoViolations();
  });
  it('Should not render if no props are passed', () => {});
  it('Should render a sale badge if salePrice is passed', () => {});
  it('Should render a new release badge if releaseDate is passed', () => {});
  it('Should render a sale badge if both salePrice and releaseDate are passed', () => {});
});

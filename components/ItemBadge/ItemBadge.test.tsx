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
  it('Should render sale badge without axe a11y errors', async () => {
    render(<ItemBadge salePrice={1000} />);
    expect(await axe(screen.getByTestId(/sale-badge/i))).toHaveNoViolations();
  });
  it('Should render release badge without axe a11y errors', async () => {
    render(<ItemBadge releaseDate={Date.now() - 1000 * 60 * 60 * 24} />);
    expect(
      await axe(screen.getByTestId(/new-release-badge/i))
    ).toHaveNoViolations();
  });
  it('Should not render if no props are passed', () => {
    render(<ItemBadge />);
    expect(screen.queryByTestId(/sale-badge/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId(/new-release-badge/i)).not.toBeInTheDocument();
  });
  it('Should render a sale badge if salePrice is passed', () => {
    render(<ItemBadge salePrice={1000} />);
    expect(screen.getByTestId(/sale-badge/i)).toBeInTheDocument();
    expect(screen.queryByTestId(/new-release-badge/i)).not.toBeInTheDocument();
  });
  it('Should render a new release badge if releaseDate is passed', () => {
    render(<ItemBadge releaseDate={Date.now() - 1000 * 60 * 60 * 24} />);
    expect(screen.getByTestId(/new-release-badge/i)).toBeInTheDocument();
    expect(screen.queryByTestId(/sale-badge/i)).not.toBeInTheDocument();
  });
  it('Should render a sale badge if both salePrice and releaseDate are passed', () => {
    render(<ItemBadge salePrice={1000} releaseDate={Date.now() - 1000} />);
    expect(screen.getByTestId(/sale-badge/i)).toBeInTheDocument();
    expect(screen.queryByTestId(/new-release-badge/i)).not.toBeInTheDocument();
  });
});

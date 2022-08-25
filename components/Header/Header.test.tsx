import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import Header from './Header';

expect.extend(toHaveNoViolations);

describe('Header Component', () => {
  it('Should Render without errors', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
  it.skip('Should render without axe a11y errors', async () => {
    render(<Header />);
    expect(await axe(screen.getByTestId('header'))).toHaveNoViolations();
  });
  it('Should render expected children', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toHaveTextContent(/sole&ankle/i);
    expect(screen.getByTestId('header')).toHaveTextContent(/sale/i);
    expect(screen.getByTestId('header')).toHaveTextContent(/new releases/i);
    expect(screen.getByTestId('header')).toHaveTextContent(/men/i);
    expect(screen.getByTestId('header')).toHaveTextContent(/women/i);
    expect(screen.getByTestId('header')).toHaveTextContent(/kids/i);
    expect(screen.getByTestId('header')).toHaveTextContent(/collections/i);
  });
  it('Should highlight selected tab', async () => {
    const user = userEvent.setup();
    render(<Header />);
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent(
      'Sale'
    );
    await user.click(screen.getByRole('tab', { name: 'Men' }));
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent(
      'Men'
    );
  });
});

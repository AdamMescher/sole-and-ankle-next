import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Shoe from './Shoe';

expect.extend(toHaveNoViolations);

describe('Shoe Component', () => {
  it('Should Render without errors', () => {
    const shoe = {
      slug: 'tech-challenge',
      name: 'NikeCourt Tech Challenge 20',
      imageSrc: '/assets/tech-challenge.jpg',
      price: 16500,
      salePrice: null,
      releaseDate: Date.now() - 1000 * 60 * 60 * 1,
      numOfColors: 2,
    };
    render(
      <ol>
        <Shoe
          slug={shoe.slug}
          name={shoe.name}
          imageSrc={shoe.imageSrc}
          price={shoe.price}
          releaseDate={shoe.releaseDate}
          numOfColors={shoe.numOfColors}
        />
      </ol>
    );
    expect(screen.getByTestId('shoe')).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    const shoe = {
      slug: 'tech-challenge',
      name: 'NikeCourt Tech Challenge 20',
      imageSrc: '/assets/tech-challenge.jpg',
      price: 16500,
      salePrice: null,
      releaseDate: Date.now() - 1000 * 60 * 60 * 1,
      numOfColors: 2,
    };
    render(
      <ol>
        <Shoe
          slug={shoe.slug}
          name={shoe.name}
          imageSrc={shoe.imageSrc}
          price={shoe.price}
          releaseDate={shoe.releaseDate}
          numOfColors={shoe.numOfColors}
        />
      </ol>
    );
    expect(await axe(screen.getByTestId('shoe'))).toHaveNoViolations();
  });
  it('Should render sale price is salePrice prop is passed', () => {
    const shoe = {
      slug: 'tech-challenge',
      name: 'NikeCourt Tech Challenge 20',
      imageSrc: '/assets/tech-challenge.jpg',
      price: 16500,
      salePrice: 5000,
      releaseDate: Date.now() - 1000 * 60 * 60 * 1,
      numOfColors: 2,
    };
    render(
      <ol>
        <Shoe
          slug={shoe.slug}
          name={shoe.name}
          imageSrc={shoe.imageSrc}
          price={shoe.price}
          releaseDate={shoe.releaseDate}
          numOfColors={shoe.numOfColors}
        />
      </ol>
    );
    expect(screen.getByText(/$50/i)).toBeInTheDocument();
  });
});

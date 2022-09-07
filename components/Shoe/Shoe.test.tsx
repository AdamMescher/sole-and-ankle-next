import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Shoe from './Shoe';

console.log({ Shoe });

expect.extend(toHaveNoViolations);

describe('Shoe Component', () => {
  it('Should Render without errors', () => {
    const shoe = {
      slug: 'tech-challenge',
      name: 'NikeCourt Tech Challenge 20',
      imageSrc: '/assets/tech-challenge.jpg',
      price: 16500,
      salePrice: 1000,
      releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 7,
      numOfColors: 2,
    };
    render(
      <ol>
        <Shoe
          slug={shoe.slug}
          name={shoe.name}
          imageSrc={shoe.imageSrc}
          price={shoe.price}
          salePrice={shoe.salePrice}
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
      releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 60,
      numOfColors: 2,
    };
    render(
      <ol>
        <Shoe
          slug={shoe.slug}
          name={shoe.name}
          imageSrc={shoe.imageSrc}
          price={shoe.price}
          salePrice={shoe.salePrice}
          releaseDate={shoe.releaseDate}
          numOfColors={shoe.numOfColors}
        />
      </ol>
    );
    expect(await axe(screen.getByTestId('shoe'))).toHaveNoViolations();
  });
  it('Should render price and sale price is salePrice prop is passed', () => {
    const shoe = {
      slug: 'tech-challenge',
      name: 'NikeCourt Tech Challenge 20',
      imageSrc: '/assets/tech-challenge.jpg',
      price: 16500,
      salePrice: 5000,
      releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 60,
      numOfColors: 2,
    };
    render(
      <ol>
        <Shoe
          slug={shoe.slug}
          name={shoe.name}
          imageSrc={shoe.imageSrc}
          price={shoe.price}
          salePrice={shoe.salePrice}
          releaseDate={shoe.releaseDate}
          numOfColors={shoe.numOfColors}
        />
      </ol>
    );
    expect(screen.getByText(/165/i)).toBeInTheDocument();
    expect(screen.getByText(/50/i)).toBeInTheDocument();
  });
  it('Should render Sale badge if salePrice prop is passed', () => {
    const shoe = {
      slug: 'tech-challenge',
      name: 'NikeCourt Tech Challenge 20',
      imageSrc: '/assets/tech-challenge.jpg',
      price: 16500,
      salePrice: 5000,
      releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 60,
      numOfColors: 2,
    };
    render(
      <ol>
        <Shoe
          slug={shoe.slug}
          name={shoe.name}
          imageSrc={shoe.imageSrc}
          price={shoe.price}
          salePrice={shoe.salePrice}
          releaseDate={shoe.releaseDate}
          numOfColors={shoe.numOfColors}
        />
      </ol>
    );
    expect(screen.getByText(/sale/i)).toBeInTheDocument();
  });
  it('Should render Just Released badge if releaseDate prop is within 30 days', () => {
    const shoe = {
      slug: 'tech-challenge',
      name: 'NikeCourt Tech Challenge 20',
      imageSrc: '/assets/tech-challenge.jpg',
      price: 16500,
      salePrice: null,
      releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 7,
      numOfColors: 2,
    };
    render(
      <ol>
        <Shoe
          slug={shoe.slug}
          name={shoe.name}
          imageSrc={shoe.imageSrc}
          price={shoe.price}
          salePrice={shoe.salePrice}
          releaseDate={shoe.releaseDate}
          numOfColors={shoe.numOfColors}
        />
      </ol>
    );
    expect(screen.getByText(/just released!/i)).toBeInTheDocument();
  });
  it('Should render Sale if both salePrice prop and release date is within 30 days', () => {
    const shoe = {
      slug: 'tech-challenge',
      name: 'NikeCourt Tech Challenge 20',
      imageSrc: '/assets/tech-challenge.jpg',
      price: 16500,
      salePrice: 1000,
      releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 7,
      numOfColors: 2,
    };
    render(
      <ol>
        <Shoe
          slug={shoe.slug}
          name={shoe.name}
          imageSrc={shoe.imageSrc}
          price={shoe.price}
          salePrice={shoe.salePrice}
          releaseDate={shoe.releaseDate}
          numOfColors={shoe.numOfColors}
        />
      </ol>
    );
    expect(screen.getByText(/sale/i)).toBeInTheDocument();
  });
  it('Should render text of color if number of colors is exactly 1', () => {
    const shoe = {
      slug: 'tech-challenge',
      name: 'NikeCourt Tech Challenge 20',
      imageSrc: '/assets/tech-challenge.jpg',
      price: 16500,
      salePrice: 1000,
      releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 7,
      numOfColors: 1,
    };
    render(
      <ol>
        <Shoe
          slug={shoe.slug}
          name={shoe.name}
          imageSrc={shoe.imageSrc}
          price={shoe.price}
          salePrice={shoe.salePrice}
          releaseDate={shoe.releaseDate}
          numOfColors={shoe.numOfColors}
        />
      </ol>
    );
    expect(screen.getByText(/1 color/i)).toBeInTheDocument();
  });
  it('Should render text of colors if number of colors is 0', () => {
    const shoe = {
      slug: 'tech-challenge',
      name: 'NikeCourt Tech Challenge 20',
      imageSrc: '/assets/tech-challenge.jpg',
      price: 16500,
      salePrice: 1000,
      releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 7,
      numOfColors: 0,
    };
    render(
      <ol>
        <Shoe
          slug={shoe.slug}
          name={shoe.name}
          imageSrc={shoe.imageSrc}
          price={shoe.price}
          salePrice={shoe.salePrice}
          releaseDate={shoe.releaseDate}
          numOfColors={shoe.numOfColors}
        />
      </ol>
    );
    expect(screen.getByText(/0 colors/i)).toBeInTheDocument();
  });
  it('Should render text of colors if number of colors is equal or greater than 2', () => {
    const shoe = {
      slug: 'tech-challenge',
      name: 'NikeCourt Tech Challenge 20',
      imageSrc: '/assets/tech-challenge.jpg',
      price: 16500,
      salePrice: 1000,
      releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 7,
      numOfColors: 2,
    };
    render(
      <ol>
        <Shoe
          slug={shoe.slug}
          name={shoe.name}
          imageSrc={shoe.imageSrc}
          price={shoe.price}
          salePrice={shoe.salePrice}
          releaseDate={shoe.releaseDate}
          numOfColors={shoe.numOfColors}
        />
      </ol>
    );
    expect(screen.getByText(/2 colors/i)).toBeInTheDocument();
  });
});

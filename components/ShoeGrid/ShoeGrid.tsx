import * as React from 'react';
import styled from 'styled-components';
import Shoe from '../Shoe';

interface ShoeGridProps {
  shoes: [];
}

const ShoeGrid = ({ shoes }: ShoeGridProps) => {
  return (
    <Wrapper data-testid={'shoe-grid'}>
      <List>
        {shoes.map(
          ({
            slug,
            name,
            imageSrc,
            price,
            salePrice,
            releaseDate,
            numOfColors,
          }) => (
            <Shoe
              key={slug}
              slug={slug}
              name={name}
              imageSrc={imageSrc}
              price={price}
              salePrice={salePrice}
              releaseDate={releaseDate}
              numOfColors={numOfColors}
            />
          )
        )}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 32px;
`;
const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  row-gap: 36px;
  column-gap: 62px;
  list-style: none;
  padding: 0;
  justify-content: space-between;
`;

export default ShoeGrid;

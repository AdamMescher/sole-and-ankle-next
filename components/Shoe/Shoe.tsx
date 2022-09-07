import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import ItemBadge from '../ItemBadge';
import formatCentsToDollars from '../../utils/formatCentsToDollars';

interface ShoeProps {
  slug: string;
  name: string;
  imageSrc: string;
  price: number;
  salePrice?: number;
  releaseDate: Date | number;
  numOfColors: number;
  className?: string;
}

const Shoe = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
  ...rest
}: ShoeProps) => {
  return (
    <Wrapper data-testid={'shoe'} {...rest}>
      <ImageWrapper>
        <Link href={`/${slug}`}>
          <a>
            <Image
              src={imageSrc}
              alt={name}
              layout='fill'
              objectFit='cover'
              width='100%'
              height={312}
            />
          </a>
        </Link>
      </ImageWrapper>
      <BadgeContainer>
        <ItemBadge salePrice={salePrice} releaseDate={releaseDate} />
      </BadgeContainer>
      <Text>
        <div>
          <Name>
            <Link href={`/${slug}`}>{name}</Link>
          </Name>
          <Colors>
            {`${numOfColors} Color${
              numOfColors === 0 || numOfColors > 1 ? 's' : ''
            }`}
          </Colors>
        </div>
        <div>
          <Price salePrice={salePrice}>{formatCentsToDollars(price)}</Price>
          {salePrice ? (
            <Discount>{formatCentsToDollars(salePrice)}</Discount>
          ) : null}
        </div>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  position: relative;
  list-style: none;
  width: 340px;
  height: 315px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 312px;
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
  & > a {
    cursor: pointer;
  }
`;

const BadgeContainer = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 14px;
`;
const Name = styled.h2`
  & > a {
    text-decoration: none;
    color: var(--color-neutral-gray-900);
    font-size: 16px;
  }
  & > a:hover {
    color: var(--color-neutral-gray-500);
  }
`;
const Colors = styled.p`
  margin-top: 6px;
  color: var(--color-neutral-gray-700);
`;
const Price = styled.p<{
  salePrice?: number | null;
}>`
  text-decoration: ${({ salePrice }) => (salePrice ? 'line-through' : 'none')};
  color: ${({ salePrice }) =>
    salePrice
      ? 'var(--color-neutral-gray-700)'
      : 'var(--color-neutral-gray-900)'};
`;
const Discount = styled.p`
  margin-top: 6px;
  font-weight: 600;
  color: var(--color-primary-magenta);
`;

export default Shoe;

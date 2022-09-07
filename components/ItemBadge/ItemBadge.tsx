import * as React from 'react';
import styled from 'styled-components';

interface ItemBadgeProps {
  salePrice?: number;
  releaseDate?: Date | number;
}

const ItemBadge = ({ salePrice, releaseDate, ...rest }: ItemBadgeProps) => {
  const newReleaseWindowInDays = 30;
  const isNewRelease = () =>
    releaseDate &&
    releaseDate >= Date.now() - 1000 * 60 * 60 * 24 * newReleaseWindowInDays;
  const shouldShowSale = () => salePrice && salePrice > 0;
  const shouldShowNewRelease = () => !salePrice && isNewRelease();
  if (shouldShowSale()) {
    return (
      <SaleBadge data-testid={'sale-badge'} {...rest}>
        <span>Sale</span>
      </SaleBadge>
    );
  }
  if (shouldShowNewRelease()) {
    return (
      <NewReleaseBadge data-testid={'new-release-badge'} {...rest}>
        <span>Just Released!</span>
      </NewReleaseBadge>
    );
  }
  return (
    <>
      <span></span>
    </>
  );
};

const Wrapper = styled.p`
  padding: 10px;
  background: gray;
  border-radius: 2px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  width: fit-content;
`;

const SaleBadge = styled(Wrapper)`
  background: var(--color-primary-magenta);
`;
const NewReleaseBadge = styled(Wrapper)`
  background: var(--color-primary-lavender);
`;

export default ItemBadge;

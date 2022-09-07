import * as React from 'react';
import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import SuperHeader from '../SuperHeader';
import Wordmark from '../Wordmark';

const Header = () => {
  return (
    <Wrapper data-testid={'header'}>
      <SuperHeader />
      <Container>
        <Wordmark>Sole&Ankle</Wordmark>
        <StyledTabs>
          <StyledTabList>
            <StyledTab>Sale</StyledTab>
            <StyledTab>New Releases</StyledTab>
            <StyledTab>Men</StyledTab>
            <StyledTab>Women</StyledTab>
            <StyledTab>Kids</StyledTab>
            <StyledTab>Collections</StyledTab>
          </StyledTabList>
        </StyledTabs>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--color-neutral-gray-300);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > h2 {
    position: absolute;
    left: 32px;
  }
`;

const StyledTabs = styled(Tabs)`
  justify-self: end;
`;

const StyledTabList = styled(TabList)`
  justify-self: flex-end;
  align-self: center;
  display: flex;
  gap: 48px;
  > [data-reach-tab][data-selected] {
    color: var(--color-primary-lavender);
  }
  > [data-reach-tab][data-selected]:hover {
    color: var(--color-neutral-gray-500);
  }
  > [data-reach-tab][data-selected]:active {
    color: var(--color-neutral-gray-700);
  }
`;

const StyledTab = styled(Tab)`
  border: none;
  background: none;
  font-family: var(--font-family-raleway);
  font-weight: var(--font-weight-semi-bold);
  font-size: ${18 / 16 + 'rem'};
  line-height: 1.2;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: var(--color-neutral-gray-500);
  }
  &:active {
    color: var(--color-neutral-gray-700);
  }
`;

export default Header;

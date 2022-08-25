import * as React from 'react';
import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';

type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;

interface SidebarProps {
  options: Array<string>;
  setSidebarNavOption: Dispatcher<string>;
}

const Sidebar = ({ options, setSidebarNavOption }: SidebarProps) => {
  return (
    <Tabs
      onChange={(event) => {
        setSidebarNavOption(options[event]);
      }}>
      <StyledTabsList>
        {options.map((option) => (
          <StyledTab key={option}>{option}</StyledTab>
        ))}
      </StyledTabsList>
    </Tabs>
  );
};

const StyledTabsList = styled(TabList)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > [data-reach-tab][data-selected] {
    color: var(--color-primary-magenta);
  }
  > [data-reach-tab][data-selected]:hover {
    color: var(--color-neutral-gray-500);
  }
  > [data-reach-tab][data-selected]:active {
    color: var(--color-neutral-gray-700);
  }
`;

const StyledTab = styled(Tab)`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-neutral-gray-900);
  font-weight: var(--font-weight-semi-bold);
  font-size: 16px;
  line-height: 2;
`;

export default Sidebar;

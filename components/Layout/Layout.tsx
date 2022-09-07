import * as React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Sidebar from '../Sidebar';
import BreadcrumbsNav from '../BreadcrumbsNav';
import Sort from '../Sort';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children, ...rest }: LayoutProps) => {
  const [sidebarNavOption, setSidebarNavOption] = React.useState('Running');
  const [sort, setSort] = React.useState('sale');
  const breadcrumbsItems = [
    {
      label: 'Home',
      value: 'home',
      href: '/',
    },
    {
      label: 'Sale',
      value: 'sale',
      href: '/sale',
    },
    {
      label: 'Shoes',
      value: 'shoes',
      href: '/shoes',
    },
  ];
  const sortOptions = [
    {
      label: 'Newest Releases',
      value: 'newest',
    },
    {
      label: 'Price',
      value: 'price',
    },
  ];
  const sidebarOptions = [
    'Lifestyle',
    'Jordan',
    'Running',
    'Basketball',
    'Training & Gym',
    'Football',
    'Skateboarding',
    'American Football',
    'Baseball',
    'Golf',
    'Tennis',
    'Athletics',
    'Walking',
  ];
  return (
    <Wrapper {...rest}>
      <Header />
      <Top>
        <BreadCrumbsAndTitle style={{}}>
          <BreadcrumbsWrapper>
            <BreadcrumbsNav items={breadcrumbsItems} />
          </BreadcrumbsWrapper>
          <h1>{sidebarNavOption}</h1>
        </BreadCrumbsAndTitle>
        <Sort options={sortOptions} setSort={setSort} defaultValue='newest' />
      </Top>
      <Thing>
        <Aside>
          <Sidebar
            options={sidebarOptions}
            setSidebarNavOption={setSidebarNavOption}
          />
        </Aside>
        <Main>{children}</Main>
      </Thing>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 72px;
  padding-left: 32px;
  padding-right: 32px;
`;
const BreadCrumbsAndTitle = styled.div`
  display: flex;
  align-items: baseline;
  gap: 32px;
`;
const BreadcrumbsWrapper = styled.div`
  flex: 0 0 250px;
`;
const Aside = styled.div`
  margin-top: 42px;
  margin-left: 32px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 250px;
`;
const Main = styled.main`
  margin-top: 42px;
  margin-right: 32px;
  width: 100%;
  height: 500px;
`;

const Thing = styled.div`
  display: flex;
  column-gap: 32px;
`;

export default Layout;

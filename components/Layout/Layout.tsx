import * as React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Sidebar from '../Sidebar';
import BreadcrumbsNav from '../BreadcrumbsNav';
import Sort from '../Sort';

const Layout = () => {
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
    <Wrapper>
      <Header />
      <Top>
        <BreadcrumbsNav items={breadcrumbsItems} />
        <h2>{sidebarNavOption}</h2>
        <Sort options={sortOptions} setSort={setSort} defaultValue='newest' />
      </Top>
      <Aside>
        <Sidebar
          options={sidebarOptions}
          setSidebarNavOption={setSidebarNavOption}
        />
      </Aside>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 72px;
  padding-left: 32px;
  padding-right: 32px;
`;
const Aside = styled.div`
  padding-left: 32px;
`;

export default Layout;

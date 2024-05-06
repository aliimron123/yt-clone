import React from 'react';
import SideNav from './SideNav';
import TopNav from './TopNav';

interface IProp {
  children: React.ReactNode;
}

const Layout = ({ children }: IProp) => {
  return (
    <div className="flex h-full w-full  ">
      <TopNav />
      <SideNav />
      <div className="ml-64 mr-6"> {children}</div>
    </div>
  );
};

export default Layout;

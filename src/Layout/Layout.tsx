import React, { FC } from 'react';
import Header from './Header/Header';
import './Layout.scss';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div id="main-layout">
      <Header />
      <div className="main-content">{children}</div>
    </div>
  );
};

export default Layout;

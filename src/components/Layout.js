import React from 'react';
import BackgroundLines from '../components/BackgroundLines';
import SideNav from './SideNav';

function Layout(props) {
  return (
    <div className="mi-wrapper">
      <BackgroundLines />
      <SideNav />
      {props.children}
    </div>
  );
}

export default Layout;

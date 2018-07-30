import React from 'react';
import Nav from './nav';
import Info from './info';

export default function Header(props){
  return (
    <header>
      <Info />
      <Nav />
      <h1>HOT or COLD</h1>
    </header>
  );
};
import React from 'react';
import Nav from '../../shared/components/Nav';
import Logo from '../../shared/components/Logo';
import HorizontalList from '../../shared/components/HorizontalList';
import Link from '../../shared/components/Link';

function Navbar() {
  return (
    <Nav>
      <Logo src="/public/logo.svg"/>
    </Nav>
  );
}

export default Navbar;

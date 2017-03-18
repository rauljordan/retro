import React from 'react';
import Nav from '../../shared/components/Nav';
import Logo from '../../shared/components/Logo';
import HorizontalList from '../../shared/components/HorizontalList';
import Link from '../../shared/components/Link';

function Navbar() {
  return (
    <Nav>
      <Logo src="/logo.svg"/>
      <HorizontalList>
        <li><Link>Home</Link></li>
        <li>/</li>
        <li><Link>About Us</Link></li>
        <li>/</li>
        <li><Link>Subscribe</Link></li>
        <li>/</li>
        <li><Link>F.A.Q.</Link></li>
        <li>/</li>
        <li><Link>Contact Us</Link></li>
      </HorizontalList>
    </Nav>
  );
}

export default Navbar;

import React from 'react';
import FloatingNav from './ui/FloatingNav';

const NavBarItems = [
  { name: 'About', link: '#about' },
  { name: 'Experience', link: '#experience' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

const NavBar = () => {
  return (
    <div>
      <FloatingNav navItems={NavBarItems} />
    </div>
  );
};

export default NavBar;

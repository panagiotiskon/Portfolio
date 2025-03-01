import React from 'react'
import {FloatingNav} from './ui/floatingNav'


const NavBarItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

function NavBar() {
    return (
    <div>
      <FloatingNav navItems={NavBarItems}/>
    </div>
  )
}

export default NavBar

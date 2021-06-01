import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import {Link} from "react-router-dom"

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
      <Link to="/"> <NavbarBrand className="mx-4 text-light">Davi Serrano</NavbarBrand> </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav  className="mr-auto" navbar>
            <NavItem>
              <Link to="/Stacks"> <NavLink className="text-light" > Stacks</NavLink> </Link>
            </NavItem>
            <NavItem>
             <Link to="/Sites" > <NavLink className="text-light"> Sites</NavLink> </Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/DaviSerrano-FrontEnd" className="text-light">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
import { useState } from "react";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-2">
      <Navbar className="navbar navbar-expand-lg navbar-light mask-custom shadow-0 fixed-top">
        <NavbarBrand className="py-3 pl-4 mr-0  text-white fw-bold" href="/">
          <span>Pizza</span> Palace
        </NavbarBrand>
        <NavbarToggler className="ms-auto" onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="py-3 mx-auto" navbar>
            <NavItem className="nav-item">
              <NavLink
                className="mr-2 ml-0 text-white fw-bold nav-link"
                href="/"
              >
                HOME
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink
                className="mr-2 ml-0  text-white fw-bold nav-link"
                href="/"
              >
                MENU
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink
                className="mr-2 ml-0  text-white fw-bold nav-link"
                href="/"
              >
                ABOUT
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink
                className="mr-2 ml-0 text-white fw-bold nav-link"
                href="/"
              >
                HOURS
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink
                className="mr-2 ml-0 text-white fw-bold nav-link"
                href="/"
              >
                CONTACT
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink
                className="mr-2 ml-0 text-white fw-bold nav-link"
                href="/"
              >
                ORDER ONLINE
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

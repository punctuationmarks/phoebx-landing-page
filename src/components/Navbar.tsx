import React, { useState } from "react";
import GlitchClip from "react-glitch-effect/core/Clip";
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem
} from "reactstrap";
import { ReactComponent as Dots } from "../assets/images/dots.svg";
import LinkComponent from "./LinkComponent";

const NavbarComponent = ()  => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Navbar color="faded" light>
        <NavbarBrand onClick={toggleNavbar}>
          <Button>
            <h1>PHOEBX</h1>
          </Button>
        </NavbarBrand>
        <GlitchClip onHover>
          <Dots onClick={toggleNavbar} className="dots" />
        </GlitchClip>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="nav-item">
            {/* update about page, or create /#about section */}
            {/* <NavItem className="nav-item">
              <LinkComponent link="/#about" text="about" />
            </NavItem> */}
            <NavItem className="nav-item">
              <LinkComponent link="/#services" text="services" />
            </NavItem>
            <NavItem className="nav-item">
              <LinkComponent link="/tech-reviews" text="reviews" />
            </NavItem>
            <NavItem className="nav-item">
              <LinkComponent link="/#contact" text="contact" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

// would be cool to have the navigation at the bottom of the screen if on mobile
// better yet, have a button that switches it from top to bottom

export default NavbarComponent;

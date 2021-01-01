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

export default function NavbarComponent(props) {
  const [collapsed, setCollapsed] = useState(true);
  const [glitchActive, setGlitchActive] = useState(true);
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
    setGlitchActive(!glitchActive);
  };

  return (
    <>
      <Navbar color="faded" light>
        <NavbarBrand onClick={toggleNavbar}>
          <Button>
            <h1>PHOEBX</h1>
          </Button>
        </NavbarBrand>
        <GlitchClip onHover={true}>
          <Dots onClick={toggleNavbar} className="mr-2" style={styles.dots} />
        </GlitchClip>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar style={styles.navItem}>
            <NavItem style={styles.navItem}>
              <LinkComponent link="#about" text="#about" />
            </NavItem>
            <NavItem style={styles.navItem}>
              <GlitchClip onHover>
                <LinkComponent link="#services" text="#services" />
              </GlitchClip>
            </NavItem>
            <NavItem style={styles.navItem}>
              <LinkComponent link="#contact" text="#contact" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

const styles = {
  navItem: {
    flexDirection: "row",
    margin: "0 1rem 0 0",
  },
  dots:{
    color: "black"
  }
};

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
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <React.Fragment>
      <Navbar color="faded" light>
        <NavbarBrand onClick={toggleNavbar}>
          <Button>
            <h1>PHOEBX</h1>
          </Button>
        </NavbarBrand>
        <GlitchClip onHover>
          <Dots onClick={toggleNavbar} className="mr-2" style={styles.dots} />
        </GlitchClip>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar style={styles.navItem}>
            {/* update about page, or create /#about section */}
            <NavItem style={styles.navItem}>
              <LinkComponent link="/#services" text="#about" />
            </NavItem>
            <NavItem style={styles.navItem}>
              <LinkComponent link="/#services" text="#services" />
            </NavItem>
            <NavItem style={styles.navItem}>
              <LinkComponent link="/#contact" text="#contact" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
}

const styles = {
  navItem: {
    flexDirection: "row",
    margin: "0 1rem 0 0",
  },
  dots: {
    color: "black",
  },
};

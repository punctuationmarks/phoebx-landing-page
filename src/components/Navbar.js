import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
} from "reactstrap";
import LinkComponent from "./LinkComponent";

export default function NavbarComponent(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar color="faded" light>
        <NavbarBrand href="/">
          <h1>Phoebx</h1>
          {/* <p className="bt-green">Phoebx</p> */}
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar style={styles.navItem}>
          <NavItem style={styles.navItem}>
              <LinkComponent link="#about" text="#about" />
            </NavItem>
            <NavItem style={styles.navItem}>
              <LinkComponent link="#services" text="#services" />
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
};

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
import { ReactComponent as ScanIcon } from "../assets/images/scan.svg";

export default function NavbarComponent(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <ScanIcon className="App-logo" alt="logo" />
          Phoebx
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar style={styles.navItem}>
            <NavItem style={styles.navItem}>
              <LinkComponent link="#services" text="Services" />
            </NavItem>
            <NavItem style={styles.navItem}>
              <LinkComponent link="#contact" text="Contact" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const styles = {
  navItem: {
    flexDirection: "row",
    margin: "0 1rem 0 0",
  },
};

import React from "react";
// import { Ocean, TreeOverlook } from "../assets/images/index";
import { ReactComponent as Ocean } from "../assets/images/ocean.svg";
import { ReactComponent as TreeOverlook } from "../assets/images/tree-overlook.svg";
export default function Header(props) {
  return (
    <>
      <div className="first-page-background" style={styles.images}>
        <h4>a technology consulting and creating company</h4>

        <header style={styles.container}>
          <p style={styles.body}>
            Where entrepreneurship meets community focus
          </p>
        </header>
      </div>
    </>
  );
}

const styles = {
  container: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    margin: "0 0.75rem",
    minHeight: "85vh",
  },
  body: {
    color: "blanchedalmond",
    fontSize: "calc(2rem + 2vmin)",
    padding: "0 0.25rem",
    textShadow: "2px 2px rgba(0, 0, 0, 0.4)",
  },
};

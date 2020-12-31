import React from "react";
// import { Ocean, TreeOverlook } from "../assets/images/index";
import { ReactComponent as Ocean } from "../assets/images/ocean.svg";
import { ReactComponent as TreeOverlook } from "../assets/images/tree-overlook.svg";
export default function Header(props) {
  return (
    <>
      <div id="first-page-background" style={styles.images}>
        <h3 style={styles.catchPhrase} id="catch-phrase">
          a logical, virtual and physical, tactile creation company
        </h3>
        <header style={styles.container}>
          <h3 style={styles.body}>
            a logical, virtual and physical, tactile <br /> creation company
          </h3>
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
    color: "#f3d2a0",
    fontSize: "calc(1.65rem + 2vmin)",
    padding: "0 0.25rem",
    textShadow: "2px 2px rgba(0, 0, 0, 0.8)",
  },
};

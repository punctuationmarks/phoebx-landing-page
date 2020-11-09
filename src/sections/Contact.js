import React from "react";
import { Container } from "reactstrap";

export default function Contact(props) {
  return (
    <Container id="contact" fluid={true} style={styles.container}>
      <h3>Contact :</h3>
      <div>
        <ul style={styles.body}>
          <span>phoebx@pm.me</span>
          <span>317- six oh six - 2369</span>
        </ul>
      </div>
    </Container>
  );
}

const styles = {
  container: {
    // alignItems: "center",
    backgroundColor: "#2e7c3870",
    // "#2e7c38c2",

    display: "flex",
    // justifyContent: "center",
    // margin: "0 1.25rem",

    minHeight: "10vh",
    padding: "0.4rem 0.4rem",

    color: "rgb(225, 225, 225)",

    textShadow: "1px 1px rgba(0, 0, 0, 0.4)",
    // width: "25%"
  },
  body: {
    alignItems: "center",
    color: "rgb(225, 225, 225)",

    textShadow: "1px 1px rgba(0, 0, 0, 0.4)",
    display: "flex",
    flexDirection: "column",
    // fontSize: "calc(1.5rem + 2vmin)",
    justifyContent: "center",
    padding: "0 0.25rem",
    // textShadow: "1px 1px rgba(0, 0, 0, 0.4)",
  },
};

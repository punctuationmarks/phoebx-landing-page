import React from "react";
import { Container } from "reactstrap";

export default function Contact(props) {
  return (
    <Container id="contact" fluid={true} style={styles.container}>
      <h3>Contact</h3>
      <p style={styles.body}>phoebx@pm.me</p>
    </Container>
  );
}

const styles = {
  container: {
    // alignItems: "center",
    backgroundColor: "#44bd5450",
    display: "flex",
    // justifyContent: "center",
    margin: "0 1.25rem",

    minHeight: "20vh",
    padding: "0.5rem 0.5rem"

    // width: "25%"
  },
  body: {
    alignItems: "center",
    color: "rgb(0, 0, 10)",
    display: "flex",
    // fontSize: "calc(1.5rem + 2vmin)",
    justifyContent: "center",
    padding: "0 0.25rem",
  },
};

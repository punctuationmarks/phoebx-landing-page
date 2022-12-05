import React from "react";

export default function Footer(props) {
  return (
    <div style={styles.container}>
      <span style={styles.body}>Made in beautiful downtown Indianapolis</span>
    </div>
  );
}

const styles = {
  container: {
    alignItems: "center",
    backgroundColor: "#2e7c3870",
    display: "flex",
    fontSize: "0.75rem",
    height: "2.5rem",
    justifyContent: "center",
  },
  body: {
    padding: "1px"
  }
};

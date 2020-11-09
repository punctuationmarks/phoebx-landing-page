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
    justifyContent: "center",
    fontSize: "0.75rem"
  },
};

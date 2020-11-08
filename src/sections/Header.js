import React from "react";

export default function Header(props) {
  return (
    <div className="App-header-background">
      <header style={styles.container}>
        <p style={styles.body}>Where entrepreneurship meets community focus</p>
      </header>
    </div>
  );
}

const styles = {
  container: {
    alignItems: "center",
    backgroundColor: "#44bd5450",
    display: "flex",
    justifyContent: "center",
    margin: "0 0.75rem",
    minHeight: "85vh",
  },
  body: {
    color: "rgb(0, 0, 10)",
    fontSize: "calc(1.5rem + 2vmin)",
    padding: "0 0.25rem",
    textShadow: "2px 3px rgb(225, 225, 225)",
  },
};

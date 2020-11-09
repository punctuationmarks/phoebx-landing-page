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
    backgroundColor: "#2e7c3870",
    display: "flex",
    justifyContent: "center",
    margin: "0 0.75rem",
    minHeight: "85vh",
  },
  body: {
    color: "rgb(225, 225, 225)",
    fontSize: "calc(1.6rem + 2vmin)",
    padding: "0 0.25rem",
    textShadow: "1px 1px rgba(0, 0, 0, 0.8)",
    
  },
};

import React from "react";
import GlitchClip from "react-glitch-effect/core/Clip";

const luck = Math.random() > 0.95;

const Main = () => {
  return (
    <div id="first-page-background" style={styles.images}>
      <h3 id="catch-phrase">
        a logical, virtual and physical, tactile creation company
      </h3>
      <header style={styles.container}>
        <h3 style={styles.body}>
          a logical, virtual and physical, tactile <br /> creation company
        </h3>
      </header>
    </div>
  );
};

const TurnOffJS = () => {
  return <p className="breathing nav-item">turn off jaavscript</p>;
};

const NoJS = () => {
  return (
    <GlitchClip onHover={true}>
      <TurnOffJS />
      <Main />
      <TurnOffJS />
    </GlitchClip>
  );
};

export default function Header() {
  return (
    <>
      {luck && <NoJS />}
      {!luck && <Main />}
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

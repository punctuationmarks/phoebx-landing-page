import React from "react";
import { CardDeck } from "reactstrap";
import CardComponent from "../components/CardComponent";

export default function Services() {
  const technologyText = "logical, virtual";
  const physicalText = "physical, tactile";

  return (
    <div className="services">
      <h2 style={styles.header}>
        We like to get our hands dirty in many different fields
      </h2>
      <CardDeck className="breathing">
        <CardComponent
          headerText={technologyText}
          cardTitle="Technologies Consulting"
          cardBodyText="We have experience in developing full stack web apps, wrangling and analyzing data, and solving unique problems. We 💖 TypeScript, Python, R, and Rust. If it runs on code, we have an interest in it."
          buttonText="Github"
          buttonLink="https://www.github.com/punctuationmarks"
          externalLink={true}
        />
        <CardComponent
          headerText={`${technologyText}, ${physicalText}`}
          cardTitle="Cybersecurity focused on personal and intellectual privacy"
          cardBodyText="Researching, developmenting and reviewing ways to protect your individual or company data, through secure ways of reducing snooping and theft from your own devices."
          buttonText="Lots of text"
          buttonLink="/tech-reviews"
        />
        <CardComponent
          headerText={`${technologyText}, ${physicalText}`}
          cardTitle="FOSS Hardened Android phones"
          cardBodyText="Removing proprietary code from Android phones with GrapheneOS or CalyxOS, to have a big-tech-free phone from surveillance capitalism. Removing unused or unwanted interfaces such as Bluetooth receivers, mics, speakers, cameras."
          // TODO:
          // Add a link to a page about these services and OSes
          // https://grapheneos.org/
          // https://calyxos.org/
        />
      </CardDeck>
    </div>
  );
}

const styles = {
  container: {
    margin: "0.5rem",
  },
  header: {
    justifyContent: "left",
  },
};

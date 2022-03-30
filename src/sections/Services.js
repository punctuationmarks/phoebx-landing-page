import React from "react";
import { CardDeck } from "reactstrap";
import CardComponent from "../components/CardComponent";

export default function Services(props) {
  const technologyText = "logical, virtual";
  const physicalText = "physical, tactile";

  return (
    <div id="services">
      <h2 style={styles.header}>
        We like to get our hands dirty in many different fields
      </h2>
      <CardDeck className="breathing">
        <CardComponent
          headerText={technologyText}
          cardTitle="Technologies Consulting"
          cardBodyText="We have experience in developing full stack web apps, wrangling and analyzing data, and building IoT devices. We 💖 TypeScript, Python, R, and Rust. If it runs on code, we have an interest in it."
          buttonText="Github"
          buttonLink="https://www.github.com/punctuationmarks"
          externalLink={true}
        />
        <CardComponent
          headerText={technologyText}
          cardTitle="Cybersecurity"
          cardBodyText="Focusing on securing phones and Linux machines, designed with education and FOSS in mind."
        />
        <CardComponent
          headerText={`${technologyText}, ${physicalText}`}
          cardTitle="Personal and intellectual privacy"
          cardBodyText="Researching, developmenting and reviewing ways to protect your individual or company data, through secure ways of reducing snooping and theft from your own devices."
          buttonText="Lots of text"
          buttonLink="/tech-reviews"
        />
      </CardDeck>
      <CardDeck className="breathing">
        {/* Although these are services that we can offer, they are not our current focus at this time. Please do reach out  */}
        <CardComponent
          headerText={physicalText}
          cardTitle="Custom Assembled Bicycles"
          cardBodyText="With over 10 years of riding and building bikes, both professionally and as a hobby, we can find the right style and type of bike for you. We specialize in restoring vintage steel road, conversion, track, and touring bikes."
        />
        <CardComponent
          headerText={physicalText}
          cardTitle="Screen Printing"
          cardBodyText="Aiming to reduce the waste from over consumption, we hit the sweet spot where fashion meets environmentally friendly. We take vintage clothes and give them a new life with custom designed screen printing, so you can be good to the environment, your wallet, and dress to the nines. Every item is unique, measured properly so you can actually know your size, and custom made by artists, just like you."
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

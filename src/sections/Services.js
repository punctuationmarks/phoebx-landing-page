import React from "react";
import { CardDeck } from "reactstrap";
import CardComponent from "../components/CardComponent";

export default function Example(props) {
  return (
    <div id="services" style={styles.container}>
      <h2 style={styles.header}>We like to get our hands dirty in many different fields</h2>
      <CardDeck>
        <CardComponent
          cardTitle="Computer Technologies Consulting"
          cardBodyText="We have experience in developing full stack web apps, wrangling and analyzing data, and building IoT devices. We 💖 JavaScript, Python, R, and Rust. If it runs on code, we have an interest in it."
          buttonText="Github"
          buttonLink="https://www.github.com/punctuationmarks"
        />
        <CardComponent
          cardTitle="Screen Printing (coming 2021)"
          cardBodyText="We hit the sweet spot where fashion meets environmentally friendly, because you can be good to the climate and also look dress to the nines 👗 🥻. We take vintage clothes and give them a new life with custom designed screen printing. Every item is unique, measured properly for you to know your size, and custom made by artists, just like you."
        />
      </CardDeck>
      <CardDeck>
        <CardComponent
          cardTitle="Custom Assembled Bicycles"
          cardBodyText="With over 10 years of riding and building bikes, both professionally and as a hobby, we can find the right style and type of bike for you. We specialize in restoring vintage steel road, conversion, track, and touring bikes."
        />
        <CardComponent
          cardTitle="We also sell CBD"
          cardBodyText="Because why the hell not? We know it's the modern day snake oil, sold at gas stations and video rental stores alike, but the founder's life was changed by taking CBD so we want to offer it as well."
        />
      </CardDeck>
    </div>
  );
}

const styles = {
  container: {
    background: "rgba(120, 128, 121, 0.17)",
    margin: "0.5rem",
    padding:  "0.5rem"
  },
  header:{
    justifyContent: "left"
  }

};

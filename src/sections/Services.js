import React from "react";
import { CardDeck } from "reactstrap";
import CardComponent from "../components/CardComponent";

export default function Example(props) {
  return (
    <div id="services">
      <CardDeck>
        <CardComponent
          cardTitle="Computer Technologies Consulting"
          cardBodyText="We have experience in developing full stack web apps, wrangling and analyzing data, and building IoT devices. We 💖 JavaScript, Python, R, and Rust. If it runs on code, we have an interest in it."
          buttonText="Github"
          buttonLink="https://www.github.com/punctuationmarks"
        />
        <CardComponent
          cardTitle="Screen Printing"
          cardBodyText="We hit the sweet spot where fashion meets environmentally friendly, because you can be good to the climate and also look dress to the nines. We take vintage clothes and give them a new life with custom designed screen printing. Every item is unique, measured properly for you to know your size, and custom made by artists, just like you."
        />
        {/* <CardComponent
          cardTitle="Custom Built Bicycles"
          cardBodyText="With over 10 years of riding and building bikes, we can find the right style and type of bike for you. We specialize in rebuilding old steel road bikes, conversion bikes, track bikes, and touring bikes."
        /> */}
      </CardDeck>
    </div>
  );
}

// const styles = {};

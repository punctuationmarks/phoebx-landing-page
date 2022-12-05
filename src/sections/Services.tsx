import React, { Fragment } from "react";
import { CardDeck } from "reactstrap";
import CardComponent from "../components/CardComponent";

export default function Services() {
  const technologyText = "logical, virtual";
  const physicalText = "physical, tactile";

  return (


    <Fragment>
      <div id="services" className="services">
      </div>
      <div id="services" className="services">
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
            headerText={`${technologyText}; ${physicalText}`}
            cardTitle="Cybersecurity focused on personal and intellectual privacy"
            cardBodyText="Researching, developmenting and reviewing ways to protect your individual or company data, through secure ways of reducing snooping and theft from your own devices."
            buttonText="Technology reviews"
            buttonLink="/tech-reviews"
          />
        </CardDeck>
      </div>
      <div className="services">
        <CardDeck className="breathing">
          <CardComponent
            headerText={`${technologyText}`}
            cardTitle="FOSS Hardened Android phones"
            cardBodyText="Removing proprietary code from Android phones with GrapheneOS or CalyxOS, to have a big-tech-free phone from surveillance capitalism. Removing unused or unwanted interfaces such as Bluetooth receivers, mics, speakers, cameras."
          // TODO:
          // Add a link to a page about these services and OSes
          // https://grapheneos.org/
          // https://calyxos.org/
          />
          <CardComponent
            headerText={`${technologyText}; ${physicalText}`}
            cardTitle="Computer and phone repair and modification"
            cardBodyText="Squeezing the life out old devices and modifying machines to do what you need them to do and nothing more."
          />
                    <CardComponent
            headerText={technologyText}
            cardTitle="Developer"
            cardBodyText="Do you need a small app to do that one very specific task and you can't find anything on the market? Reach out! We have a broad range of experience in GUI full stack development, data analytics and even a little machine learning."
            buttonText="Contact us!"
            buttonLink="#contact"
            externalLink={false}
          />
        </CardDeck>
      </div>
      {/* <div className="services">
        <CardDeck className="breathing">
          <CardComponent
            headerText={`${technologyText}; ${physicalText}`}
            cardTitle=""
            cardBodyText=""
            buttonText=""
            buttonLink=""
          />
          <CardComponent
            headerText={`${technologyText}; ${physicalText}`}
            cardTitle=""
            cardBodyText=""
          // TODO:
          // Add a link to a page about these services and OSes
          // https://grapheneos.org/
          // https://calyxos.org/
          />
        </CardDeck>
      </div> */}
    </Fragment>
  );
}

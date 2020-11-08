import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import LinkComponent from "./LinkComponent";

export default function CardComponent(props) {
  const {
    imageSrc,
    imageAlt,
    cardTitle,
    cardBodyText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate et, voluptatum architecto eos recusandae eius cupiditate laboriosam laborum sit magnam!",
    buttonText,
    buttonLink,
  } = props;

  return (
    <Card style={styles.card}>
      <CardImg top width="100%" src={imageSrc} alt={imageAlt} />
      <CardBody>
        <CardTitle tag="h5">{cardTitle}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {cardBodyText}
        </CardSubtitle>
        {buttonText && buttonLink && (
          <LinkComponent link={buttonLink} text={buttonText} externalLink />
        )}
      </CardBody>
    </Card>
  );
}

const styles = {
  card: {
    margin: "0.5rem 0.5rem",
  },
};

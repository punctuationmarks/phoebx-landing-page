import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardSubtitle,
  CardTitle
} from "reactstrap";
import LinkComponent from "./LinkComponent";

interface ICardComponentProps {
  headerText: string;
  imageSrc?: string;
  imageAlt?: string;
  cardTitle: string;
  cardBodyText?:string;
  buttonText?: string;
  buttonLink?: string;
  externalLink?: boolean;
}

export default function CardComponent(props: ICardComponentProps) {
  const {
    headerText,
    imageSrc,
    imageAlt,
    cardTitle,
    cardBodyText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate et, voluptatum architecto eos recusandae eius cupiditate laboriosam laborum sit magnam!",
    buttonText,
    buttonLink,
    externalLink,
  } = props;

  return (
    <Card style={styles.card}>
      {!!headerText && (
        <CardHeader className="card-header-text">{headerText}</CardHeader>
      )}
      <CardImg top width="100%" src={imageSrc} alt={imageAlt} />
      <CardBody>
        <CardTitle tag="h5">{cardTitle}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {cardBodyText}
        </CardSubtitle>
        {buttonText && buttonLink && externalLink && (
          <LinkComponent link={buttonLink} text={buttonText} externalLink />
        )}
        {buttonText && buttonLink && !externalLink && (
          <LinkComponent link={buttonLink} text={buttonText} />
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

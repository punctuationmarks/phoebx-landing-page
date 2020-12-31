import React from "react";

export default function LinkComponent(props) {
  const { text, link, externalLink } = props;

  if (externalLink) {
    return (
      <a className="nav-item" href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    );
  }
  return (
    <a className="nav-item" href={link}>
      {text}
    </a>
  );
}

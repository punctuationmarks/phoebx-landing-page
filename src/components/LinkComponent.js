import React from "react";

export default function LinkComponent(props) {
  const { text, link, externalLink } = props;

  if (externalLink) {
    return (
      <a style={styles.href} href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    );
  }
  return (
    <a style={styles.href} href={link}>
      {text}
    </a>
  );
}

const styles = {
  href: {
    color: "gray",
    textDecoration: "black underline",
  },
};

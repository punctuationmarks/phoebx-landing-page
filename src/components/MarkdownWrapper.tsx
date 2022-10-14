import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import "../App.css";

const MarkdownWrapper = (args: { file: string }) => {
  const { file } = args;
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../markdown/${file}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
      })
      .catch((err) => console.log(err));
  });

  return (
    // would be nice to have these in an accordian style
    <div className="markdown">
      <Markdown>{post}</Markdown>
    </div>
  );
};

export default MarkdownWrapper;
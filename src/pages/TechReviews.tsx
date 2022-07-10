import React from "react";
import "../App.css";
import MarkdownWrapper from "../components/MarkdownWrapper";
import NavBar from "../components/Navbar";

// TODO:
// add all tech reviews
// be sure to add this page in here somewhere too
// https://www.deviceinfo.me/


const TechReviews = () => {
  return (
    <>
    <NavBar />
    <div className="blog-container">
      <MarkdownWrapper file="hardware.md" />
      <MarkdownWrapper file="software.md" />
    </div>
    </>
  );
};

export default TechReviews;

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
    <h4>Technologies and opinions</h4>
    <div className="blog-container">
      
      <MarkdownWrapper file="software.md" />
      <MarkdownWrapper file="protocols.md" />
      <MarkdownWrapper file="hardware.md" />
    </div>
    </>
  );
};

export default TechReviews;

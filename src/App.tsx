import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TechReviews from "./pages/TechReviews";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech-reviews" element={<TechReviews />} />
      </Routes>
    </div>
  );
}

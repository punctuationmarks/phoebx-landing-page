import React from "react";
import "../App.css";
import NavBar from "../components/Navbar";
import ContactForm from "../sections/ContactForm";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Services from "../sections/Services";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Services />
      <ContactForm />
      <Footer />
    </>
  );
}

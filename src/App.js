import "./App.css";
import NavBar from "./components/Navbar";
import Services from "./sections/Services";
import Header from "./sections/Header";
import ContactForm from "./sections/ContactForm";
import Footer from "./sections/Footer";
import Glitch from "./components/GitchText";

export default function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Glitch />
      <Services />
      <ContactForm />
      <Footer />
    </>
  );
}

const styles = {
  images: {
    height: "5rem",
  },
};

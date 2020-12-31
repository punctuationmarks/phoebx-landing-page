import "./App.css";
import NavBar from "./components/Navbar";
import ContactForm from "./sections/ContactForm";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Services from "./sections/Services";


export default function App() {
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

const styles = {
  images: {
    height: "5rem",
  },
};

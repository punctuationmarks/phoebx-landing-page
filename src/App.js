import "./App.css";
import NavBar from "./components/Navbar";
import Services from "./sections/Services";
import Header from "./sections/Header";
import ContactForm from "./sections/ContactForm";
import Footer from "./sections/Footer";


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

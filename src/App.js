import "./App.css";
import NavBar from "./components/Navbar";
import Services from "./sections/Services";
import Header from "./sections/Header";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

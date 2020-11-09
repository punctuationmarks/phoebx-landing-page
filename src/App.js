import "./App.css";
import NavBar from "./components/Navbar";
import Services from "./sections/Services";
import Header from "./sections/Header";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div style={styles.container}>
      <NavBar />
      <Header />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

const styles = { container: {} };

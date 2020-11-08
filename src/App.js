import "./App.css";
import NavBar from "./components/Navbar";
import Services from "./sections/Services";
import Header from "./sections/Header";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="main">
      <NavBar />
      <Header />
      <Services />
      <Contact />
    </div>
  );
}




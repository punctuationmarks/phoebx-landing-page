import "../App.css";
import NavBar from "../components/Navbar";

// this should be built with preact, I can't avoid React due to react-strap, but I can learn a new virtual dom library in the meantime and brush up on some CSS
// buuuut might need some more research in how to integrate preact and react, might be fun to do, but also, kinda just over JS in general (although if it's open, then it makes sense to still use in the meantime)
const TechReviews = () => {
  return (
    <>
      <NavBar />
      <p>More to come soon!</p>
    </>
  );
};

export default TechReviews;

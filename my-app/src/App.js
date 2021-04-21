import React from "react";
import Navbar from "./Home/Navbar";
import Body from "./Home/Body";
import Footer from "./Home/Footer";
import "./assets/css/custom.css";
let App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
export default App;

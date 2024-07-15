import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="content-wrapper">
        <Hero></Hero>
      </div>
      <div className="content-wrapper">
        <About></About>
      </div>
      <div className="content-wrapper">
        <Services></Services>
      </div>
      <div className="content-wrapper">
        <MyWork></MyWork>
      </div>
      <div className="content-wrapper">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;

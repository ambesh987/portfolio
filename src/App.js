import React from "react";
import { About, Header, Footer, Skills, Testimonial, Work } from "./containers";
import { Navbar } from "./components";
import "./App.scss";

let App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;

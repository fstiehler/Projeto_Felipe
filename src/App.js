import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Cards from "./components/Cards-Curso/Cards";

function App() {
  return (
    <div className="app">
      <Hero />
      <Cards />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;

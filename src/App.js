import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Cards from "./components/Cards-Curso/Cards";
import Depoimentos from "./components/Depoimentos"

function App() {
  return (
    <div className="app">
      <Hero />
      <Cards />
      <CallToAction />
      <Depoimentos />
      <Footer />
    </div>
  );
}

export default App;

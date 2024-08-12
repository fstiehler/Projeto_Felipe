import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { Presentation } from "./components/Presentation";

function App() {
  return (
    <div className="app">
      <Hero />
      <Presentation />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;

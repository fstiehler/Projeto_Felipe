import React from "react";
import "./App.css"
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Hero />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;

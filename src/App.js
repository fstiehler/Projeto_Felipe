import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Cards from "./components/Cards-Curso/Cards";
import AboutUs from "./components/AboutUs";
import { Box } from "@mui/material";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <Box className="app">
      <Hero />
      <Cards />
      <CallToAction />
      <AboutUs />
      <Testimonials />
      <Footer />
    </Box>
  );
}

export default App;

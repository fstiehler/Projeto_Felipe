import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Cards from "./components/Cards-Curso/Cards";
import Depoimentos from "./components/Depoimentos";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="app">
      <Hero />
      <Cards />
      <CallToAction />
      <Depoimentos />
      <Footer />
    </Box>
  );
}

export default App;

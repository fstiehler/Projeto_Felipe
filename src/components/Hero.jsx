import React from "react";
import "./Hero.css"
import NavBar from "./NavBar";
import Carousel from "./Carousel";
import Campaing from "./Campaing";
import Border from "./Border";
import { Box } from "@mui/material";

export default function Hero() {
  return (
    <Box >
      <Box className="navigation">
        <NavBar />
      </Box>
      <Border />
      <Carousel />
      <Campaing />
      <Border />
    </Box>
  );
}


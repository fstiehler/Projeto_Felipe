import React from "react";
import "./Hero.css"
import NavBar from "./NavBar";
import Carousel from "./Carousel";
import Campaing from "./Campaing";


export default function Hero() {


  return (
    <div className="tudo">
      <div className="navigation">
        <NavBar />
      </div>
      <Carousel />
      <Campaing />
    </div>
  );
}


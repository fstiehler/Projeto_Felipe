import React from "react";
import "./NavBar.css"
import Logo from "../images/logos/evoluinfo.png"
import { Button } from '@mui/base/Button';
import PersonIcon from '@mui/icons-material/Person';

export default function NavBar() {
  return (
    <div className="navbar-menu" >
      <div className="navbar-desktop-navigation" style={{zIndex: 1000}}>
        <nav className="navbar-centered">
          <img
            alt="Logo EvoluInfo Tecnologia"
            src={Logo}
            className="navbar-logo1"
          />
          <div className="navbar-nav-links">
            <a href="#services" className="navbar-nav-link">Institucional</a>
            <a href="#about" className="navbar-nav-link">Graduação</a>
            <a href="#contact" className="navbar-nav-link">Pós-graduação</a>
            <a href="#about" className="navbar-nav-link">Cusos especiais</a>
            <a href="#contact" className="navbar-nav-link">Promoções</a>
          </div>
        
          <PersonIcon fontSize="large" className="teste"/>
      
          <Button className="navbar-button" href="https://mui.com/">Inscreva-se</Button>
        </nav>
      </div>
    </div>
  );
}


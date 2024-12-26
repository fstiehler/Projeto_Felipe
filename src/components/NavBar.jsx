import React from "react";
import "./NavBar.css"
import Logo from "../images/logos/logo.png"
import { Button } from '@mui/base/Button';
import { Box, Typography } from "@mui/material";

export default function NavBar() {


  return (
    <Box className="navbar-menu" >
      <Box className="navbar-desktop-navigation" style={{ zIndex: 1000 }}>
        <nav className="navbar-centered">
          <img
            style={{ width: "18%" }}
            alt="Logo"
            src={Logo}
          />
          <Box className="navbar-nav-links">
            <Typography href="#services" className="navbar-nav-link">Conheça a FullEducation</Typography>
            <Typography href="#about" className="navbar-nav-link">Graduação</Typography>
            <Typography href="#contact" className="navbar-nav-link">Pós-graduação</Typography>
            <Typography className="navbar-nav-link">Área do aluno</Typography>
          </Box>

          <Button className="navbar-button" href="https://mui.com/">Inscreva-se</Button>
        </nav>
      </Box>
    </Box>
  );
}


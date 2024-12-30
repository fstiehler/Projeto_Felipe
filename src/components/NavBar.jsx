import React, { useState } from "react";
import "./NavBar.css";
import Logo from "../images/logos/logo.png";
import { Button, Box, MenuItem, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import AboutUs from "../components/AboutUs"

export default function NavBar() {
  // Estado separado para cada item de menu
  const [anchorElGrad, setAnchorElGrad] = useState(null);
  const [anchorElPost, setAnchorElPost] = useState(null);
  const [anchorElAluno, setAnchorElAluno] = useState(null);

  const openGrad = Boolean(anchorElGrad);
  const openPost = Boolean(anchorElPost);
  const openAluno = Boolean(anchorElAluno);

  // Funções para abrir o menu de cada item
  const handleMenuOpenGrad = (event) => setAnchorElGrad(event.currentTarget);
  const handleMenuOpenPost = (event) => setAnchorElPost(event.currentTarget);
  const handleMenuOpenAluno = (event) => setAnchorElAluno(event.currentTarget);

  const handleMenuClose = () => {
    setAnchorElGrad(null);
    setAnchorElPost(null);
    setAnchorElAluno(null);
  };

  // Menu para Graduação
  const renderMenuGrad = () => (
    <Menu
      anchorEl={anchorElGrad}
      open={openGrad}
      onClose={handleMenuClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  // Menu para Pós-graduação
  const renderMenuPost = () => (
    <Menu
      anchorEl={anchorElPost}
      open={openPost}
      onClose={handleMenuClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  // Menu para Área do aluno
  const renderMenuAluno = () => (
    <Menu
      anchorEl={anchorElAluno}
      open={openAluno}
      onClose={handleMenuClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box className="navbar-menu">
      <Box className="navbar-desktop-navigation" style={{ zIndex: 1000 }}>
        <nav className="navbar-centered">
          <img style={{ width: "18%" }} alt="Logo" src={Logo} />
          <Box className="navbar-nav-links">
            <Typography src={ <AboutUs/> } className="navbar-nav-link" component="a">
              Conheça a FullEducation
            </Typography>

            <Typography
              onClick={handleMenuOpenGrad}
              className="navbar-nav-link"
              component="a"
              href="#aluno"
              style={{ cursor: "pointer" }}
            >
              Graduação
            </Typography>
            {renderMenuGrad()}

            <Typography
              onClick={handleMenuOpenPost}
              className="navbar-nav-link"
              component="a"
              href="#aluno"
              style={{ cursor: "pointer" }}
            >
              Pós-graduação
            </Typography>
            {renderMenuPost()}

            <Typography
              onClick={handleMenuOpenAluno}
              className="navbar-nav-link"
              component="a"
              href="#aluno"
              style={{ cursor: "pointer" }}
            >
              Área do aluno
            </Typography>
            {renderMenuAluno()}

          </Box>
          <Button
            sx={{
              backgroundColor: "#E4535E",
              color: "white",
              fontWeight: 800,
              borderRadius: 2,
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#d3424e",
              },
            }}
          >
            Inscreva-se
          </Button>
        </nav>
      </Box>
    </Box>
  );
}

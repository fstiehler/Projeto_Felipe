import React, { useState } from "react";
import "./NavBar.css";
import Logo from "../images/logos/logo.png";
import { Button, Box, MenuItem, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import { Link } from "react-scroll";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  const handleMenuOpen = (event, items) => {
    setAnchorEl(event.currentTarget);
    setMenuItems(items);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="navbar-menu">
      <Box className="navbar-desktop-navigation" style={{ zIndex: 1000 }}>
        <nav className="navbar-centered">
          <img style={{ width: "18%" }} alt="Logo" src={Logo} />
          <Box className="navbar-nav-links">
            <Typography
              style={{ cursor: "pointer" }}
              component="a"
              className="navbar-nav-link"
            >
              <Link to="aboutUsSection" smooth={false} duration={500}>
                Conheça a FullEducation
              </Link>
            </Typography>

            <Typography
              className="navbar-nav-link"
              component="a"
              onMouseEnter={(e) => handleMenuOpen(e, ["Curso 1", "Curso 2", "Curso 3"])}
              style={{ cursor: "pointer" }}
            >
              Graduação
            </Typography>

            <Typography
              className="navbar-nav-link"
              component="a"
              onMouseEnter={(e) => handleMenuOpen(e, ["Curso A", "Curso B", "Curso C"])}
              style={{ cursor: "pointer" }}
            >
              Pós-graduação
            </Typography>

            <Typography
              className="navbar-nav-link"
              component="a"
              onMouseEnter={(e) => handleMenuOpen(e, ["Perfil", "Minha conta", "Logout"])}
              style={{ cursor: "pointer" }}
            >
              Área do aluno
            </Typography>
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

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        MenuListProps={{
          onMouseLeave: handleMenuClose,
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleMenuClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

import React from "react";
import "./NavBar.css"
import Logo from "../images/logos/evoluinfo.png"
import { Button } from '@mui/base/Button';
import PersonIcon from '@mui/icons-material/Person';
import { Stack, Avatar } from "@mui/icons-material"
import User from "../images/user.jpg"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="navbar-menu" >
      <div className="navbar-desktop-navigation" style={{ zIndex: 1000 }}>
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
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <PersonIcon fontSize="large" className="teste" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
            <MenuItem onClick={handleClose}>Sair</MenuItem>
          </Menu>

          <Button className="navbar-button" href="https://mui.com/">Inscreva-se</Button>
        </nav>
      </div>
    </div>
  );
}


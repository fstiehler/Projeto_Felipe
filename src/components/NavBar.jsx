import React, { useState } from "react";
import "./NavBar.css";
import Logo from "../images/logos/logo.png";
import {
  Button,
  Box,
  MenuItem,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
import { theme } from "../commons/style/theme";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event, items) => {
    setAnchorEl(event.currentTarget);
    setMenuItems(items);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box className="navbar-menu">
      <Box className="navbar-desktop-navigation">
        <nav className="navbar-centered">
          <img className="navbar-logo" alt="Logo" src={Logo} />
          <Box className="navbar-nav-links">
            <Typography component="a" className="navbar-nav-link">
              <Link to="aboutUsSection" smooth={true} duration={500}>
                Conheça a FullEducation
              </Link>
            </Typography>
            <Typography
              className="navbar-nav-link"
              component="a"
              onMouseEnter={(e) => handleMenuOpen(e, ["Curso 1", "Curso 2", "Curso 3"])}
            >
              Graduação
            </Typography>
            <Typography
              className="navbar-nav-link"
              component="a"
              onMouseEnter={(e) => handleMenuOpen(e, ["Curso A", "Curso B", "Curso C"])}
            >
              Pós-graduação
            </Typography>
            <Typography
              className="navbar-nav-link"
              component="a"
              onMouseEnter={(e) => handleMenuOpen(e, ["Perfil", "Minha conta", "Logout"])}
            >
              Área do aluno
            </Typography>
          </Box>
          <Button
            sx={{
              backgroundColor: theme.colors.red,
              color: "white",
              fontWeight: 800,
              borderRadius: 2,
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#d3424e",
              },
              display: { xs: "none", md: "block" },
            }}
          >
            Inscreva-se
          </Button>
          <IconButton
            className="menu-icon"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
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

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          className="drawer-content"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
          <Divider />
          <List>
            <ListItem button>
              <Link to="aboutUsSection" smooth={true} duration={500}>
                <ListItemText primary="Conheça a FullEducation" />
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Graduação" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Pós-graduação" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Área do aluno" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

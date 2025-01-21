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
import { theme } from "../commons/style/theme";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null); // Elemento âncora para o menu
  const [menuItems, setMenuItems] = useState([]); // Itens do menu
  const [drawerOpen, setDrawerOpen] = useState(false); // Controle do Drawer

  // Abre o menu
  const handleMenuOpen = (event, items) => {
    setAnchorEl(event.currentTarget);
    setMenuItems(items);
  };

  // Fecha o menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Alterna o estado do Drawer
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
              <a href="/#aboutUsSection">Conheça a FullEducation</a>
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
              fontSize: "1rem",
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
            aria-label="Abrir menu de navegação"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </nav>
      </Box>

      {/* Menu suspenso */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        MenuListProps={{
          onMouseLeave: handleMenuClose, // Fecha o menu ao sair
          sx: {
            bgcolor: "#f9f9f9",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            py: 1,
          },
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => (window.location.href = `/${item.toLowerCase().replace(" ", "-")}`)}
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#0047ab",
              px: 3,
              "&:hover": {
                bgcolor: "#eaf2ff",
                color: "#002f6c",
              },
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "80%",
            maxWidth: 230,
            bgcolor: "#ffffff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            py: 2,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 2 }}>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: "#0047ab" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ bgcolor: "#0047ab", opacity: 0.2 }} />
          <List sx={{ mt: 2 }}>
            <ListItem button>
              <a href="/#aboutUsSection">
                <ListItemText
                  primary="Conheça a FullEducation"
                  primaryTypographyProps={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#0047ab",
                  }}
                />
              </a>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

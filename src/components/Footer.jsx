import './Footer.css';
import { Alert } from "antd";
import { useState } from "react";
import Logo from "../images/logos/logo.png";
import { Box, Button, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Instagram } from '@mui/icons-material';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const handleSubscribeClick = async () => {
    try {
      setAlert(
        <Alert
          message="Aguarde até que o processo se conclua"
          type="info"
          showIcon
          closable
          onClose={closeAlert}
          style={{ position: "fixed", top: 16, right: 16 }}
        />
      );

      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setTimeout(() => {
        if (response.ok) {
          setAlert(
            <Alert
              message="Cadastro realizado com sucesso!"
              description="Agora você receberá nossas novidades por e-mail."
              type="success"
              showIcon
              closable
              onClose={closeAlert}
              style={{ position: "fixed", top: 16, right: 16 }}
            />
          );
        } else {
          setAlert(
            <Alert
              message="Erro ao cadastrar o e-mail."
              description="Ocorreu um erro ao se inscrever. Por favor, tente novamente mais tarde."
              type="error"
              showIcon
              closable
              onClose={closeAlert}
              style={{ position: "fixed", top: 16, right: 16 }}
            />
          );
        }
      }, 3000);
    } catch (error) {
      setAlert(
        <Alert
          message="Erro ao cadastrar o e-mail."
          description="Ocorreu um erro ao se inscrever. Por favor, tente novamente mais tarde."
          type="error"
          showIcon
          closable
          onClose={closeAlert}
          style={{ position: "fixed", top: 16, right: 16 }}
        />
      );
    }
  };

  return (
    <footer className="home-footer">
      <Grid container spacing={4} p={8} alignItems="center" justifyContent="center">
        {alert}
        <Box className="home-bottom">
          <img
            alt="Logo"
            src={Logo}
            className="home-branding"
          />
          <span className="home-text138">Copyright © Fillipi Villani - {currentYear}</span>
        </Box>
        <Box
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={handleSubscribeClick}
            sx={{
              backgroundColor: "#E4535E",
              color: "white",
              fontWeight: 800,
              borderRadius: 2,
              padding: "15px 40px",
              "&:hover": {
                backgroundColor: "#d3424e",
              },
            }}
          >
            Inscreva-se
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1.2,
              color: "white",
              marginTop: 2,
              marginLeft: -2
            }}
          >
            <FacebookIcon fontSize="large" />
            <Instagram fontSize="large" />
            <LinkedInIcon fontSize="large" />
            <XIcon fontSize="large" />
            <YouTubeIcon fontSize="large" />
          </Box>
        </Box>
      </Grid>
    </footer>
  );
}

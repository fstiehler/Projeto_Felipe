import "./Campaing.css";
import Image from "../images/logos/evoluinfo-icon-2.png"
import { Box } from "@mui/material";

export default function Campaing() {
  return (
    <Box className="hero-campaign">
      <Box className="hero-campaign-Box-logo">
        <img alt="pastedImage" src={Image} />
      </Box>
      <Box className="hero-campaign-Box-text">
        <h1 className="hero-campaign-text-top">
          Chegou a hora de virar o jogo.
        </h1>
        <h1 className="hero-campaign-text-bottom">
          Sua ideia, nós tiramos do papel
        </h1>
      </Box>
      <Box className="hero-campaign-Box-buttom"><a href="https://wa.me/+5547999201143" target="_blank" rel="noopener noreferrer">contratar agora</a></Box>
    </Box>
  );
}

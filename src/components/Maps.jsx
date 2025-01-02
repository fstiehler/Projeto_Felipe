import React from 'react';
import "./Maps.css";
import { Box } from '@mui/material';

const Maps = () => {
  return (
    <Box>
      <section className="home-testimonals">
        <iframe
          className="iframe-maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.750469534914!2d-48.661862323639745!3d-26.911413293151135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cc74d166744b%3A0x2dc669213437a160!2sAv.%20Cel.%20Marcos%20Konder%2C%201207%20-%20Sala%20102%20-%20Centro%2C%20Itaja%C3%AD%20-%20SC%2C%2088301-303!5e0!3m2!1spt-BR!2sbr!4v1710938047805!5m2!1spt-BR!2sbr"
          allowFullScreen
          title="Mapa da localização em Itajaí"
        />
      </section>
    </Box>
  );
};

export default Maps;

import React from 'react';
import { theme } from '../commons/style/theme';


const Maps = () => {
  return (
    <div style={{ backgroundColor: theme.colors.primary, color: theme.colors.white }}>
      <h1>Bem-vindo à loja!</h1>
      <p>Nosso horário de funcionamento é das {theme.store.open}h às {theme.store.close}h.</p>
      <a href={theme.links.maps} target="_blank" rel="noopener noreferrer">
        Veja nossa localização no Google Maps
      </a>
    </div>
  );
};

export default Maps;

import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedIcon from '@mui/icons-material/Verified';
import './Card.css';
import { Button, CardActionArea, CardActions, CardContent, Card as CardMui } from '@mui/material';

const Card = ({ title, imageSrc, description }) => (
  <CardMui>
    <CardActionArea>
      <CardContent>
        <h2>{title}</h2>
        <img className="image-cards" src={imageSrc} alt={title} />
        <p className="duration-certificate">
          <AccessTimeIcon className="icon" /> Duração | <VerifiedIcon className="icon" /> Certificado
        </p>
        <p className="description">
          {description}
        </p>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button href="https://wa.me/5547996277454?text=Ol%C3%A1%20Vim%20atrav%C3%A9s%20do%20instagram.com.br" variant='contained'>Reservar</Button>
      </CardActions>
    </CardActionArea>
  </CardMui>
);

export default Card;

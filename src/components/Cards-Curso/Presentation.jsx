import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box, Typography, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Cards from '../Cards-Curso/Cards';
import './Presentation.css';

// Estilo para o contêiner de pesquisa
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.9),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.75),
  },
  margin: theme.spacing(2, 0),
  width: '100%',
  maxWidth: 400,
  [theme.breakpoints.up('sm')]: {
    margin: theme.spacing(0, 2),
  },
}));

// Estilo para o ícone de pesquisa
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Estilo para o campo de entrada de pesquisa
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

export const Presentation = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const cursos = [
    { id: 1, nome: 'React.js' },
    { id: 2, nome: 'React Avançado' },
    { id: 3, nome: 'JavaScript para Iniciantes' },
  ];

  const cursosFiltrados = cursos.filter((curso) =>
    curso.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box className="presentation-container">
      <Box className="presentation-content" sx={{ textAlign: 'center', p: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Todos os nossos cursos
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Pesquisar cursos…"
            inputProps={{ 'aria-label': 'search' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Search>
        <Cards cursos={cursosFiltrados} />
      </Box>
    </Box>
  );
};

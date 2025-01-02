import React, { useState } from 'react';
import { Box, Typography, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Cards from '../Cards-Curso/Cards';

// Estilo para o contêiner de pesquisa
const SearchWrapper = styled(Box)(({ theme }) => ({
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
    <Box sx={{
      width: "100%",
      height: "200vh",
      backgroundColor: "#e0e0e0"
    }}>
      <Box sx={{
        textAlign: 'center', p: 2, width: "67%",
        paddingTop: "5%",
        marginLeft: "18.5%",
      }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Todos os nossos cursos
        </Typography>

        <SearchWrapper>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Pesquisar cursos…"
            inputProps={{ 'aria-label': 'pesquisar cursos' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchWrapper>

        <Cards cursos={cursosFiltrados} />
      </Box>
    </Box>
  );
};

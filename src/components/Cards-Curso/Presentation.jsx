import React, { useState } from 'react'
import "./Presentation.css"
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Cards from '../Cards-Curso/Cards';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.99),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.40),
  },
  marginLeft: 20,
  width: '74%',
  // eslint-disable-next-line no-dupe-keys
  borderRadius: "5px",
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(41.4),
    marginTop: theme.spacing(-4),
    width: '100',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
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
    <div className="contaiiner">
      <div className="largure">
        <h2 className="textoo">Todos os nossos cursos
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Search>
        </h2>
        <Cards cursos={cursosFiltrados} />
      </div>
    </div>
  )
}

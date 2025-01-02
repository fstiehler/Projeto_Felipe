import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import Card from '../../components/Cards-Curso/Card';
import './Cards.css';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Typography, Box } from '@mui/material';
import { allCourses } from './coursesData';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: alpha(theme.palette.common.white, 0.99),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.70),
    },
    marginLeft: 20,
    width: '100%',
    borderRadius: '10px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(19),
        marginBottom: theme.spacing(4),
        width: '103.2%',
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

const CarouselWrapper = ({ courses, carouselRef }) => (
    <div className="carousel-container">
        <Carousel
    autoplay
    dots
    slidesToShow={window.innerWidth < 768 ? 1 : 4}
    slidesToScroll={1}
    infinite
    ref={carouselRef}
>
    {courses.map((card, index) => (
        <div key={index} className="cards">
            <Card
                title={card.title}
                imageSrc={card.imageSrc}
                description={card.description}
            />
        </div>
    ))}
</Carousel>

        <button className="custom-prev" onClick={() => carouselRef.current?.prev()}>‹</button>
        <button className="custom-next" onClick={() => carouselRef.current?.next()}>›</button>
    </div>
);

const Cards = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showMore, setShowMore] = useState(false);

    const filteredCourses = allCourses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const carouselRef = useRef(null);
    const carouselRefSecond = useRef(null);

    return (
        <Box>
            <div className='cards-geral'>
                <Typography variant="body1">
                    <div className="largure">
                        <h2 className="textoo">Todos os nossos cursos</h2>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Pesquisar…"
                                inputProps={{ 'aria-label': 'search' }}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </Search>
                    </div>

                    <CarouselWrapper courses={filteredCourses.slice(0, 8)} carouselRef={carouselRef} />

                    {showMore && (
                        <CarouselWrapper courses={filteredCourses.slice(8, 16)} carouselRef={carouselRefSecond} />
                    )}
                </Typography>

                <Button
                    variant="contained"
                    onClick={() => setShowMore(!showMore)}
                    color='success'
                    sx={{ mt: 2.5, mb: 2, display: "flex", justifySelf: "center" }}
                >
                    {showMore ? 'Mostrar Menos' : 'Mostrar Mais'}
                </Button>
            </div>
        </Box>
    );
};

export default Cards;

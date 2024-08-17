import React, { useRef } from 'react';
import { Carousel } from 'antd';
import Card from '../../components/Cards-Curso/Card';
import './Cards.css';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import Image1 from '../../images/cards/image1.png';
import Image2 from '../../images/cards/image2.png';
import Image3 from '../../images/cards/image3.png';
import Image4 from '../../images/cards/image4.png';
import Image5 from '../../images/cards/image5.png';
import Image6 from '../../images/cards/image6.png';
import Image7 from '../../images/cards/image7.png';
import Image8 from '../../images/cards/image8.png';

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

const cardData = [
    { title: 'React.js', imageSrc: Image1, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'JavaScript.js', imageSrc: Image2, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'TypeScript.js', imageSrc: Image3, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'Node.js', imageSrc: Image4, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'Golang', imageSrc: Image5, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'Python', imageSrc: Image6, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'React Native', imageSrc: Image7, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'MySQL', imageSrc: Image8, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' }
];

const cardDataSecond = [
    { title: 'React.js', imageSrc: Image1, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'Node.js', imageSrc: Image4, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'JavaScript.js', imageSrc: Image2, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'TypeScript.js', imageSrc: Image3, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'Golang', imageSrc: Image5, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'React Native', imageSrc: Image7, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'Python', imageSrc: Image6, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'MySQL', imageSrc: Image8, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' }
];

const cardDataThird = [
    { title: 'React.js', imageSrc: Image1, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'JavaScript.js', imageSrc: Image2, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'TypeScript.js', imageSrc: Image3, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'Node.js', imageSrc: Image4, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'Golang', imageSrc: Image5, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'Python', imageSrc: Image6, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'React Native', imageSrc: Image7, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'MySQL', imageSrc: Image8, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' }
];

const cardDataFourth = [
    { title: 'React.js', imageSrc: Image1, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'Node.js', imageSrc: Image4, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'JavaScript.js', imageSrc: Image2, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'TypeScript.js', imageSrc: Image3, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'Golang', imageSrc: Image5, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'React Native', imageSrc: Image7, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'Python', imageSrc: Image6, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' },
    { title: 'MySQL', imageSrc: Image8, description: 'Para uma formação em uma boa escola ou faculdade de programação, o aluno deverá desembolsar entre R$ 700 e R$ 3.000,00 por mês!' }
];

const Cards = () => {
    const carouselRef = useRef(null);

    const goToPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    const goToNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const carouselRefSecond = useRef(null);

    const goToPrevSecond = () => {
        if (carouselRefSecond.current) {
            carouselRefSecond.current.prev();
        }
    };

    const goToNextSecond = () => {
        if (carouselRefSecond.current) {
            carouselRefSecond.current.next();
        }
    };

    const carouselRefThird = useRef(null);

    const goToPrevThird = () => {
        if (carouselRefThird.current) {
            carouselRefThird.current.prev();
        }
    };

    const goToNextThird = () => {
        if (carouselRefThird.current) {
            carouselRefThird.current.next();
        }
    };

    const carouselRefFourth = useRef(null);

    const goToPrevFourth = () => {
        if (carouselRefFourth.current) {
            carouselRefFourth.current.prev();
        }
    };

    const goToNextFourth = () => {
        if (carouselRefFourth.current) {
            carouselRefFourth.current.next();
        }
    };

    return (
        <div className='cards-geral'>
            <div className="largure">
                <h2 className="textoo">Todos os nossos cursos</h2>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Pesquisar…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </div>

            <div className="carousel-container">
                <Carousel
                    autoplay
                    dots
                    slidesToShow={4}
                    slidesToScroll={1}
                    infinite
                    ref={carouselRef}
                    responsive={[
                        { breakpoint: 1024, settings: { slidesToShow: 3 } },
                        { breakpoint: 768, settings: { slidesToShow: 2 } },
                        { breakpoint: 480, settings: { slidesToShow: 1 } }
                    ]}
                >
                    {cardData.map((card, index) => (
                        <div key={index} className="cards">
                            <Card
                                title={card.title}
                                imageSrc={card.imageSrc}
                                description={card.description}
                            />
                        </div>
                    ))}
                </Carousel>
                <button className="custom-prev" onClick={goToPrev}>‹</button>
                <button className="custom-next" onClick={goToNext}>›</button>
            </div>

            <div className="carousel-container">
                <Carousel
                    autoplay
                    dots
                    ref={carouselRefSecond}
                    slidesToShow={4}
                    slidesToScroll={1}
                    infinite
                    responsive={[
                        { breakpoint: 1024, settings: { slidesToShow: 3 } },
                        { breakpoint: 768, settings: { slidesToShow: 2 } },
                        { breakpoint: 480, settings: { slidesToShow: 1 } }
                    ]}
                >
                    {cardDataSecond.map((card, index) => (
                        <div key={index} className="cards">
                            <Card
                                title={card.title}
                                imageSrc={card.imageSrc}
                                description={card.description}
                            />
                        </div>
                    ))}
                </Carousel>
                <button className="custom-prev" onClick={goToPrevSecond}>‹</button>
                <button className="custom-next" onClick={goToNextSecond}>›</button>
            </div>
            <div className="carousel-container">
                <Carousel
                    autoplay
                    dots
                    slidesToShow={4}
                    ref={carouselRefThird}
                    slidesToScroll={1}
                    infinite
                    responsive={[
                        { breakpoint: 1024, settings: { slidesToShow: 3 } },
                        { breakpoint: 768, settings: { slidesToShow: 2 } },
                        { breakpoint: 480, settings: { slidesToShow: 1 } }
                    ]}
                >
                    {cardDataThird.map((card, index) => (
                        <div key={index} className="cards">
                            <Card
                                title={card.title}
                                imageSrc={card.imageSrc}
                                description={card.description}
                            />
                        </div>
                    ))}
                </Carousel>
                <button className="custom-prev" onClick={goToPrevThird}>‹</button>
                <button className="custom-next" onClick={goToNextThird}>›</button>
            </div>

            <div className="carousel-container">
                <Carousel
                    autoplay
                    dots
                    slidesToShow={4}
                    slidesToScroll={1}
                    ref={carouselRefFourth}
                    infinite
                    responsive={[
                        { breakpoint: 1024, settings: { slidesToShow: 3 } },
                        { breakpoint: 768, settings: { slidesToShow: 2 } },
                        { breakpoint: 480, settings: { slidesToShow: 1 } }
                    ]}
                >
                    {cardDataFourth.map((card, index) => (
                        <div key={index} className="cards">
                            <Card
                                title={card.title}
                                imageSrc={card.imageSrc}
                                description={card.description}
                            />
                        </div>
                    ))}
                </Carousel>
                <button className="custom-prev" onClick={goToPrevFourth}>‹</button>
                <button className="custom-next" onClick={goToNextFourth}>›</button>
            </div>
        </div>

    )
}

export default Cards;

import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import SwipeableViews from "react-swipeable-views";

const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        { id: 1, text: '"O curso me deu uma base e uma profissão pra vida. Me abriu uma oportunidade de alcançar meus sonhos, como morar fora do país e poder atuar fora do país."', name: 'Fillipi Villani' },
        { id: 2, text: '"A FullEducation me ajudou a realizar um sonho, com professores comprometidos e capacitados, além da infraestrutura necessária para que eu pudesse me dedicar ao curso."', name: 'Maria Luiza' },
        { id: 3, text: '"A FullEducation me proporcionou a chance de reviver um sonho adormecido: estudar Nutrição. Tenho muito orgulho do meu campus pois nele tive acesso a um ensino de qualidade."', name: 'Fillipi Villani' },
        { id: 4, text: '"As aulas presenciais de Pedagogia são ótimas. Os professores são interessados em proporcionar um aprendizado significativo. Estão sempre prontos a tirar dúvidas."', name: 'Fillipi Villani' },
        { id: 5, text: '"Aqui me sinto em casa. Com um grande apoio da faculdade para chegar onde eu quero. Achei uma instituição que se preocupa em dar todo suporte que preciso para me formar."', name: 'Fillipi Villani' },
    ];

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <Box sx={{ padding: 5, backgroundColor: "#0B53B8", justifyContent: "center" }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center" paddingLeft={21.5}>
                <Grid item xs={12} md={4} marginRight={10}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{ color: "white", fontSize: "38px", fontWeight: 500, lineHeight: "38px", marginBottom: 2 }}
                        >
                            Depoimentos de quem viveu a experiência FullEducation
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: "white", fontSize: "20px", fontWeight: 300, lineHeight: "24px", marginBottom: 3 }}
                        >
                            A qualidade do nosso ensino abre portas pra você se destacar no mercado de trabalho.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6} justifyContent={"center"} justifyItems={"center"}>
                    <Box sx={{ maxWidth: 400}}>
                        <SwipeableViews
                            index={activeIndex}
                            onChangeIndex={setActiveIndex}
                            enableMouseEvents
                        >
                            {cards.map((card) => (
                                <Box
                                    key={card.id}
                                    sx={{
                                        width: 320,
                                        backgroundColor: "white",
                                        padding: 4,
                                        borderRadius: 2,
                                        boxShadow: 3,
                                        textAlign: "center",
                                        minHeight: 350,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography variant="body1" sx={{ fontSize: "15px", fontWeight: 700, lineHeight: "20px", mt: 2 }}>
                                        {card.text}
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: "15px", fontWeight: 700, lineHeight: "20px", mt: 2 }}>
                                        {card.name}
                                    </Typography>
                                </Box>
                            ))}
                        </SwipeableViews>

                        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
                            <Typography sx={{ color: "white", textAlign: "center", mt: 2, fontWeight: 800 }}>
                                Depoimentos {activeIndex + 1} de {cards.length}
                            </Typography>
                            <Button
                                onClick={handlePrev}
                                sx={{
                                    marginRight: 2,
                                    backgroundColor: "#E4535E",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#d3424e",
                                    },
                                }}
                            >
                                Anterior
                            </Button>
                            <Button
                                onClick={handleNext}
                                sx={{
                                    backgroundColor: "#E4535E",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#d3424e",
                                    },
                                }}
                            >
                                Próximo
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TestimonialsSection;

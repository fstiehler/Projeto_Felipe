import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import Depoiment1 from "../../images/depoiment/Depoiment1.jpeg"
// import Depoiment2 from "../../images/depoiment/Depoiment2.jpeg"
// import Depoiment3 from "../../images/depoiment/Depoiment3.jpeg"
// import Depoiment4 from "../../images/depoiment/Depoiment4.jpeg"
// import Depoiment5 from "../../images/depoiment/Depoiment5.jpeg"

const TestimonialsSection = () => {
    const cards = [
        { id: 1, text: '"O curso me deu uma base e uma profissão pra vida. Me abriu uma oportunidade de alcançar meus sonhos, como morar fora do país e poder atuar fora do país."', name: 'Fillipi Villani', bgColor: "#f9f9f9" },
        { id: 2, text: '"A FullEducation me ajudou a realizar um sonho, com professores comprometidos e capacitados, além da infraestrutura necessária para que eu pudesse me dedicar ao curso."', name: 'Maria Luiza', bgColor: "#ffffff" },
        { id: 3, text: '"A FullEducation me proporcionou a chance de reviver um sonho adormecido: estudar Nutrição. Tenho muito orgulho do meu campus pois nele tive acesso a um ensino de qualidade."', name: 'Fillipi Villani', bgColor: "#ffffff" },
        { id: 4, text: '"As aulas presenciais de Pedagogia são ótimas. Os professores são interessados em proporcionar um aprendizado significativo. Estão sempre prontos a tirar dúvidas."', name: 'Fillipi Villani', bgColor: "#ffffff" },
        { id: 5, text: '"Aqui me sinto em casa. Com um grande apoio da faculdade para chegar onde eu quero. Achei uma instituição que se preocupa em dar todo suporte que preciso para me formar."', name: 'Fillipi Villani', bgColor: "#ffffff" },
    ];

    return (
        <Box sx={{ padding: 5, backgroundColor: "#154BC8", justifyContent: "center" }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={4}>
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
                        <Button
                            sx={{
                                backgroundColor: "#E4535E",
                                color: "white",
                                fontWeight: 800,
                                borderRadius: 2,
                                padding: "10px 20px",
                                "&:hover": {
                                    backgroundColor: "#d3424e",
                                },
                            }}
                        >
                            Inscreva-se
                        </Button>
                    </Box>
                </Grid>

                {/* Metade Direita */}
                <Grid item xs={12} md={6} justifyContent={"center"} justifyItems={"center"}>
                    <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
                        <SwipeableViews enableMouseEvents>
                            {cards.map((card) => (
                                <Box
                                    key={card.id}
                                    sx={{
                                        width: 320,
                                        backgroundColor: card.bgColor,
                                        padding: 3,
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
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default TestimonialsSection;

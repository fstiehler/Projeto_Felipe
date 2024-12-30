import React, { useRef } from "react";
import { Box, Grid, Typography, Button, Avatar } from "@mui/material";
import { Carousel } from "antd";
import Depoiment1 from "../../images/depoiment/Depoiment1.jpeg"
import Depoiment2 from "../../images/depoiment/Depoiment2.jpeg"
import Depoiment3 from "../../images/depoiment/Depoiment3.jpg"
import Depoiment4 from "../../images/depoiment/Depoiment4.jpeg"
import Depoiment5 from "../../images/depoiment/Depoiment5.jpeg"


const Testimonials = () => {
    const carouselRef = useRef(null);

    const cards = [
        {
            id: 1,
            text: '"O curso me deu uma base e uma profissão pra vida. Me abriu uma oportunidade de alcançar meus sonhos, como morar fora do país e poder atuar país e poder atuar fora fora do país."',
            name: 'Gean da silva',
            formation: "Engenharia de software",
            imageAvatar: Depoiment1
        },
        {
            id: 2,
            text: '"A FullEducation me ajudou a realizar um sonho, com professores comprometidos e capacitados, além da infraestrutura necessária para que eu pudesse me dedicar ao curso."',
            name: 'Manoela Vagner',
            formation: "Bio medicina",
            imageAvatar: Depoiment2
        },
        {
            id: 3,
            text: '"A FullEducation me proporcionou a chance de reviver um sonho adormecido: estudar Nutrição. Tenho muito orgulho do meu campus pois nele tive acesso a um ensino de qualidade."',
            name: 'Jeovana Cristovão',
            formation: "Engenharia de software",
            imageAvatar: Depoiment3
        },
        {
            id: 4,
            text: '"As aulas presenciais de Pedagogia são ótimas. Os professores são interessados em proporcionar um aprendizado significativo. Estão sempre prontos a tirar dúvidas."',
            name: 'Bianca Sthir',
            formation: "Ciências da computação",
            imageAvatar: Depoiment4
        },
        {
            id: 5,
            text: '"Aqui me sinto em casa. Com um grande apoio da faculdade para chegar onde eu quero. Achei uma instituição que se preocupa em dar todo suporte que preciso para me formar."',
            name: 'Roberta Junior',
            formation: "Engenharia civil",
            imageAvatar: Depoiment5
        },
    ];

    return (
        <Box sx={{ padding: 5, backgroundColor: "#154BC8", display: "flex", justifyContent: "center" }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={4}>
                    <Typography variant="h4" sx={{ color: "white", fontSize: "38px", fontWeight: 500, mb: 5 }}>
                        Depoimentos de quem viveu a experiência FullEducation
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white", fontSize: "20px", fontWeight: 300, mb: 3 }}>
                        A qualidade do nosso ensino abre portas pra você se destacar no mercado de trabalho.
                    </Typography>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Box sx={{ maxWidth: 960, position: "relative", margin: "0 auto", alignContent: "end", justifyContent: "end" }}>
                        <Carousel
                            autoplay
                            style={{ paddingBottom: 30, paddingTop: 30, alignContent: "end" }}
                            dots
                            slidesToShow={2.2}
                            slidesToScroll={1.1}
                            infinite
                            ref={carouselRef}
                        >
                            {cards.map((card) => (
                                <Box sx={{ paddingRight: 1, justifyItems: "left", justifyContent: "left" }}>
                                    <Avatar
                                        sx={{ width: 110, height: 110, marginBottom: "-50px", marginLeft: 13 }}
                                        alt="Remy Sharp"
                                        src={card.imageAvatar}
                                    />
                                    <Box
                                        key={card.id}
                                        sx={{
                                            width: 320,
                                            backgroundColor: "white",
                                            borderRadius: "8px",
                                            textAlign: "center",
                                            height: 350,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderColor: "green",
                                        }}
                                    >

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: "15px",
                                                fontWeight: 700,
                                                lineHeight: "20px",
                                                mt: 14,
                                                paddingLeft: 1,
                                                paddingRight: 1,
                                            }}
                                        >
                                            {card.text}
                                        </Typography>
                                        <Box
                                            sx={{
                                                width: "100%",
                                                height: "100px",
                                                mt: 8,
                                                backgroundColor: "#0047AB",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "0px 0px 7px 7px",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontSize: "17px",
                                                    fontWeight: 800,
                                                    lineHeight: "20px",
                                                    color: "white",
                                                }}
                                            >
                                                {card.name}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontSize: "15px",
                                                    fontWeight: 700,
                                                    lineHeight: "20px",
                                                    color: "white",
                                                }}
                                            >
                                                Concluinte do curso de ({card.formation})
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Carousel>
                        <Box
                            sx={{
                                marginTop: "-15px",
                                display: "flex",
                                justifyContent: "center",
                                gap: 2,
                                paddingLeft: 70
                            }}
                        >
                            <Button
                                onClick={() => carouselRef.current?.prev()}
                                sx={{
                                    backgroundColor: "white",
                                    minWidth: "auto",
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    ":hover": {
                                        backgroundColor: "gray"
                                    }
                                }}
                            >
                                ‹
                            </Button>
                            <Button
                                onClick={() => carouselRef.current?.next()}
                                sx={{
                                    backgroundColor: "white",
                                    minWidth: "auto",
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    ":hover": {
                                        backgroundColor: "gray"
                                    }
                                }}
                            >
                                ›
                            </Button>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    );
};

export default Testimonials;

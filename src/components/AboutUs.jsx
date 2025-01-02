import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Image from "../images/About.jpeg";

export default function AboutUs() {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };
    return (
        <Box
            id="aboutUsSection"
            sx={{ padding: { xs: 3, sm: 4, md: 5 }, justifyContent: "center" }}
        >
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={4} paddingLeft={{ xs: 0, md: 10 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <img
                                style={{
                                    width: "100%",
                                    borderRadius: 10,
                                    objectFit: "cover",
                                }}
                                src={Image}
                                alt="Sobre"
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div custom={0} variants={textVariants}>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: "darkblue",
                                    fontSize: { xs: "24px", sm: "28px", md: "32px" },
                                    fontWeight: 800,
                                    marginBottom: 2,
                                }}
                            >
                                Sobre a FullEducation
                            </Typography>
                        </motion.div>

                        <motion.div custom={1} variants={textVariants}>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "darkslateblue",
                                    fontSize: { xs: "18px", sm: "20px", md: "22px" },
                                    fontWeight: 550,
                                    marginBottom: 0.5,
                                }}
                            >
                                * Excelência e inovação
                            </Typography>
                        </motion.div>

                        <motion.div custom={2} variants={textVariants}>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#474954",
                                    fontSize: { xs: "14px", sm: "16px", md: "17px" },
                                    fontWeight: 300,
                                    lineHeight: "20px",
                                    marginBottom: 3,
                                }}
                            >
                                Inovamos proporcionando experiências que vão além da sala de
                                aula, com programas de carreira, vagas de emprego, benefícios
                                exclusivos, eventos e muitas oportunidades pra que cada um possa
                                brilhar.
                            </Typography>
                        </motion.div>

                        <motion.div custom={3} variants={textVariants}>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "darkslateblue",
                                    fontSize: { xs: "18px", sm: "20px", md: "22px" },
                                    fontWeight: 550,
                                    marginBottom: 0.5,
                                }}
                            >
                                * Compromisso social
                            </Typography>
                        </motion.div>

                        <motion.div custom={4} variants={textVariants}>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#474954",
                                    fontSize: { xs: "14px", sm: "16px", md: "17px" },
                                    fontWeight: 300,
                                    lineHeight: "20px",
                                    marginBottom: 3,
                                }}
                            >
                                Nosso compromisso é oferecer uma educação acessível e de
                                qualidade que gera um impacto positivo na construção de uma
                                sociedade mais justa.
                            </Typography>
                        </motion.div>

                        <motion.div custom={5} variants={textVariants}>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "darkslateblue",
                                    fontSize: { xs: "18px", sm: "20px", md: "22px" },
                                    fontWeight: 550,
                                    marginBottom: 0.5,
                                }}
                            >
                                * Infraestrutura de ponta
                            </Typography>
                        </motion.div>

                        <motion.div custom={6} variants={textVariants}>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#474954",
                                    fontSize: { xs: "14px", sm: "16px", md: "17px" },
                                    fontWeight: 300,
                                    lineHeight: "20px",
                                    marginBottom: 3,
                                }}
                            >
                                Oferecemos ambientes modernos e confortáveis, com laboratórios,
                                bibliotecas, auditório e equipamentos iguais ao mercado de
                                trabalho.
                            </Typography>
                        </motion.div>
                    </motion.div>
                </Grid>
            </Grid>
        </Box>
    );
}

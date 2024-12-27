

import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import Image from "../images/About.jpeg"

export default function AboutUs() {
    return (
        <Box className="home-section17" sx={{ padding: 5, justifyContent: "center" }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={4} paddingLeft={10}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8} >
                            <img style={{ width: "125%", borderRadius: 10 }} src={Image} alt="" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{ color: "black", fontSize: "32px", fontWeight: 800, marginBottom: 2 }}
                        >
                            Sobre a FullEducation
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: "black", fontSize: "22px", fontWeight: 550, marginBottom: 0.5 }}
                        >
                            * Excelência e inovação
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#474954", fontSize: "17px", fontWeight: 300, lineHeight: "20px", marginBottom: 3 }}
                        >
                            Inovamos proporcionando experiências que vão além da sala de aula, com programas de carreira, vagas de emprego, benefícios exclusivos, eventos e muitas oportunidades pra que cada um possa brilhar.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: "black", fontSize: "22px", fontWeight: 550, marginBottom: 0.5 }}
                        >
                            * Compromisso social
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#474954", fontSize: "17px", fontWeight: 300, lineHeight: "20px", marginBottom: 3 }}
                        >
                            Nosso compromisso é oferecer uma educação acessível e de qualidade que gera um impacto positivo na construção de uma sociedade mais justa.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: "black", fontSize: "22px", fontWeight: 550, marginBottom: 0.5 }}
                        >
                            * Infraestrutura de ponta
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#474954", fontSize: "17px", fontWeight: 300, lineHeight: "20px", marginBottom: 3 }}
                        >
                            Oferecemos ambientes modernos e confortáveis, com laboratórios, bibliotecas, auditório e equipamentos iguais ao mercado de trabalho.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

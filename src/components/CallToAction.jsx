import { Box, Button, Typography, Card, CardContent, Grid } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SchoolIcon from '@mui/icons-material/School';

export default function CallToAction() {
  const cards = [
    { title: "+500mil", description: "Estudantes matriculados em todo o Brasil", icon: <WorkspacePremiumIcon sx={{ fontSize: 40 }} /> },
    { title: "70%", description: "De estudantes empregados", icon: <RocketLaunchIcon sx={{ fontSize: 40 }} /> },
    { title: "+35", description: "Cursos avaliados com nota no MEC", icon: <StarBorderIcon sx={{ fontSize: 40 }} /> },
    { title: "+500", description: "Empresas parceiras com vagas de emprego", icon: <SchoolIcon sx={{ fontSize: 40 }} /> },
  ];

  return (
    <Box sx={{ padding: 5, backgroundColor: "#0B53B8", justifyContent: "center" }}>
      <Grid container spacing={4} alignItems="center" justifyContent= "center">
        <Grid item xs={12} md={4}>
          <Box>
            <Typography
              variant="h4"
              sx={{ color: "white", fontSize: "38px", fontWeight: 500, lineHeight: "38px", marginBottom: 2 }}
            >
              Você já sai com todo o <br /> preparo para o mercado
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", fontSize: "20px", fontWeight: 300, lineHeight: "24px", marginBottom: 3 }}
            >
              Aqui você tem programas de estágios e orientações <br /> para conquistar sua vaga.
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

        <Grid item xs={12} md={4} paddingLeft={10}>
          <Grid container spacing={2}>
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{height: "100%", paddingLeft: 2, textAlign: "center", backgroundColor: "#154BC8", border: 2, borderRadius: 4, color: "white" }}>
                  <CardContent>
                    <Typography color="white" sx={{ textAlign: "left" }}>{card.icon}</Typography>
                    <Typography variant="h3" color="#C2ECFF" sx={{ fontWeight: 400, textAlign: "left" }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="white" sx={{textAlign: "left"}}>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

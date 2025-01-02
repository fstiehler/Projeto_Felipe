import React, { useState } from "react";
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Cards from "./components/Cards-Curso/Cards";
import AboutUs from "./components/AboutUs";
import { Box, Modal, Typography, Button } from "@mui/material";
import Testimonials from "./components/Testimonials/Testimonials";
import Maps from "./components/Maps";
import FloatButtonService from "./components/FloatButtonService";

function App() {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "rgba(131, 12, 12, 0.9)",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
            Atenção!
          </Typography>
          <Typography id="modal-description" variant="body1" gutterBottom>
            Os dados deste site são fictícios!
          </Typography>
          <Button variant="contained" color="error" onClick={handleClose}>
            Entendido
          </Button>
        </Box>
      </Modal>
      <Box sx={{ width: "100%" }}>
        <Hero />
        <Cards />
        <CallToAction />
        <AboutUs />
        <Testimonials />
        <Maps />
        <FloatButtonService />
        <Footer />
      </Box>
    </>
  );
}

export default App;

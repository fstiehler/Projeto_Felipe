import "./Carousel.css";
import { Carousel } from 'antd';

import Banner1 from "../images/carousel/banner01.webp";
import Banner2 from "../images/carousel/banner02.webp";
import Banner3 from "../images/carousel/banner03.webp";
import Banner4 from "../images/carousel/banner04.webp";
import { Box } from "@mui/material";

const Carrousel = () => {
  return (
    <Box className="container">
      <Carousel
        autoplay
        dots={true}
        centerMode={false}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={true}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        <Box className="carrousel-item">
          <a href="/src/components/Filter/Filter.tsx">
            <img className="image" src={Banner1} alt="banner1" />
          </a>
          <img className="image-mobile" src={Banner1} alt="banner-mobile-1" />
        </Box>

        <Box className="carrousel-item">
          <a href="/src/components/Filter/Filter.tsx">
            <img className="image" src={Banner2} alt="banner2" />
          </a>
          <img className="image-mobile" src={Banner2} alt="banner-mobile-2" />
        </Box>

        <Box className="carrousel-item">
          <a href="/src/components/Filter/Filter.tsx">
            <img className="image" src={Banner3} alt="banner3" />
          </a>
          <img className="image-mobile" src={Banner3} alt="banner-mobile-3" />
        </Box>

        <Box className="carrousel-item">
          <a href="/src/components/Filter/Filter.tsx">
            <img className="image" src={Banner4} alt="banner4" />
          </a>
          <img className="image-mobile" src={Banner4} alt="banner-mobile-4" />
        </Box>
      </Carousel>
    </Box>
  );
};

export default Carrousel;

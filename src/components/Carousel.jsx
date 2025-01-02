import "./Carousel.css";
import { Carousel } from "antd";
import { Box, useMediaQuery } from "@mui/material";

import Banner1 from "../images/carousel/banner01.webp";
import Banner2 from "../images/carousel/banner02.webp";
import Banner3 from "../images/carousel/banner03.webp";
import Banner4 from "../images/carousel/banner04.webp";
import BannerMobile5 from "../images/carousel/bannerMobile5.jpeg";
import BannerMobile2 from "../images/carousel/bannerMobile2.jpeg";
import BannerMobile3 from "../images/carousel/bannerMobile3.jpeg";
import BannerMobile4 from "../images/carousel/bannerMobile4.jpeg";
import { Link } from "react-scroll";

const Carrousel = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const bannersDesktop = [Banner1, Banner2, Banner3, Banner4];
  const bannersMobile = [BannerMobile5, BannerMobile2, BannerMobile3, BannerMobile4];

  const banners = isMobile ? bannersMobile : bannersDesktop;

  return (
    <Box className="container">
      <Carousel
        autoplay
        dots={true}
        centerMode={false}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={true}
      >
        {banners.map((banner, index) => (
          <Box className="carrousel-item" key={index}>
            <Link to="presentation" smooth={true} duration={500}>
              <img className="image" src={banner} alt={`banner-${index + 1}`} />
            </Link>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Carrousel;

import "./Carousel.css";
import { Carousel } from 'antd';

import Testee01 from "../images/carousel/testee01.webp";
import Testee02 from "../images/carousel/testee02.webp";
import Testee03 from "../images/carousel/testee03.webp";
import Testee04 from "../images/carousel/testee04.webp";

const Carrousel = () => {
  return (
    <div className="container">
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
        <div className="carrousel-item">
          <a href="/src/components/Filter/Filter.tsx">
            <img className="image" src={Testee01} alt="banner1" />
          </a>
          <img className="image-mobile" src={Testee01} alt="banner-mobile-1" />
        </div>

        <div className="carrousel-item">
          <a href="/src/components/Filter/Filter.tsx">
            <img className="image" src={Testee02} alt="banner2" />
          </a>
          <img className="image-mobile" src={Testee02} alt="banner-mobile-2" />
        </div>

        <div className="carrousel-item">
          <a href="/src/components/Filter/Filter.tsx">
            <img className="image" src={Testee03} alt="banner3" />
          </a>
          <img className="image-mobile" src={Testee03} alt="banner-mobile-3" />
        </div>

        <div className="carrousel-item">
          <a href="/src/components/Filter/Filter.tsx">
            <img className="image" src={Testee04} alt="banner4" />
          </a>
          <img className="image-mobile" src={Testee04} alt="banner-mobile-4" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carrousel;

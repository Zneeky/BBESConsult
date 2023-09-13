import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, Typography } from "@mui/material";
import { Services } from "../helper-objects";

const DummyCarousel = () => {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500
      };
      return (
        <div>
          <h2>FocusOnSelect</h2>
          <div>Click on any slide to select and make it current slide</div>
          <Slider {...settings}>
            <div>
              <h3>123132</h3>
            </div>
            <div>
              <h3>21231231</h3>
            </div>
            <div>
              <h3>332131</h3>
            </div>
            <div>
              <h3>4321312</h3>
            </div>
            <div>
              <h3>5312321</h3>
            </div>
            <div>
              <h3>6321312</h3>
            </div>
          </Slider>
        </div>
      );
  
};

export default DummyCarousel;

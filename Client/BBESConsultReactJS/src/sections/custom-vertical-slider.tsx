import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, Typography } from "@mui/material";
import { Services } from "../helper-objects";

const CustomVerticalSlider = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    class: "custom-slider",
  };
  return (
    <Box width="92%" sx={{ margin: { lg: "0 auto" } }}>
      <Slider {...settings}>
        {Services.map((service) => (
          <div>
            <Box
              key={service.index}
              sx={{
                height: "400px",
                m: "1rem",
                boxShadow: 3,
                borderRadius: "25px",
              }}
            >
              <Box
                component="img"
                src={service.image}
                sx={{ objectFit: "cover", height: "400px" }}
              />
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomVerticalSlider;

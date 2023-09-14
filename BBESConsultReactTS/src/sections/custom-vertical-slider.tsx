import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { Services } from "../helper-objects";

const CustomVerticalSlider = () => {
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMedium = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  let slidesToShowValue = 1; // Default value

  if (isXSmall) {
    slidesToShowValue = 1; // Adjust value for extra small screens
  } else if (isSmall) {
    slidesToShowValue = 2; // Adjust value for small screens
  } else if (isMedium){
    slidesToShowValue = 3;
  }

  const settings = {
    infinite: true,
    slidesToShow: slidesToShowValue,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    swipeToSlide: true,
    class: "custom-slider",
  };
  return (
    <Box width="92%" sx={{ margin: { xs: "0 auto 1.5rem", lg:"0 auto"} }}>
      <Slider {...settings}>
        {Services.map((service) => (
          <div key={service.index}>
            <Box
              sx={{
                height: "200px",
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

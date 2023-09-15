import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import useServices from "../hooks/services";


const CustomVerticalSlider = () => {
  const services = useServices();
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
        {services.map((service) => (
          <div key={service.index}>
            <Box
            key={service.index}
            sx={{
              position: 'relative',  // Add this
              height: "250px",
              m: "1rem",
              boxShadow: 3,
              borderRadius: "25px",
              overflow: 'hidden'
            }}
          >
            <Box
              component="img"
              src={service.image}
              sx={{
                position: 'absolute',  // Make the image take the full space of its parent
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: "cover"
              }}
            />
            <Box
                sx={{
                  position: "absolute", // Make the image take the full space of its parent
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  backgroundColor: "rgba(0, 0, 0, 0.5)"
                  
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%", // Center vertically
                  left: "50%", // Center horizontally
                  transform: "translate(-50%, -50%)", // Ensure it's centered
                  color: "white", // Assuming you want white text
                  padding: "0.5rem",
                  borderRadius: "5px",
                }}
              >
                {service.title}
              </Typography>
          </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomVerticalSlider;

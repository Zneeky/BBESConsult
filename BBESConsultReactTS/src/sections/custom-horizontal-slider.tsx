import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import useServices from "../hooks/services";
import { useTranslation } from "react-i18next";


const CustomHorizontalSlider = () => {
  const services= useServices();

  const { i18n } = useTranslation();
  const isTurkish = i18n.language === 'tr-TR';

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    class: "custom-slider",
  };
  return (
    <Box width="90%" sx={{ margin: { lg: "0 auto" } }}  >
      <Slider {...settings}>
        {services.map((service) => (
          <div key={service.index} >
            <Box
              key={service.index}
              sx={{
                position: "relative", // Add this
                height: "400px",
                m: "1rem",
                boxShadow: 3,
                borderRadius: "25px",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={service.image}
                sx={{
                  position: "absolute", // Make the image take the full space of its parent
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  
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
                variant="h1"
                sx={{
                  position: "absolute",
                  top: "50%", // Center vertically
                  left: "50%", // Center horizontally
                  transform: "translate(-50%, -50%)", // Ensure it's centered
                  color: "white", // Assuming you want white text
                  padding: "0.5rem",
                  borderRadius: "5px",
                  fontSize:{md:"3.5vw",lg:"2.2vw"},
                  fontFamily: isTurkish ? 'Inter, sans-serif' : 'Bebas Neue Regular, sans-serif'
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

export default CustomHorizontalSlider;

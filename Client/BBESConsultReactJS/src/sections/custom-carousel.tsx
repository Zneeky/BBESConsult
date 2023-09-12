import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const CustomCarousel = () => {
    const settings = {
      dots: true,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      adaptiveHeight: true,
    };
  
    return (
      <Box width="100%" maxWidth="500px" margin="0 auto">
        <h2>FocusOnSelect</h2>
        <p>Click on any slide to select and make it current slide</p>
        <Slider {...settings}>
          {[...Array(6)].map((_, index) => (
            <Box key={index} width="300px" padding="1rem" bgcolor="background.paper">
              <h3>Sample Content {index + 1}</h3>
            </Box>
          ))}
        </Slider>
      </Box>
    );
  };
  
  export default CustomCarousel;

import { Box, Typography, ButtonBase, useTheme } from "@mui/material";
//import Carousel from 'react-responsive-carousel';
import React, { ComponentProps } from "react";
import { Carousel, Thumbs } from "react-responsive-carousel";
import HeroBar from "../components/top-navbar-hero";

export type CarouselProps = Partial<ComponentProps<typeof Carousel>>;
export type ThumbsProps = Partial<ComponentProps<typeof Thumbs>>;

const HeroSection = () => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh", // adjust as needed
        backgroundImage: 'url("./images/BBESBuldigNightSkyBWEn.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        padding: "0",
      }}
    >
      <HeroBar />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "block" }}>
          <Typography color="white" variant="h1" gutterBottom>
            Accounting <br /> and <br /> Legal Services
          </Typography>
          <Typography color="white" variant="h6" gutterBottom>
            We provide comprehensive professional financial, accounting,
            administrative, and legal solutions to both corporate and individual
            clients.
          </Typography>
        </Box>

        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          showIndicators={true}
          useKeyboardArrows
        >
          <Box>
            <img src="path-to-your-image1.jpg" alt="Service 1" />
            <Typography variant="h5">Service Title 1</Typography>
            <Typography variant="body1">Service Description 1</Typography>
          </Box>
          <Box>
            <img src="path-to-your-image2.jpg" alt="Service 2" />
            <Typography variant="h5">Service Title 2</Typography>
            <Typography variant="body1">Service Description 2</Typography>
          </Box>
          {/* Add more slides as needed */}
        </Carousel>
      </Box>
    </Box>
  );
};

export default HeroSection;

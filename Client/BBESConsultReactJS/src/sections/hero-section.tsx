import { Box, Typography, ButtonBase, useTheme } from "@mui/material";
//import Carousel from 'react-responsive-carousel';
import React, { ComponentProps } from "react";
import { Carousel } from "react-responsive-carousel";
import HeroBar from "../components/top-navbar-hero";
import CustomCarousel from "./custom-carousel";

export type CarouselProps = Partial<ComponentProps<typeof Carousel>>;

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
      <Box sx={{ display: {xs:"inline-block",m:"flex"} , m:{xs:"2rem auto",md:"10rem 0px"},padding: {md:"0px 0px 0px 5rem"}, }}>
        <Box sx={{ display: "block", width:{xs:"100%" , md:"40%"} }}>
          <Typography color="yellow" variant="h5">Finances and Laws</Typography>
          <Typography color="yellow" variant="h1" gutterBottom sx={{fontSize:{xs:"3.5rem", md:"4.5rem", lg:"7.5rem"}}}>
          Accounting <br/> AND <br/> Legal Expertise
          </Typography>
          <Box sx={{width:"35rem"}}>
          <Typography color="#fcf09f" variant="h6" gutterBottom>
            We provide comprehensive professional financial, accounting,
            administrative, and legal solutions to both corporate and individual
            clients.
          </Typography>
          </Box>
        </Box>
        <Box sx={{width:{xs:"100%" ,sm:"90%", md:"60%"}}}><CustomCarousel/></Box>
      </Box>
    </Box>
  );
};

export default HeroSection;

import { Box } from "@mui/material";
//import TopNavBar from "../components/top-navbar";
import HeroSection from "../sections/home/hero-section";
import TrustedBy from "../sections/home/truested-section";

const HomePage = () => {
  return (
    <>
      <Box width="100%">
        <HeroSection />
        <TrustedBy />
      </Box>
    </>
  );
};

export default HomePage;

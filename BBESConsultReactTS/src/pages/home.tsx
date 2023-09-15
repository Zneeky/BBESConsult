import { Box } from "@mui/material";
//import TopNavBar from "../components/top-navbar";
import HeroSection from "../sections/hero-section";
import TrustedBy from "../sections/truested-section";

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

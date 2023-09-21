import { Box, Divider } from "@mui/material";
import HeroSection from "../sections/home/hero-section";
import TrustedBy from "../sections/home/truested-section";
import ServicesSection from "../sections/home/services-section";
import ReviewsSection from "../sections/home/reviews-section";
import ContactSection from "../sections/home/contact-section";
import Footer from "../components/footer";
import MeetTheTeamSection from "../sections/home/meet-team";

const HomePage = () => {
  return (
    <>
      <Box width="100%">
        <HeroSection />
        {/* <TrustedBy /> */}
        <MeetTheTeamSection />
        <ServicesSection />
        
        <ReviewsSection />
        <Divider sx={{color:"black"}}/>
        <ContactSection/>
        <Footer > <div>Prop things</div></Footer>
      </Box>
    </>
  );
};

export default HomePage;

import { Box, Divider } from "@mui/material";
import HeroSection from "../sections/home/hero-section";
// import TrustedBy from "../sections/home/truested-section";
import ServicesSection from "../sections/home/services-section";
import ReviewsSection from "../sections/home/reviews-section";
import ContactSection from "../sections/home/contact-section";
import Footer from "../components/footer";
import MeetTheTeamSection from "../sections/home/meet-team";
import React, { useEffect, useState, useRef } from "react";
import TopNavBar from "../components/top-navbar";

const HomePage = () => {
  const servicesSectionRef = useRef(null); // Create a ref for ServicesSection
  const [showNavBar, setShowNavBar] = useState(false);
  const meetTheTeamSectionRef = useRef<HTMLDivElement | null>(null); // Explicitly specify the type of the ref object
  


  useEffect(() => {
    const handleScroll = () => {
      if (meetTheTeamSectionRef.current) {
        const rect = meetTheTeamSectionRef.current.getBoundingClientRect();
        if (rect.top <= 0) {
          setShowNavBar(true);
        } else {
          setShowNavBar(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Box width="100%">
        <HeroSection servicesSectionRef={servicesSectionRef} />
        {showNavBar && <TopNavBar servicesSectionRef={servicesSectionRef}/>}
        <MeetTheTeamSection ref={meetTheTeamSectionRef}/>
        <Divider sx={{ color: "black" }} />
        <ServicesSection ref={servicesSectionRef} />
        <Divider sx={{ color: "black", mt: "3rem" }} />
        <ReviewsSection />
        <Divider sx={{ color: "black" }} />
        <ContactSection />
        <Footer>
          {" "}
          <div>Prop things</div>
        </Footer>
      </Box>
    </>
  );
};

export default HomePage;

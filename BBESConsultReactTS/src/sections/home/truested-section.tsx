import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoSlider from "../../components/logo-slider";

const TrustedBy = () => {
  const companies = [
    { name: "Zeko", logo: "/images/brands-logos/zeko_logo.png" },
    { name: "Company2", logo: "/path/to/logo2.png" },
    { name: "Company3", logo: "/images/brands-logos/LogoX.png" },
    { name: "Company4", logo: "/images/brands-logos/zeko_logo.png" },
    { name: "Company5", logo: "/images/brands-logos/zeko_logo.png" },
    { name: "Company6", logo: "/images/brands-logos/zeko_logo.png" },
    // ... add more companies
  ];

  const images=["/images/brands-logos/zeko_logo.png","/images/brands-logos/LogoX.png","/images/brands-logos/zeko_logo.png","/images/brands-logos/zeko_logo.png","/images/brands-logos/zeko_logo.png","/images/brands-logos/zeko_logo.png"]

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        top: "-40px", // This will make the TrustedBy section overlap the section above it by 50px
        backgroundColor: "#fff", // Assuming the background color of the TrustedBy section is white
        borderTopLeftRadius: "50px", // Rounded top left corner
        borderTopRightRadius: "50px", // Rounded top right corner
      }}
    >
      <Typography
        variant="h3"
        sx={{ mb: "3rem", fontSize: { xs: "8vw", sm: "5vw", lg: "3vw" } }}
      >
        Trusted by
      </Typography>
      <Box
        sx={{ maxWidth: { xs: "87%", sm: "91%", md: "94%", lg: "95%" } }}
        mt="1rem"
      >
        <LogoSlider />
      </Box>
    </Box>
  );
};

export default TrustedBy;

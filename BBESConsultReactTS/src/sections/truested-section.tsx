import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";

const TrustedBy = () => {
  const companies = [
    { name: "Zeko", logo: "/images/brands-logos/zeko_logo.png", index: 1 },
    { name: "Company2", logo: "/path/to/logo2.png", index: 2 },
    // ... add more companies
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 300,
    cssEase: "linear",
  };

  return (
    // <Box
    //   sx={{
    //     width: "100%",
    //     maxWidth: "1920px",
    //     height: "300px",
    //     margin: "0 auto",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     position: "relative",
    //     top: "-40px", // This will make the TrustedBy section overlap the section above it by 50px
    //     backgroundColor: "#fff", // Assuming the background color of the TrustedBy section is white
    //     borderTopLeftRadius: "50px", // Rounded top left corner
    //     borderTopRightRadius: "50px", // Rounded top right corner
    //   }}
    // >
    //   <Typography
    //     variant="h3"
    //     sx={{
    //       marginBottom: "0rem",
    //       fontSize: { xs: "2rem", md: "2.5rem", lg: "3.5rem" },
    //     }}
    //   >
    //     Trusted by
    //   </Typography>
    //   <Box width="100%">
    //     <Slider {...settings}>
    //       {companies.map((company) => (
    //         <div key={company.index}>
    //           <Box
    //             component="img"
    //             src={company.logo}
    //             alt={company.name}
    //             sx={{ padding: "1rem", width: "100%", objectFit: "contain" }}
    //           ></Box>
    //         </div>
    //       ))}
    //     </Slider>
    //   </Box>
    // </Box>
    <div>
      <h2>Auto Play</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default TrustedBy;

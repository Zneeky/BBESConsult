import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HeroBar from "../components/top-navbar-hero";
import CustomHorizontalSlider from "./custom-horizontal-slider";
import CustomVerticalSlider from "./custom-vertical-slider";


//#fcf09f -light yellow
//

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      sx={{
        margin:"0 auto",
        maxWidth:"1920px",
        maxHeight:"963px",
        width: "100vw",
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
      <Box
        sx={{
          display: { xs: "inline-block", lg: "flex" },
          m: { xs: "2rem  0px", lg: "9rem 0px" },
          padding: { xs: "0px 4rem", md: "0px 0px 0px 5rem" },
        }}
      >
        <Box sx={{ display: "block", width: { xs: "100%", lg: "40%" } }}>
          <Typography
            color="yellow"
            variant="h5"
            sx={{ visibility: { xs: "hidden", lg: "visible" } }}
          >
            Finances and Laws
          </Typography>
          <Typography
            color="yellow"
            variant="h1"
            sx={{
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "4.5rem",
                lg: "5.5rem",
                xl: "7.5rem",
              },
            }}
          >
            Accounting {!isMobile &&(<br/>)} AND {!isMobile &&(<br/>)} Legal Expertise
          </Typography>
          {!isMobile && (
            <Box sx={{ width: "80%" }}>
              <Typography color="#fcf09f" variant="h6" gutterBottom>
                We offer a holistic suite of financial, accounting,
                administrative, and legal services tailored to meet the needs of
                both corporate entities and individual clients.
              </Typography>
            </Box>
          )}
          <Box display="flex" gap={2} m="2rem 0">
            <Button sx={{border:"3px solid yellow", borderRadius:"10px", backgroundColor:"tr"}}>
              <Typography color="yellow">Contact Us</Typography>
            </Button>
            <Button sx={{border:"0px", borderRadius:"10px", backgroundColor:"rgba(255, 255, 255, 0.4)"}}>
              <Typography color="white">Why Us?</Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            //check OUT TO DO:
            maxWidth: { xs: "500px", md: "800", xl:"900" },
            width: { xs: "100%", lg: "60%" },
            m: { lg: "5.7rem 0px " },
          }}
        >
            {isMobile ? (<CustomVerticalSlider/>):(<CustomHorizontalSlider />)}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;

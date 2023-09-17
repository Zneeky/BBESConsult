import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HeroBar from "../../components/top-navbar-hero";
import CustomHorizontalSlider from "../../components/custom-horizontal-slider";
import CustomVerticalSlider from "../../components/custom-vertical-slider";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import ReactFlipCard from "reactjs-flip-card";

//#FDB810

const HeroSection = () => {
  const theme = useTheme();

  const [view, setView] = useState("initial"); // "initial", "second"
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const rotation = view === "initial" ? "0deg" : "0deg";

  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = (e: any) => {
      // Check if the event's target is within the HeroSection
      if (heroSectionRef.current && heroSectionRef.current.contains(e.target)) {
        if (window.scrollY === 0 && e.deltaY < 0 && view === "second") {
          setView("initial");
        } else if (window.scrollY === 0 && e.deltaY > 0 && view === "initial") {
          setView("second");
        }
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [view]);

  return (
    <Box
      ref={heroSectionRef}
      sx={{
        margin: "0 auto",
        maxWidth: "1920px",
        maxHeight: "1080px",
        backgroundImage: 'url("./images/BBESBuldigNightSkyBWEn.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        padding: "0",
      }}
    >
      <HeroBar />
      {/*FRONT */}
      {/* Container for the Flippable Content */}
      <Box
        sx={{
          perspective: "1000px", // This gives a 3D effect to the flip
        }}
      >
        {/* Flippable Content */}
        <Box
          sx={{
            position: "relative", // Relative container
            transformStyle: "preserve-3d",
            transition: "transform 0.7s",
            transform: `rotateX(${view === "initial" ? "0deg" : "180deg"})`, // Rotate based on the view state
          }}
        >
          <Box
            sx={{
              width: "100%", // Ensure it takes the full width of the container
               // Ensure it takes the full height of the container
              display: { xs: "inline-block", lg: "flex" },
              m: { xs: "2rem  0px", lg: "7rem 0px" },
              padding: { xs: "0px 1rem", md: "0px 0px 0px 5rem" },
              backfaceVisibility: "hidden",
            }}
          >
            <Box sx={{ display: "block", width: { xs: "100%", lg: "40%" } }}>
              <Typography
                color="yellow"
                variant="h5"
                sx={{ visibility: { xs: "hidden", lg: "visible" } }}
              >
                {t("heroSection.financesAndLaws")}
              </Typography>
              <Typography
                color="yellow"
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "3rem",
                    sm: "3.5rem",
                    md: "4.5rem",
                    lg: "5.5rem",
                    xl: "7.5rem",
                  },
                  m: { xs: "0rem 3rem", md: "0rem 0px" },
                }}
              >
                {t("heroSection.Accounting")} {!isTablet && <br />}{" "}
                {t("heroSection.AND")} {!isTablet && <br />}{" "}
                {t("heroSection.LegalExpertise")}
              </Typography>
              {!isTablet && (
                <Box sx={{ width: "80%" }}>
                  <Typography color="#fcf09f" variant="h6" gutterBottom>
                    {t("heroSection.description")}
                  </Typography>
                </Box>
              )}
              <Box
                display="flex"
                gap={2}
                sx={{ m: { xs: "2rem 3rem", md: "1rem 0px", lg: "0" } }}
              >
                <Button
                  sx={{
                    border: "3px solid yellow",
                    borderRadius: "10px",
                    backgroundColor: "tr",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "0.7rem", sm: "1rem" } }}
                    color="yellow"
                  >
                    {t("common.contactUs")}
                  </Typography>
                </Button>
                <Button
                  sx={{
                    border: "0px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "0.7rem", sm: "1rem" } }}
                    color="white"
                  >
                    {t("common.whyUs")}
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", lg: "60%" },
                m: { md: "9rem 0px 0px", lg: "6.5rem 0px", xl: "8.7rem 0px " },
              }}
            >
              {isMobile ? <CustomVerticalSlider /> : <CustomHorizontalSlider />}
            </Box>
          </Box>
          {/*BACK */}
          <Box
            sx={{
              backfaceVisibility: "hidden", // Hide when flipped
              transform: "rotateX(180deg)", // Start rotated
              position: "absolute", // Absolute positioning
              top: 0,
              left: 0,
              width: "100%", // Ensure it takes the full width of the container
              height: "100%", // Ensure it takes the full height of the container
            }}
          >
            <Typography color="yellow">QKOOO</Typography>
          </Box>
          {/*Flippable content */}
        </Box>
        {/*perspective box */}
      </Box>
    </Box>
  );
};

export default HeroSection;

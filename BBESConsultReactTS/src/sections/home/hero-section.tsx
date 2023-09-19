import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  SvgIcon,
} from "@mui/material";
import HeroBar from "../../components/top-navbar-hero";
import CustomHorizontalSlider from "../../components/custom-horizontal-slider";
import CustomVerticalSlider from "../../components/custom-vertical-slider";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faStar,
  faFileLines,
  faScaleBalanced,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";

const HeroSection = () => {
  const theme = useTheme();

  const [view, setView] = useState("initial"); // "initial", "second"
  const heroSectionRef = useRef<HTMLDivElement | null>(null);

  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  const handleFlipContent = () => {
    if (view === "initial") {
      setView("second");
    } else {
      setView("initial");
    }
  };

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
        // width:"100%",
        maxWidth: "1920px",
        maxHeight: "1080px",
        height: "1160px",
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
            <Box
              sx={{
                m: { xs: "3rem  0rem", lg: "0rem 6rem" },
                padding: { xs: "0px 1rem", md: "0px 0px 0px 0rem" },
                background: "rgba(0, 0, 0, 0.35)",
                backdropFilter: "blur(16.7px)",
                WebkitBackdropFilter: "blur(15.7px)",
                maxHeight: {xs:"740px",md:"690px"},
                height: "100%",
              }}
            >
              <Box display="flex" flexDirection="column" width="100%">
                <Box display="flex">
                  <Typography
                    variant="h1"
                    color="white"
                    sx={{
                      m: "1rem auto",
                      fontSize: {
                        xs: "7vw",
                        sm: "7vw",
                        md: "6vw",
                        lg: "4.5vw",
                        xl: "4vw",
                      },
                    }}
                  >
                    BBES Consult Accounting and Law Firm
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography
                    variant="h5"
                    color="white"
                    sx={{
                      m: "1rem auto",
                      fontSize: {
                        xs: "2.6vw",
                        sm: "2.4vw",
                        md: "2vw",
                        lg: "1.5vw",
                        xl: "1.3vw",
                      },
                    }}
                  >
                    Integrity, Quality and Loyalty! We are with you on the path
                    to success!
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: { xs: "inline-block", md: "flex" },
                    maxHeight: "300px",
                  }}
                  justifyContent="space-evenly"
                  mt="2rem"
                >
                  {/*ACHIEVEMNT */}
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box display="flex" alignItems="center">
                      <SvgIcon fontSize="large">
                        <FontAwesomeIcon icon={faAward} color="yellow" />
                      </SvgIcon>
                      <Typography
                        variant="h3"
                        sx={{ fontSize: { xs: "5vw", md: "2vw", lg: "2vw" } }}
                        color="yellow"
                      >
                        <CountUp end={25} duration={3} key={view} />+
                      </Typography>
                    </Box>
                    <Typography variant="h5" color="yellow">
                      YEARS OF EXPERIENCE
                    </Typography>
                  </Box>
                  {/*ACHIEVEMNT */}
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ mt: { xs: "1.5rem", md: "0rem" } }}
                  >
                    <Box display="flex" alignItems="center">
                      <SvgIcon fontSize="large">
                        <FontAwesomeIcon icon={faStar} color="yellow" />
                      </SvgIcon>
                      <Typography
                        variant="h3"
                        sx={{ fontSize: { xs: "5vw", md: "2vw", lg: "2vw" } }}
                        color="yellow"
                      >
                        <CountUp end={350} duration={3} key={view} />+
                      </Typography>
                    </Box>
                    <Typography variant="h5" color="yellow">
                      CLIENTS
                    </Typography>
                  </Box>
                  {/*ACHIEVEMNT */}
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ mt: { xs: "1.5rem", md: "0rem" } }}
                  >
                    <Box display="flex" alignItems="center">
                      <SvgIcon fontSize="large">
                        <FontAwesomeIcon icon={faFileLines} color="yellow" />
                      </SvgIcon>
                      <Typography
                        variant="h3"
                        sx={{ fontSize: { xs: "5vw", md: "2vw", lg: "2vw" } }}
                        color="yellow"
                      >
                        <CountUp end={2500} duration={4} key={view} />+
                      </Typography>
                    </Box>
                    <Typography variant="h5" color="yellow">
                      DOCUMENTS PER MONTH
                    </Typography>
                  </Box>
                  {/*ACHIEVEMNT */}
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ mt: { xs: "1.5rem", md: "0rem" } }}
                  >
                    <Box display="flex" alignItems="center">
                      <SvgIcon fontSize="large">
                        <FontAwesomeIcon
                          icon={faScaleBalanced}
                          color="yellow"
                        />
                      </SvgIcon>
                      <Typography
                        variant="h3"
                        sx={{ fontSize: { xs: "5vw", md: "2vw", lg: "2vw" } }}
                        color="yellow"
                      >
                        <CountUp end={1000} duration={3} key={view} />+
                      </Typography>
                    </Box>
                    <Typography variant="h5" color="yellow">
                      SOLVED CASES
                    </Typography>
                  </Box>
                </Box>
                {/*ABOUT PARAGRAPH*/}
                <Box width="100%">
                  <Box m="5rem auto 2rem">
                    <Typography
                      sx={{
                        p: { xs: "", sm: "", md: "3rem 6rem", lg: "3rem 7rem" },
                        fontSize: {
                          xs: "",
                          sm: "2.4vw",
                          md: "2vw",
                          lg: "1.3rem",
                        },
                      }}
                      color="white"
                    >
                      We are a dedicated accounting and law firm with a team of
                      lawyers, accountants, and financial advisors passionate
                      about supporting business growth in challenging economic
                      times. We cater to a diverse range of clients, from IT
                      companies to retailers and foreign contractors. Our
                      services aim to help clients navigate business challenges
                      and bolster the Bulgarian economy amidst global economic
                      shifts.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/*Flippable content */}
        </Box>
        {/*perspective box */}
        {isTablet && (
          <Box width="100%" display="flex" justifyContent="center" alignItems="center">
          <Button onClick={handleFlipContent}>
            <FontAwesomeIcon size="2x" icon={faRecycle} />
          </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HeroSection;

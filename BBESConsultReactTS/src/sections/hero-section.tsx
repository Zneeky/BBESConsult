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
import { useTranslation } from 'react-i18next';


const HeroSection = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t  } = useTranslation();

  return (
    <Box
      sx={{
        margin: "0 auto",
        maxWidth: "1920px",
        maxHeight: "1080px",
        
         // adjust as needed
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
          m: { xs: "2rem  0px", lg: "7rem 0px" },
          padding: { xs: "0px 1rem", md: "0px 0px 0px 5rem" },
        }}
      >
        <Box sx={{ display: "block", width: { xs: "100%", lg: "40%" } }}>
          <Typography
            color="yellow"
            variant="h5"
            sx={{ visibility: { xs: "hidden", lg: "visible" } }}
          >
             {t('heroSection.financesAndLaws')}
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
              m:{xs:"0rem 3rem",md:"0rem 0px"}
            }}
          >
            {t('heroSection.Accounting')} {!isTablet && <br />} {t('heroSection.AND')} {!isTablet && <br />} {t('heroSection.LegalExpertise')}
          </Typography>
          {!isTablet && (
            <Box sx={{ width: "80%" }}>
              <Typography color="#fcf09f" variant="h6" gutterBottom >
                {t('heroSection.description')}
              </Typography>
            </Box>
          )}
          <Box display="flex"  gap={2} sx={{m:{xs:"2rem 3rem",md:"1rem 0px", lg:"0"}}} >
            <Button
              sx={{
                border: "3px solid yellow",
                borderRadius: "10px",
                backgroundColor: "tr",
              }}
            >
              <Typography sx={{fontSize:{xs:"0.7rem", sm:"1rem"}}} color="yellow">{t('common.contactUs')}</Typography>
            </Button>
            <Button
              sx={{
                border: "0px",
                borderRadius: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
              }}
            >
              <Typography sx={{fontSize:{xs:"0.7rem", sm:"1rem"}}} color="white">{t('common.whyUs')}</Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", lg: "60%" },
            m: { md:"9rem 0px 0px",lg:"6.5rem 0px", xl: "8.7rem 0px " },
          }}
        >
          {isMobile ? <CustomVerticalSlider /> : <CustomHorizontalSlider />}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;

import { Box, Typography } from "@mui/material";
import LogoSlider from "../../components/logo-slider";

const TrustedBy = () => {

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
        top: "-60px", // This will make the TrustedBy section overlap the section above it by 50px
        backgroundColor: "#fff", // Assuming the background color of the TrustedBy section is white
        borderTopLeftRadius: "60px", // Rounded top left corner
        borderTopRightRadius: "60px", // Rounded top right corner
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

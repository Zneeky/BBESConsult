import { Box,Typography } from "@mui/material";
import ReviewsSlider from "../../components/review-slider";

const ReviewsSection = () => {
  return (
    <Box
      width="100%"
      height="100%"
      max-height="600px"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt:"4rem",
        
      }}
    >
      <Typography
        variant="h3"
        sx={{ mb: "3rem", fontSize: { xs: "8vw", sm: "5vw", lg: "3vw" } }}
      >
        Reviews
      </Typography>
      <Box
        sx={{ maxWidth: { xs: "87%", sm: "91%", md: "94%", lg: "95%" } }}
        mt="1rem"
      >
        <ReviewsSlider />
      </Box>
    </Box>
  );
};

export default ReviewsSection;

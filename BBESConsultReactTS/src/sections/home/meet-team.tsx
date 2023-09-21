import { Box,Typography } from "@mui/material";
import TeamMembersSlider from "../../components/team-members";
import Leadership from "../../components/team-members";

const MeetTheTeamSection = () => {
  return (
    <Box
    sx={{
        width: "100%",
        
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
        sx={{  mt:"5rem",mb: "3rem", fontSize: { xs: "8vw", sm: "5vw", lg: "3vw" } }}
      >
        Our leadership team
      </Typography>
      <Box
        sx={{ maxWidth: { xs: "87%", sm: "91%", md: "80%", lg: "55%" } }}
        mt="1rem"
      >
        <Leadership />
      </Box>
    </Box>
  );
};

export default MeetTheTeamSection;

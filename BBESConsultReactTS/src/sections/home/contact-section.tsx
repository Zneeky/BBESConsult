import { Box,Typography } from "@mui/material";
import ContactForm from "../../components/contact-form";

const ContactSection = () => {
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
        m:"4rem 0",
        
      }}
    >
      <Typography
        variant="h3"
        sx={{ mb: "3rem", fontSize: { xs: "8vw", sm: "5vw", lg: "3vw" } }}
      >
        Contact us
      </Typography>
      <Box
        sx={{ maxWidth: { xs: "87%", sm: "91%", md: "94%", lg: "95%" } }}
        mt="1rem"
      >
        <ContactForm />
      </Box>
    </Box>
  );
};

export default ContactSection;

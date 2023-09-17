import { Box, Typography} from "@mui/material";
import './css/trustedSection.css'

const TrustedBy = () => {
  const companies = [
    { name: "Zeko", logo: "/images/brands-logos/zeko_logo.png" },
    { name: "Company2", logo: "/path/to/logo2.png" },
    // ... add more companies
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1920px",
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
      <Typography  variant="h3" sx={{ mt: "3rem", fontSize:{xs:"5vw", lg:"3vw"} }}>
        Trusted by
      </Typography>
    <div className="slider">
      <div className="slide-track">
        {companies.map((company, index) => (
          <div key={index} className="slide">
            <img src={company.logo} alt={company.name} />
          </div>
        ))}
        {/* Duplicate the companies for the infinite loop effect */}
        {companies.map((company, index) => (
          <div key={index + companies.length} className="slide">
            <img src={company.logo} alt={company.name} />
          </div>
        ))}
      </div>
    </div>
    </Box>
  );
};

export default TrustedBy;
import {
    Box,
    Typography,
    Button,
    useMediaQuery,
    useTheme,
    Drawer,
    List,
    ListItem,
    SvgIcon,
  } from "@mui/material";
  import { useState } from "react";
  
  
  const HeroBar = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const buttonNavColor = "white";
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    const navItems = (
      <Box sx={{ display: "flex", gap: 4 }}>
        <Button color="inherit"><Typography variant="button" color={buttonNavColor}>Home</Typography></Button>
        <Button color="inherit"><Typography variant="button" color={buttonNavColor}>About</Typography></Button>
        <Button color="inherit"><Typography variant="button" color={buttonNavColor}>Services</Typography></Button>
        <Button color="inherit"><Typography variant="button" color={buttonNavColor}>Contact</Typography></Button>
      </Box>
    );
  
    return (
      <Box
        sx={{
        // background: "rgba(255, 255, 255, 0.05)",
        // backdropFilter: "blur(4px)",
        // WebkitBackdropFilter: "blur(12.7px)",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 5rem",
          height: {
            xs: "55px", // sm breakpoint
            md: "70px", // md breakpoint
            lg: "92px", // lg breakpoint
          },
          top: "0",
          zIndex: 1000,
        }}
        display="flex"
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src="./images/IconBbes-removebg-preview.png" alt="Logo" width={40} />
          <Typography 
            variant="h2"
            sx={{
              fontSize: {
                xs: "1.8rem", // Adjust font size for sm breakpoint
                md: "2rem", // Adjust font size for md breakpoint
                lg: "3.0rem", // Adjust font size for lg breakpoint
              },
              color:"white",
            }}
            >
              BBES Consult
            </Typography>
        </Box>
  
        {isMobile ? (
          <>
            <Button color="inherit" onClick={handleDrawerOpen}>
              <SvgIcon fontSize="small">
              </SvgIcon>
            </Button>
            <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
              <List sx={{ width: 250 }}>
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Services</ListItem>
                <ListItem>Contact</ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          navItems
        )}
      </Box>
    );
  };
  
  export default HeroBar;
  
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  SvgIcon
} from "@mui/material";
import { useState } from "react";


const TopNavBar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navItems = (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button color="inherit">Home</Button>
      <Button color="inherit">About</Button>
      <Button color="inherit">Services</Button>
      <Button color="inherit">Contact</Button>
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
        background: "rgba(255, 255, 255, 0.26)",
        backdropFilter: "blur(12.7px)",
        WebkitBackdropFilter: "blur(12.7px)",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 2rem",
        height: {
          xs: "55px", // sm breakpoint
          md: "70px", // md breakpoint
          lg: "92px", // lg breakpoint
        },
        position: "sticky",
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
              lg: "2.4rem", // Adjust font size for lg breakpoint
            },
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

export default TopNavBar;

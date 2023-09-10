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
import {ThreeBarsIcon} from "@heroicons/react/outline"

const TopNavBar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        padding: "0 2rem",
        height: "64px",
      }}
      display="flex"
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <img src="/path-to-logo.png" alt="Logo" width={40} />
        <Typography variant="h6">Brand Name</Typography>
      </Box>

      {isMobile ? (
        <>
          <Button color="inherit" onClick={handleDrawerOpen}>
            <SvgIcon fontSize="small">
                <ThreeBarsIcon/>
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

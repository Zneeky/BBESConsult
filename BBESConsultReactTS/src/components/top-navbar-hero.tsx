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
  Menu,
  MenuItem,
  Paper
} from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import Flag from "react-world-flags";
import React, { RefObject } from "react";
import useServices from "../hooks/services";

interface HeroBarProps {
  servicesSectionRef: RefObject<HTMLDivElement>;
}

const HeroBar: React.FC<HeroBarProps> = ({ servicesSectionRef }) => { 
  const [open, setOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const dropdownServiceRef = useRef<HTMLDivElement | null>(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const buttonNavColor = "white";
  const { i18n , t} = useTranslation(); // Use the useTranslation hook
  const services = useServices();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // Change language using i18n
  };

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget); // Set the anchor element when the menu is opened
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Reset the anchor element when the menu is closed
  };

  // Function to get the country code for the flag based on the language
  const getCurrentFlagCode = () => {
    switch (i18n.language) {
      case "en":
        return "GB";
      case "bg":
        return "BG";
      case "tr":
        return "TR";
      default:
        return "GB"; // Default to GB if the language is not matched
    }
  };

    // Function to get the country code for the flag based on the language
    const getCurrentFlagSize = () => {
      switch (i18n.language) {
        case "en":
          return "19";
        case "bg":
          return "24";
        case "tr":
          return "25";
        default:
          return "20"; // Default to GB if the language is not matched
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownServiceRef.current && !dropdownServiceRef.current.contains(event.target as Node)) {
        handleServicesMenuClose();
      }
    };

    const handleServicesMenuOpen = () => {
      setOpenServices(true);
    };
    
    const handleServicesMenuClose = () => {
      setOpenServices(false);
    };
  
    
    const handleServicesButtonClick = () => {
      handleServicesMenuClose();
      servicesSectionRef.current?.scrollIntoView({ behavior: 'smooth' }); // Scroll to ServicesSection
    };
    
    const servicesPopover = (
      <Paper elevation={3} sx={{ position: 'absolute',top:"70px", minWidth: 160, zIndex: 1, borderTop:"4px solid #06b3f8", '&::before': {
        content: '""',
        position: 'absolute',
        top: '-8px', // Adjust as needed
        left: '50%',
        transform: 'translateX(-50%)',
        border: 'solid transparent',
        borderWidth: '0 8px 8px 8px', // Adjust as needed
        borderColor: 'transparent transparent #ffffff transparent',
      }}} ref={dropdownServiceRef} onMouseLeave={handleServicesMenuClose}>
        <Box sx={{ p: 1, display:"flex",flexDirection:"column" }}>
          {services.map((service)=>(
            <Button key={service.title} onClick={() => { handleServicesMenuClose(); }}>
            <Typography  sx={{ cursor: 'pointer', mb: 1, color:"black" }}>{t(`${service.title}`)}</Typography>
          </Button>
          ))}
        </Box>
      </Paper>
    );
    

  const navItems = (
    <Box sx={{ display: "flex", gap: 4 }} >
      <Button color="inherit" sx={{'&:hover':{backgroundColor:"rgba(6, 179, 248, 0.2)"}}}>
        <Typography variant="button" color={buttonNavColor}>
          Home
        </Typography>
      </Button>
      <Button color="inherit" sx={{'&:hover':{backgroundColor:"rgba(6, 179, 248, 0.2)"}}}>
        <Typography variant="button" color={buttonNavColor}>
          About
        </Typography>
      </Button>
      <Button color="inherit" 
        onClick={handleServicesButtonClick} // Click event to navigate to services section
        onMouseOver={handleServicesMenuOpen} // Mouse over event to open Services Menu
        sx={{'&:hover':{backgroundColor:"rgba(6, 179, 248, 0.2)"}}}
        >
        <Typography variant="button" color={buttonNavColor}>
          Services
        </Typography>
      </Button>
      {openServices&&(servicesPopover)}
      <Button color="inherit"  sx={{'&:hover':{backgroundColor:"rgba(6, 179, 248, 0.2)"}}}>
        <Typography variant="button" color={buttonNavColor}>
          Contact
        </Typography>
      </Button>
    </Box>
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: "20px 1rem", md: "20px 5rem" },
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
        <Box
          component="img"
          src="./images/IconBbes-removebg-preview.png"
          alt="Logo"
          sx={{ width: { xs: "40px", lg: "55px" } }}
        />
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: "1.8rem", // Adjust font size for sm breakpoint
              md: "2rem", // Adjust font size for md breakpoint
              lg: "3.0rem", // Adjust font size for lg breakpoint
            },
            color: "white",
          }}
        >
          BBES Consult
        </Typography>
        {!isMobile && (
          <Box sx={{ display: "flex" }}>
            <Button color="inherit" onClick={handleMenuOpen}>
              <Flag code={getCurrentFlagCode()} height={getCurrentFlagSize()} />{" "}
              {/* Display the flag of the current language */}
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem
                onClick={() => {
                  changeLanguage("en");
                  handleMenuClose();
                }}
              >
                <Flag code="GB" height="10" /> English
              </MenuItem>
              <MenuItem
                onClick={() => {
                  changeLanguage("bg");
                  handleMenuClose();
                }}
              >
                <Flag code="BG" height="11" /> Български
              </MenuItem>
              <MenuItem
                onClick={() => {
                  changeLanguage("tr");
                  handleMenuClose();
                }}
              >
                <Flag code="TR" height="12" /> Türkçe
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Box>

      {isMobile ? (
        <>
          <Button color="inherit" onClick={handleDrawerOpen}>
            <SvgIcon fontSize="small">
              <FontAwesomeIcon color="white" icon={faBars} />
            </SvgIcon>
          </Button>
          <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
            <List sx={{ width: 250 }}>
              <ListItem>Home</ListItem>
              <ListItem>About</ListItem>
              <ListItem>Services</ListItem>
              <ListItem>Contact</ListItem>
              <Box sx={{ display: "flex" }}>
                <Button color="inherit" onClick={handleMenuOpen}>
                  <Flag code={getCurrentFlagCode()} height={getCurrentFlagSize()} />{" "}
                  {/* Display the flag of the current language */}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem
                    onClick={() => {
                      changeLanguage("en");
                      handleMenuClose();
                    }}
                  >
                    <Flag code="GB" height="10" /> English
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      changeLanguage("bg");
                      handleMenuClose();
                    }}
                  >
                    <Flag code="BG" height="11" /> Български
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      changeLanguage("tr");
                      handleMenuClose();
                    }}
                  >
                    <Flag code="TR" height="12" /> Türkçe
                  </MenuItem>
                </Menu>
              </Box>
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

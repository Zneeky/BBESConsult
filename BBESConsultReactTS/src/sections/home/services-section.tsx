import React from "react";
import { useTranslation } from "react-i18next";
import useServices from "../../hooks/services"; // Update the path accordingly

import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const ServicesSection: React.FC = () => {
  const services = useServices();
  const { t } = useTranslation();

  return (
    <Box sx={{ m:{xs:"0 1rem",md:"0 3rem",lg:"0 6rem",},flexGrow: 1,display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography
        variant="h3"
        sx={{ m:"2rem auto 3rem", fontSize: { xs: "8vw", sm: "5vw", lg: "3vw" } }}
        gutterBottom
      >
        {t("Services")}
      </Typography>
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid  item xs={12} sm={6} md={4} lg={4} xl={3} key={service.index}>
            <Card
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                marginBottom: 2,
                borderRadius: "15px", // Rounded corners
                height: "100%", // Full height
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardMedia
                component="img"
                height="200" // Increased height
                image={service.image}
                alt={service.title}
                sx={{
                  borderTopLeftRadius: "15px", // Rounded top-left corner
                  borderTopRightRadius: "15px", // Rounded top-right corner
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                href={service.link}
                sx={{
                  alignSelf: "flex-end", // Position to the right
                  marginBottom: 1, // Margin from the bottom
                  marginRight: 1, // Margin from the right
                }}
              >
                {t("Learn More")}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;

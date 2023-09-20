import React, { useState } from "react";
import { Button, TextField, Box, Grid } from "@mui/material";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Here you can send the formData to a server or handle it as needed
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Name"
            variant="filled"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              sx: {
                color: "grey", // Change this to your desired color
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Email"
            variant="filled"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              sx: {
                color: "grey", // Change this to your desired color
              },
            }}
          />
        </Grid>
      </Grid>
      <TextField
        fullWidth
        label="Message"
        variant="filled"
        name="message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
        InputProps={{
          disableUnderline: true,
        }}
        InputLabelProps={{
          sx: {
            color: "grey", // Change this to your desired color
          },
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Send
      </Button>
    </Box>
  );
};

export default ContactForm;

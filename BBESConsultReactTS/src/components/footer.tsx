import React from 'react';
import { Box, Typography } from '@mui/material';

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '2rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
      <Typography variant="body2" sx={{ marginTop: '1rem' }}>
        All rights reserved ©2023 BBES Consult
      </Typography>
    </Box>
  );
};

export default Footer;
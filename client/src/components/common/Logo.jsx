import React from 'react';
import { Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography variant="h6" fontWeight="bold" fontSize="1.7rem">
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        Bert
      <span style={{ color: theme.palette.primary.main }}>Flix</span>
      </Link>
    </Typography>
  );
};

export default Logo;

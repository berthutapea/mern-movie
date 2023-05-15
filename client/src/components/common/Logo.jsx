import React from 'react';
import { Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography variant="h6" fontWeight="bold" fontSize="1.7rem">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span style={{ color: theme.palette.primary.main }}>BertFlix</span>
      </Link>
    </Typography>
  );
};

export default Logo;

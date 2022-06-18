import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const BackToHome = () => {
  return (
    <div>
      <Link to='/'>
        <Typography
          variant='h6'
          sx={{ p: 2, backgroundColor: '#111', textAlign: 'center', borderRadius: 3 }}>
          Повернутися до магазину
        </Typography>
      </Link>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';

export const BackToHome: React.FC = () => {
  return (
    <>
      <Link to='/'>
        <Typography
          variant='h6'
          sx={{
            p: 2,
            borderRadius: 3,
            textAlign: 'center',
            backgroundColor: '#111',
          }}>
          Повернутися до магазину
        </Typography>
      </Link>
    </>
  );
};

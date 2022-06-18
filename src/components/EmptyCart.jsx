import { Typography, Box } from '@mui/material';
import React from 'react';
import cartEmptyImg from '../assets/empty-cart.png';
import { BackToHome } from './BackToHome';

export const CartIcon = () => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        <Box sx={{ fontSize: 34, color: 'white' }}>
          <img
            src={cartEmptyImg}
            alt='empty cart'
            style={{ display: 'block', margin: '30px auto' }}
          />
          <Typography align='center' variant='h4' sx={{ mb: 3 }}>
            Ваш кошик порожній
          </Typography>
        </Box>
        <BackToHome />
      </Box>
    </>
  );
};

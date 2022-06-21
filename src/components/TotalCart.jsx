import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { deleteFromCart, cartSelector } from '../redux/slices/cartSlice';

import { Box, Typography } from '@mui/material';

export const TotalCart = () => {
  const { totalCount, totalPrice } = useSelector(cartSelector);
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 5 }}>
        <Typography
          variant='h5'
          sx={{
            fontSize: 28,
            color: 'white',
            p: 1.5,
            backgroundColor: '#222',
            borderRadius: '7px',
            maxWidth: 300,
            textAlign: 'center',
            fontWeight: 300,
          }}>
          Кількість: {totalCount}
        </Typography>
        <Typography
          variant='h5'
          sx={{
            fontSize: 28,
            color: 'white',
            p: 1.5,
            backgroundColor: '#ef7c3d',
            borderRadius: '7px',
            maxWidth: 300,
            textAlign: 'center',
          }}>
          Загалом: {totalPrice} грн
        </Typography>
      </Box>
      <Link to='*'>
        <Typography
          variant='h6'
          sx={{
            fontSize: 24,
            color: 'white',
            p: 1,
            backgroundColor: '#222',
            borderRadius: '7px',
            maxWidth: 300,
            textAlign: 'center',
            m: '0 auto 50px',
            cursor: 'pointer',
          }}>
          Перейти до оплати
        </Typography>
      </Link>
    </>
  );
};

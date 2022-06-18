import React from 'react';
import { nanoid } from 'nanoid';

import { Box, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { useSelector } from 'react-redux/es/exports';

import style from '../ProductInCart/ProductInCart.module.scss';

export const ProductInCart = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <>
      <ul>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 36,
            color: 'white',
            mb: 5,
            maxHeight: 100,
          }}>
          <Typography variant='h4'>Корзина</Typography>
          <ShoppingCartIcon color='warning' fontSize='large' sx={{ m: 2 }} />
        </Box>
        {cart.map((products) => (
          <li key={nanoid()} className={style.root}>
            <img src={products.image} width='100' alt='product' />
            <Box className={style.title}>{products.title}</Box>
            <Box className={style.price__wrapper}>
              <Box className={style.count}> шт: {products.count}</Box>
              <Box className={style.price}> ціна: {products.price} грн</Box>
              <HighlightOffIcon color='warning' fontSize='medium' sx={{ cursor: 'pointer' }} />
            </Box>
          </li>
        ))}
      </ul>
    </>
  );
};

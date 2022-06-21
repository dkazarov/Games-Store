import React from 'react';

import { Box, Typography } from '@mui/material';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { deleteFromCart, cartSelector } from '../../redux/slices/cartSlice';

import { useDispatch, useSelector } from 'react-redux/es/exports';

import style from '../ProductInCart/ProductInCart.module.scss';

export const ProductInCart = ({ id, image, title, price, count }) => {
  const dispatch = useDispatch();

  const deleteProductFromCart = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <>
      <ul style={{ marginBottom: '3%' }}>
        <li className={style.root}>
          <img src={image} width='80' alt='product' />
          <Box className={style.title}>{title}</Box>
          <Box className={style.price__wrapper}>
            <Box className={style.count}>{count}</Box>
            <Box className={style.price}>{price * count} грн</Box>
            <HighlightOffIcon
              color='error'
              sx={{ mr: 2, cursor: 'pointer' }}
              onClick={() => deleteProductFromCart(id)}
            />
          </Box>
        </li>
      </ul>
    </>
  );
};

import React from 'react';
import { nanoid } from 'nanoid';

import { Box } from '@mui/material';

import { useSelector } from 'react-redux/es/exports';

import style from '../ProductInCart/ProductInCart.module.scss';

export const ProductInCart = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <>
      <ul>
        Корзина
        {cart.map((products) => (
          <li key={nanoid()} className={style.root}>
            <img src={products.image} width='150' alt='product image' />
            <Box className={style.title}>{products.title}</Box>
            <Box className={style.count}> шт: {products.count}</Box>
            <Box> Ціна: {products.price} грн</Box>
          </li>
        ))}
      </ul>
    </>
  );
};

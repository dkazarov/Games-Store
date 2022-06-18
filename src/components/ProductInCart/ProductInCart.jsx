import React from 'react';
import { nanoid } from 'nanoid';

import { Box, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { deleteFromCart } from '../../redux/slices/cartSlice';

import { useDispatch, useSelector } from 'react-redux/es/exports';

import style from '../ProductInCart/ProductInCart.module.scss';

export const ProductInCart = () => {
  const dispatch = useDispatch();
  const { cart, totalCount, totalPrice } = useSelector((state) => state.cart);

  const deleteProductFromCart = (id) => {
    dispatch(deleteFromCart(id));
    dispatch();
  };

  console.log(cart);

  return (
    <>
      <ul style={{ marginBottom: '10%' }}>
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
              <HighlightOffIcon
                color='warning'
                fontSize='large'
                sx={{ cursor: 'pointer' }}
                onClick={() => deleteProductFromCart(products.id)}
              />
            </Box>
          </li>
        ))}
      </ul>
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
          Ціна: {totalPrice} грн
        </Typography>
      </Box>
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
        Перейти до сплати
      </Typography>
    </>
  );
};

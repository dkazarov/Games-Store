import React from 'react';

import { nanoid } from 'nanoid';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container, Box, Typography } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { clearCart, cartSelector } from '../redux/slices/cartSlice';

import { Header } from '../components/Header';
import { ClearCart } from '../components/ClearCart/ClearCart';
import { CartItem } from '../components/CartItem/CartItem';
import { CartIcon } from '../components/EmptyCart';
import { TotalCart } from '../components/TotalCart';

import { ICart } from '../@types/types';

import style from '../components/ClearCart/ClearCart.module.scss';

export const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(cartSelector);

  const clearAllProductInCart: () => void = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <Header />
      {cart.length ? (
        <Container maxWidth='lg' sx={{ position: 'relative' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 36,
              color: 'white',
              mb: 5,
              maxHeight: 50,
            }}>
            <Typography variant='h4' sx={{ display: 'flex', alignItems: 'center' }}>
              Кошик
              <ShoppingCartIcon color='warning' fontSize='large' sx={{ m: 2 }} />
            </Typography>
            <Box className={style.root} onClick={clearAllProductInCart}>
              <ClearCart />
            </Box>
          </Box>
          {cart.map((products: ICart) => (
            <CartItem {...products} key={nanoid()} />
          ))}
          <TotalCart />
        </Container>
      ) : (
        <Container>
          <CartIcon />
        </Container>
      )}
    </>
  );
};

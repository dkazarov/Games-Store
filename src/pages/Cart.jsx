import React from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container, Box, Typography } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';

import { Header } from '../components/Header';
import { ClearCart } from '../components/ClearCart/ClearCart';
import { ProductInCart } from '../components/ProductInCart/ProductInCart';
import { CartIcon } from '../components/EmptyCart';

import style from '../components/ClearCart/ClearCart.module.scss';

export const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const clearAllProductInCart = () => {
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
              Корзина
              <ShoppingCartIcon color='warning' fontSize='large' sx={{ m: 2 }} />
            </Typography>
            <Box className={style.root} onClick={() => clearAllProductInCart()}>
              <ClearCart />
            </Box>
          </Box>
          <ProductInCart />
        </Container>
      ) : (
        <Container>
          <CartIcon />
        </Container>
      )}
    </>
  );
};

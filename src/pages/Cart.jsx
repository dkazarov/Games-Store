import React from 'react';

import { Container } from '@mui/material';

import { Header } from '../components/Header';
import { ProductInCart } from '../components/ProductInCart/ProductInCart';

export const Cart = () => {
  return (
    <>
      <Header />
      <Container>
        <ProductInCart />
      </Container>
    </>
  );
};

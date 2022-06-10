import React from 'react';

import { Container } from '@mui/material';

import { Header } from '../components/Header';
import { ProductInCart } from '../components/ProductInCart/ProductInCart';

import { useSelector } from 'react-redux/es/exports';

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

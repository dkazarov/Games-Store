import React from 'react';
import { Grid, Container } from '@mui/material';
import { nanoid } from 'nanoid';

import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';

import { useSelector } from 'react-redux';

export const HomePage = () => {
  const data = useSelector((state) => state.data.data);

  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          {data.map((obj) => (
            <ProductCard key={nanoid()} {...obj} obj={obj} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

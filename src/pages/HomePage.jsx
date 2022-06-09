import React from 'react';
import { Header } from '../components/Header/Header';
import Grid from '@mui/material/Grid';
import { ProductCard } from '../components/ProductCard';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import { nanoid } from 'nanoid';

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

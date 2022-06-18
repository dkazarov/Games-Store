import React from 'react';
import { nanoid } from 'nanoid';

import { dataSelector } from '../redux/slices/dataSlice.js';
import { useSelector } from 'react-redux';

import { Grid, Container, CircularProgress } from '@mui/material';

import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';

export const HomePage = () => {
  const { data, isLoading } = useSelector(dataSelector);

  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          {isLoading ? (
            <CircularProgress
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ) : (
            data.map((obj) => <ProductCard key={nanoid()} {...obj} obj={obj} />)
          )}
        </Grid>
      </Container>
    </>
  );
};

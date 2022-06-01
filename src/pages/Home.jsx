import React from 'react';
import Header from '../components/Header/Header';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {/* <Item>xs=8</Item> */}
        </Grid>
        <Grid item xs={4}>
          {/* <Item>xs=4</Item> */}
        </Grid>
        <Grid item xs={4}>
          {/* <Item>xs=4</Item> */}
        </Grid>
        <Grid item xs={8}>
          {/* <Item>xs=8</Item> */}
        </Grid>
      </Grid>
    </Box>
  );
};

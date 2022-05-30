import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Header from './components/Header/Header';

import './App.scss';

function App() {
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
}

export default App;

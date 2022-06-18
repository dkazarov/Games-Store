import React from 'react';

import { Header } from '../components/Header';
import { SelectedGame } from '../components/SelectedGame';

import { Container } from '@mui/material';

export const GamePage = () => {
  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        <SelectedGame />
      </Container>
    </>
  );
};

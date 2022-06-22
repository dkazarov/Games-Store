import React from 'react';
import { nanoid } from 'nanoid';

import { useSelector } from 'react-redux';
import { gameSelector } from '../redux/slices/gameSlice';

import { Box, Chip, Typography, Button, Alert, AlertTitle } from '@mui/material';

export const SelectedGame: React.FC = () => {
  const { game } = useSelector(gameSelector);

  if (!game) {
    return (
      <Alert
        severity='error'
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          fontSize: 20,
        }}>
        <AlertTitle>Error</AlertTitle>
        Упс... Щось пішло не так...
      </Alert>
    );
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', mb: 7 }}>
        <img src={game.image} style={{ maxHeight: '500px', objectFit: 'cover' }} alt='game cover' />
        <Typography
          variant='h3'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: 'white',
            p: 2,
          }}>
          {game.title}
          <Box>
            {game.genres.map((items: string[]) => (
              <Chip
                key={nanoid()}
                label={items}
                color='warning'
                size='small'
                sx={{ m: 0.5, cursor: 'pointer' }}
              />
            ))}
          </Box>
          <Typography variant='body1' color='white' sx={{ fontSize: 21, pt: 5, mb: 5 }}>
            {game.description}
          </Typography>
          <Button variant='contained' sx={{ width: '70%', m: '0 auto' }}>
            Купити
          </Button>
        </Typography>
      </Box>
      <iframe
        width='100%'
        height='500'
        src={game.video}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
    </>
  );
};
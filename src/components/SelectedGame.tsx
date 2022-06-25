import React from 'react';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { gameSelector } from '../redux/slices/gameSlice';

import { Box, Chip, Typography, Button } from '@mui/material';
import { ICart } from '../@types/types';
import { addToCart } from '../redux/slices/cartSlice';

export const SelectedGame: React.FC = () => {
  const dispatch = useDispatch();
  const { game } = useSelector(gameSelector);

  const addProductToCart = (game: ICart) => {
    dispatch(addToCart({ ...game }));
  };

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
            {game.genres.map((items) => (
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
          <Button
            onClick={() => addProductToCart(game)}
            variant='contained'
            sx={{ width: '70%', m: '0 auto' }}>
            Купити: {game.price} грн
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

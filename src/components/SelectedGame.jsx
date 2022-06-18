import React from 'react';
import { Box, Chip, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { nanoid } from 'nanoid';

export const SelectedGame = () => {
  const { game } = useSelector((state) => state.game);

  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addToCart(game));

    // Post to firebase
    // const db = getDatabase();
    // const postListRef = ref(db, 'cart/');
    // const newPostRef = push(postListRef);
    // set(newPostRef, { ...obj });
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
          <Button onClick={addProductToCart} variant='contained' sx={{ width: '70%', m: '0 auto' }}>
            Купити
          </Button>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        <iframe
          width='100%'
          height='500'
          src={game.video}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
      </Box>
    </>
  );
};

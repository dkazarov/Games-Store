import React from 'react';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { gameSelector } from '../../redux/slices/gameSlice';

import { Chip, Button } from '@mui/material';
import { ICart } from '../../@types/types';
import { addToCart } from '../../redux/slices/cartSlice';

import style from './SelectedGame.module.scss';

export const SelectedGame: React.FC = () => {
  const dispatch = useDispatch();
  const { game } = useSelector(gameSelector);

  const addProductToCart = (game: ICart) => {
    dispatch(addToCart({ ...game }));
  };

  return (
    <>
      <div className={style.root}>
        <img className={style.cover} src={game.image} alt='game cover' />
        <div>
          <h2 className={style.title}>{game.title}</h2>
          {game.genres.map((items) => (
            <Chip
              key={nanoid()}
              label={items}
              color='warning'
              size='small'
              sx={{ m: 0.5, cursor: 'pointer', mb: 4 }}
            />
          ))}
          <div className={style.description}>{game.description}</div>
          <Button
            onClick={() => addProductToCart(game)}
            variant='contained'
            sx={{ width: '70%', m: '0 auto' }}>
            Купити: {game.price} грн
          </Button>
        </div>
      </div>
      <iframe
        className={style.video}
        width='100%'
        height='500'
        src={game.video}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
    </>
  );
};

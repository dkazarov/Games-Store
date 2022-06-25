import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { addToCart } from '../../redux/slices/cartSlice';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Chip,
  Box,
} from '@mui/material';
import { setCurrentGame } from '../../redux/slices/gameSlice';

import { useDispatch } from 'react-redux';
import { activeCartPreview } from '../../redux/slices/cartSlice';
import { IProduct } from '../../@types/types';

import style from './ProductCard.module.scss';

// import { getDatabase, ref, push, set } from 'firebase/database';

export const ProductCard: React.FC<IProduct> = ({
  id,
  image,
  title,
  description,
  price,
  genres,
  count,
  video,
}) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const addProductToCart = () => {
    dispatch(addToCart({ id, image, title, price, count }));
    dispatch(activeCartPreview(false));

    // Post to firebase
    // const db = getDatabase();
    // const postListRef = ref(db, 'cart/');
    // const newPostRef = push(postListRef);
    // set(newPostRef, { ...obj });
  };

  const openGameCard = () => {
    dispatch(setCurrentGame({ id, image, title, description, price, genres, count, video }));
    navigate(`/game/${id}/${title}`);
  };

  return (
    <Card className={style.root} sx={{}}>
      <Box onClick={openGameCard}>
        <CardMedia
          component='img'
          alt='img'
          height='250'
          image={image}
          sx={{ cursor: 'pointer' }}
        />
        <CardContent className={style.content}>
          <Typography className={style.title} gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography
            gutterBottom
            component='div'
            sx={{ fontSize: 14, color: 'crimson', textAlign: 'center', m: 1.5 }}>
            {genres.map((items) => (
              <Chip
                key={nanoid()}
                label={items}
                color='warning'
                size='small'
                sx={{ m: 0.2, cursor: 'pointer' }}
              />
            ))}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Button className={style.outline} size='small' variant='outlined'>
          Ціна: {price} грн
        </Button>
        <Button
          className={style.filled}
          size='small'
          variant='contained'
          onClick={addProductToCart}>
          Купити
        </Button>
      </CardActions>
    </Card>
  );
};

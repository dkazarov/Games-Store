import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { addToCart } from '../redux/slices/cartSlice';
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
import { setCurrentGame } from '../redux/slices/gameSlice';

import { useDispatch } from 'react-redux';
import { activeCartPreview } from '../redux/slices/cartSlice';

// import { getDatabase, ref, push, set } from 'firebase/database';

interface IProductCard {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  genres: string[];
  count: number;
}

export const ProductCard: React.FC<IProductCard> = ({
  id,
  image,
  title,
  description,
  price,
  genres,
  count,
}) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const addProductToCart = () => {
    console.log(price);

    dispatch(addToCart({ id, image, title, description, price, genres, count }));
    dispatch(activeCartPreview(false));

    // Post to firebase
    // const db = getDatabase();
    // const postListRef = ref(db, 'cart/');
    // const newPostRef = push(postListRef);
    // set(newPostRef, { ...obj });
  };

  const openGameCard = () => {
    dispatch(setCurrentGame({ id, title }));
    navigate(`/game/${id}/${title}`);
  };

  return (
    <Card sx={{ maxWidth: 300, m: 2, height: '500px' }}>
      <Box onClick={openGameCard}>
        <CardMedia
          component='img'
          alt='img'
          height='250'
          image={image}
          sx={{ cursor: 'pointer' }}
        />
        <CardContent sx={{ maxHeight: '165px', overflow: 'hidden' }}>
          <Typography
            gutterBottom
            component='div'
            sx={{ fontSize: 14, color: 'crimson', textAlign: 'center' }}>
            {genres.map((items) => (
              <Chip
                key={nanoid()}
                label={items}
                color='warning'
                size='small'
                sx={{ m: 0.5, cursor: 'pointer' }}
              />
            ))}
          </Typography>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size='small' variant='outlined'>
          Ціна: {price} грн
        </Button>
        <Button size='small' variant='contained' onClick={addProductToCart}>
          Купити
        </Button>
      </CardActions>
    </Card>
  );
};

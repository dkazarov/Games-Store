import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { nanoid } from 'nanoid';
import { addToCart, increment } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { getDatabase, ref, push, set } from 'firebase/database';

export function ProductCard({ image, title, description, price, genres, obj }) {
  const dispatch = useDispatch();
  const db = getDatabase();

  const addProductToCart = (obj) => {
    dispatch(addToCart(obj));
    dispatch(increment());

    // Post to firebase
    // const postListRef = ref(db, 'cart/');
    // const newPostRef = push(postListRef);
    // set(newPostRef, { ...obj });
  };

  return (
    <Card sx={{ maxWidth: 300, m: 2, height: '500px' }}>
      <CardMedia component='img' alt='img' height='250' image={image} sx={{ cursor: 'pointer' }} />
      <CardContent sx={{ maxHeight: '170px', overflow: 'hidden' }}>
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
              sx={{ mr: 0.5, cursor: 'pointer' }}
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
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size='small' variant='outlined'>
          Ціна: {price} грн
        </Button>
        <Button size='small' variant='contained' onClick={() => addProductToCart(obj)}>
          Купити
        </Button>
      </CardActions>
    </Card>
  );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';

export function ProductCard() {
  const cardData = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345, m: 1 }} spacing={10}>
      <CardMedia
        component='img'
        alt='green iguana'
        height='140'
        image='/static/images/cards/contemplative-reptile.jpg'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {cardData.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}

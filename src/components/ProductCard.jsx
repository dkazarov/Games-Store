import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function ProductCard({ obj }) {
  return (
    <Card sx={{ maxWidth: 300, m: 2, height: '500px' }}>
      <CardMedia component='img' alt='img' height='300' image={obj.image} />
      <CardContent sx={{ maxHeight: '125px', overflow: 'hidden' }}>
        <Typography gutterBottom variant='h5' component='div'>
          {obj.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {obj.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size='small'>Ціна: {obj.price} грн</Button>

        <Button size='small' variant='contained'>
          Купити
        </Button>
      </CardActions>
    </Card>
  );
}

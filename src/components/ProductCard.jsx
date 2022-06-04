import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export function ProductCard({ image, title, description, price, genres }) {
  return (
    <Card sx={{ maxWidth: 300, m: 2, height: '500px' }}>
      <CardMedia component='img' alt='img' height='300' image={image} />
      <CardContent sx={{ maxHeight: '120px', overflow: 'hidden' }}>
        <Typography
          gutterBottom
          component='div'
          sx={{ fontSize: 14, color: 'crimson', textAlign: 'center' }}>
          {genres.map((items) => (
            <Chip label={items} color='warning' size='small' sx={{ mr: 0.5 }} />
            // <Chip label={items} color="warning" size='small' />
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

        <Button size='small' variant='contained'>
          Купити
        </Button>
      </CardActions>
    </Card>
  );
}

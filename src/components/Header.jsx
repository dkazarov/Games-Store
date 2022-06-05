import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { CartPreview } from './CartPreview/CartPreview';

import { activeCartPreview } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.value);
  const previewCart = useSelector((state) => state.cart.previewCart);

  const activePreviewMenu = () => {
    setTimeout(() => {
      dispatch(activeCartPreview(!previewCart));
      // setPreviewCart(!previewCart);
    }, 500);
  };

  return (
    <Box>
      <Box
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          height: '75px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, .5)',
          marginBottom: '40px',
        }}>
        <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h5' gutterBottom component='div' color='white'>
            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
              Games Store
            </Link>
          </Typography>
          <Link to='/cart'>
            <IconButton aria-label='cart' color='warning' onMouseOver={activePreviewMenu}>
              <StyledBadge badgeContent={count} color='secondary'>
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </Container>
      </Box>
      <CartPreview />
    </Box>
  );
};

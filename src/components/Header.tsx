import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Badge, IconButton, Container, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { styled } from '@mui/material/styles';
import { CartPreview } from './CartPopoup/CartPopup';
import { Search } from './Search/Search';

import { activeCartPreview, cartSelector } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { cart, previewCart, totalPrice, totalCount } = useSelector(cartSelector);

  const activePreviewMenu = () => {
    if (cart.length > 0) {
      setTimeout(() => {
        dispatch(activeCartPreview(!previewCart));
      }, 350);
    }
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
          <Search />
          <Link
            to='/cart'
            style={{ textDecoration: 'none', fontSize: '16px', color: 'white', fontWeight: 700 }}>
            <IconButton aria-label='cart' color='warning' onMouseEnter={activePreviewMenu}>
              <StyledBadge badgeContent={totalCount} color='secondary' sx={{ mr: 1.5 }}>
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            {totalPrice} грн
          </Link>
        </Container>
      </Box>
      <CartPreview />
    </Box>
  );
};

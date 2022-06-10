import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { CartPreview } from './CartPopoup/CartPopup';

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
  const { cart, previewCart, totalPrice } = useSelector((state) => state.cart);

  // Bage count
  const productCountOnCart = cart.reduce((acc, obj) => obj.count + acc, 0);



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
          <Link
            to='/cart'
            style={{ textDecoration: 'none', fontSize: '16px', color: 'white', fontWeight: 700 }}>
            <IconButton
              aria-label='cart'
              color='warning'
              onMouseEnter={activePreviewMenu}>
              <StyledBadge badgeContent={productCountOnCart} color='secondary' sx={{ mr: 1.5 }}>
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

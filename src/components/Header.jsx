import React from 'react';

import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

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
  const count = useSelector((state) => state.cart.value);
  return (
    <Box>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '75px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, .5)',
          marginBottom: '40px',
        }}>
        <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h5' gutterBottom component='div' color='white'>
            Games Store
          </Typography>
          <IconButton aria-label='cart' color='warning'>
            <StyledBadge badgeContent={count} color='secondary'>
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Container>
      </Box>
    </Box>
  );
};

import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { Badge, IconButton, Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { styled } from '@mui/material/styles';
import { CartPreview } from '../CartPopoup/CartPopup';
import { Search } from '../Search/Search';

import { activeCartPreview, cartSelector } from '../../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Header.module.scss';
import { SearchMobile } from '../Search-mobile/SearchMobile';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const Header: React.FC = memo(() => {
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
    <div>
      <div className={styles.root}>
        <Container maxWidth='xl' className={styles.container}>
          <Link className={styles.title} to='/'>
            Games Store
          </Link>
          <Search />
          <Link to='/cart' className={styles.cart}>
            <IconButton aria-label='cart' color='warning' onMouseEnter={activePreviewMenu}>
              <StyledBadge badgeContent={totalCount} color='secondary' sx={{ mr: 1.5 }}>
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            {totalPrice} грн
          </Link>
        </Container>
        <CartPreview />
      </div>
      <div className={styles.search__mobile}>
        <SearchMobile />
      </div>
    </div>
  );
});

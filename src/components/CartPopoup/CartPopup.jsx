import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart, activeCartPreview, cartSelector } from '../../redux/slices/cartSlice';

import { Box, Button } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import style from './CartPreview.module.scss';

export const CartPreview = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { cart, previewCart, totalPrice } = useSelector(cartSelector);

  const cartPreview = useRef();

  useEffect(() => {
    if (location.pathname === '/cart') {
      dispatch(activeCartPreview(false));
    }

    const handleClickOutside = (e) => {
      if (!e.path.includes(cartPreview.current)) {
        dispatch(activeCartPreview(false));
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };

    // eslint-disable-next-line
  }, [previewCart]);

  const deleteProductFromCart = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <>
      {previewCart && (
        <Box className={style.root} ref={cartPreview}>
          <ul className={style.ul}>
            {cart.map((products) => (
              <li key={nanoid()} className={style.list}>
                <HighlightOffIcon
                  onClick={() => deleteProductFromCart(products.id)}
                  sx={{ cursor: 'pointer', mr: 2 }}
                />
                <img src={products.image} alt='product img' className={style.image} />
                <Box className={style.info}>
                  <Box className={style.title}>{products.title}</Box>
                  <Box className={style.price}>
                    {products.price * products.count} грн{' '}
                    <span className={style.count}> шт: {products.count}</span>
                  </Box>

                  <Link to='/cart' className={style.link}>
                    <Button variant='contained' size='small' sx={{ display: 'block', m: '0 auto' }}>
                      Купити
                    </Button>
                  </Link>
                </Box>
              </li>
            ))}
          </ul>
          <Link to='/cart'>
            <Box
              sx={{
                p: 1.5,
                textAlign: 'center',
                fontSize: '20px',
                fontWeight: 700,
                borderTop: '1px dashed #000',
                color: '#555',
              }}>
              Загальна сумма: {totalPrice} грн
            </Box>
          </Link>
        </Box>
      )}
    </>
  );
};

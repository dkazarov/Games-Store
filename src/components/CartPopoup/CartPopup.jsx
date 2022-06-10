import React, { useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart, activeCartPreview } from '../../redux/slices/cartSlice';

import style from './CartPreview.module.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { Link } from 'react-router-dom';

export const CartPreview = () => {
  const dispatch = useDispatch();
  const { cart, previewCart, totalPrice } = useSelector((state) => state.cart);

  const cartPreview = useRef();

  useEffect(() => {
    if (window.location.pathname === '/cart') {
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
  }, []);

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

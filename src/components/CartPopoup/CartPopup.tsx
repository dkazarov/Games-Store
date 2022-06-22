import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { activeCartPreview, cartSelector } from '../../redux/slices/cartSlice';

import { CartPopupItem } from './CartPopupItem';

import style from './CartPreview.module.scss';

import { Box } from '@mui/material';

interface Iproducts {
  id: number;
  count: number;
  title: string;
  image: string;
  price: number;
}

export const CartPreview: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { cart, previewCart, totalPrice } = useSelector(cartSelector);

  const cartPreview = useRef();

  useEffect(() => {
    if (location.pathname === '/cart') {
      dispatch(activeCartPreview(false));
    }

    const handleClickOutside = (e: any) => {
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

  return (
    <>
      {previewCart && (
        <Box className={style.root} ref={cartPreview}>
          <ul className={style.ul}>
            {cart.map((products: Iproducts) => (
              <CartPopupItem {...products} key={nanoid()} />
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

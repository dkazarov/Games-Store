import React, { memo, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { activeCartPreview, cartSelector } from '../../redux/slices/cartSlice';

import { CartPopupItem } from './CartPopupItem';

import style from './CartPreview.module.scss';

import { Box } from '@mui/material';
import { ICart } from '../../@types/types';

export const CartPreview: React.FC = memo(() => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { cart, previewCart, totalPrice } = useSelector(cartSelector);

  const cartPreview = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.pathname === '/cart') {
      dispatch(activeCartPreview(false));
    }

    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as MouseEvent & {
        path: Node[];
      };
      if (cartPreview.current && !_event.path.includes(cartPreview.current)) {
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
        <div ref={cartPreview} className={style.root}>
          <ul className={style.ul}>
            {cart.map((products: ICart) => (
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
        </div>
      )}
    </>
  );
});

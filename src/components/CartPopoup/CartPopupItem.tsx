import React from 'react';
import { Link } from 'react-router-dom';

import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { decrementItemPopup } from '../../redux/slices/cartSlice';

import { Box, Button } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import style from './CartPreview.module.scss';

interface Iproducts {
  id: number;
  count: number;
  title: string;
  image: string;
  price: number;
}

export const CartPopupItem: React.FC<Iproducts> = ({ count, title, image, price }) => {
  const dispatch = useDispatch();

  const deleteProductFromCart = (id: number) => {
    dispatch(decrementItemPopup(id));
  };
  return (
    <>
      <li key={nanoid()} className={style.list}>
        {/* <HighlightOffIcon onClick:={deleteProductFromCart} sx={{ cursor: 'pointer', mr: 2 }} /> */}
        <img src={image} alt='product img' className={style.image} />
        <Box className={style.info}>
          <Box className={style.title}>{title}</Box>
          <Box className={style.price}>
            {price * count} грн <span className={style.count}> шт: {count}</span>
          </Box>
          <Link to='/cart' className={style.link}>
            <Button variant='contained' size='small' sx={{ display: 'block', m: '0 auto' }}>
              Купити
            </Button>
          </Link>
        </Box>
      </li>
    </>
  );
};

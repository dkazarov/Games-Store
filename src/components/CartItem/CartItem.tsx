import React from 'react';

import { Box } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { useDispatch } from 'react-redux/es/exports';
import { addToCart, decrementItem, deleteProduct } from '../../redux/slices/cartSlice';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import style from '../CartItem/CartItem.module.scss';

interface ICartItemProps {
  id: number;
  image: string;
  title: string;
  price: number;
  count: number;
}

export const CartItem: React.FC<ICartItemProps> = ({ id, image, title, price, count }) => {
  const dispatch = useDispatch();

  const deleteProductFromCart = () => {
    dispatch(deleteProduct(id));
  };

  const incrementProduct = () => {
    dispatch(addToCart({ id }));
  };

  const decrementProduct = () => {
    dispatch(decrementItem(id));
  };

  return (
    <>
      <ul style={{ marginBottom: '3%' }}>
        <li className={style.root}>
          <img src={image} width='70' alt='product' />
          <Box className={style.title}>{title}</Box>
          <Box className={style.price__wrapper}>
            <Box className={style.count}>
              <RemoveCircleOutlineIcon sx={{ mr: 1 }} onClick={decrementProduct} />
              {count}
              <AddCircleOutlineIcon sx={{ ml: 1 }} onClick={incrementProduct} />
            </Box>
            <Box className={style.price}>{price * count} грн</Box>
            <HighlightOffIcon
              color='warning'
              sx={{ mr: 2, cursor: 'pointer' }}
              onClick={deleteProductFromCart}
            />
          </Box>
        </li>
      </ul>
    </>
  );
};
import React from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { useDispatch } from 'react-redux/es/exports';
import { addToCart, decrementItem, deleteProduct } from '../../redux/slices/cartSlice';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { ICart } from '../../@types/types';

import style from '../CartItem/CartItem.module.scss';

export const CartItem: React.FC<ICart> = ({ id, image, title, price, count }) => {
  const dispatch = useDispatch();

  const deleteProductFromCart = () => {
    dispatch(deleteProduct(id));
  };

  const incrementProduct = () => {
    dispatch(addToCart({ id, image, title, price, count }));
  };

  const decrementProduct = () => {
    dispatch(decrementItem(id));
  };

  return (
    <ul className={style.root}>
      <li className={style.li}>
        <img className={style.cover} src={image} width='70' alt='product' />
        <div className={style.title}>{title}</div>
        <div className={style.price__wrapper}>
          <div className={style.count}>
            <RemoveCircleOutlineIcon className={style.decrement} onClick={decrementProduct} />
            {count}
            <AddCircleOutlineIcon className={style.increment} onClick={incrementProduct} />
          </div>
          <div className={style.price}>{price * count} грн</div>
          <HighlightOffIcon
            className={style.remove}
            color='warning'
            onClick={deleteProductFromCart}
          />
        </div>
      </li>
    </ul>
  );
};

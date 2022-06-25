import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { cartSelector } from '../../redux/slices/cartSlice';

import { Box, Typography } from '@mui/material';

import { BackToHome } from '../BackToHome';

import style from './TotalCart.module.scss';

export const TotalCart: React.FC = () => {
  const { totalCount, totalPrice } = useSelector(cartSelector);

  return (
    <>
      <div className={style.root}>
        <div className={style.inner}>
          <h4 className={style.count}>Кількість: {totalCount}</h4>
          <h4 className={style.price}>Загалом: {totalPrice} грн</h4>
        </div>
        <Link to='*'>
          <div className={style.pay_btn}>Перейти до оплати</div>
        </Link>
        <BackToHome />
      </div>
    </>
  );
};

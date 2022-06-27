import React from 'react';

import { BackToHome } from '../BackToHome/BackToHome';

import cartEmptyImg from '../../assets/empty-cart.png';

import styles from './EmptyCart.module.scss';

export const CartIcon: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={cartEmptyImg} alt='empty cart' />
        <h4 className={styles.title}>Ваш кошик порожній</h4>
      </div>
      <BackToHome />
    </div>
  );
};

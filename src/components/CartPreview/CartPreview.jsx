import React from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import style from './CartPreview.module.scss';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const CartPreview = ({ previewCart }) => {
  const productsInCart = useSelector((state) => state.cart.cart);

  console.log(productsInCart);

  return (
    <>
      {previewCart ? (
        <div className={style.root}>
          <ul>
            {productsInCart.map((products) => (
              <li key={nanoid()} className={style.list}>
                <img src={products.image} alt='image' className={style.image} />
                <Box className={style.info}>
                  <Box className={style.title}>{products.title}</Box>
                  <Box className={style.price}>{products.price} грн</Box>
                  <Link to='/cart'>
                    <Button variant='contained' size='small' sx={{ display: 'block', m: '0 auto' }}>
                      Купити
                    </Button>
                  </Link>
                </Box>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        false
      )}
    </>
  );
};

import React from 'react';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { Box } from '@mui/material';

import style from './ClearCart.module.scss';
export const ClearCart: React.FC = () => {
  return (
    <>
      <ClearAllIcon className={style.title} />
      <Box>Видалити все</Box>
    </>
  );
};

import React from 'react';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { Box } from '@mui/material';

export const ClearCart: React.FC = () => {
  return (
    <>
      <ClearAllIcon sx={{ mr: 1 }} />
      <Box>Видалити все</Box>
    </>
  );
};

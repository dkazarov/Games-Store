import { nanoid } from 'nanoid';

import { dataSelector } from '../../redux/slices/dataSlice';
import { useSelector } from 'react-redux';

import { Container, CircularProgress } from '@mui/material';

import { Header } from '../../components/Header';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { IProduct } from '../../@types/types';

import style from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  const { data, isLoading } = useSelector(dataSelector);

  return (
    <>
      <Header />
      <Container maxWidth='xl' className={style.root}>
        {isLoading ? (
          <CircularProgress
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ) : (
          data.map((card: IProduct) => <ProductCard key={nanoid()} {...card} />)
        )}
      </Container>
    </>
  );
};

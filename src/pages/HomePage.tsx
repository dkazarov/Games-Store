import { nanoid } from 'nanoid';

import { dataSelector } from '../redux/slices/dataSlice';
import { useSelector } from 'react-redux';

import { Grid, Container, LinearProgress } from '@mui/material';

import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { IProduct } from '../@types/types';

export const HomePage: React.FC = () => {
  const { data, isLoading } = useSelector(dataSelector);

  return (
    <>
      <Header />
      {isLoading ? (
        <LinearProgress />
      ) : (
        <Container maxWidth='xl' sx={{ pt: 5 }}>
          <Grid container direction='row' justifyContent='center' alignItems='center'>
            {data.map((card: IProduct) => (
              <ProductCard key={nanoid()} {...card} />
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

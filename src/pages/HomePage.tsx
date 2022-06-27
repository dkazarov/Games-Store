import { nanoid } from 'nanoid';

import { dataSelector } from '../redux/slices/dataSlice';
import { useSelector } from 'react-redux';

import { Grid, Container, LinearProgress } from '@mui/material';

import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { IProduct } from '../@types/types';
import { searchSelector } from '../redux/slices/filterSlice';

export const HomePage: React.FC = () => {
  const { data, isLoading } = useSelector(dataSelector);
  const { searchValue } = useSelector(searchSelector);

  const store = data.filter((items) =>
    items.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <>
      <Header />
      {isLoading ? (
        <LinearProgress />
      ) : (
        <Container maxWidth='xl' sx={{ pt: 5 }}>
          <Grid container direction='row' justifyContent='center' alignItems='center'>
            {store.map((card: IProduct) => (
              <ProductCard key={nanoid()} {...card} />
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

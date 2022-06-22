import { nanoid } from 'nanoid';

import { dataSelector } from '../redux/slices/dataSlice.js';
import { useSelector } from 'react-redux';

import { Grid, Container, CircularProgress } from '@mui/material';

import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';

export const HomePage: React.FC = () => {
  const { data, isLoading } = useSelector(dataSelector);

  interface ICardProduct {
    id: number;
    image: string;
    price: number;
    title: string;
    count: number;
    video: string;
    description: string;
    genres: string[];
  }

  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
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
            data.map((card: ICardProduct) => <ProductCard key={nanoid()} {...card} />)
          )}
        </Grid>
      </Container>
    </>
  );
};

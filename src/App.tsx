import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { GamePage } from './pages/GamePage';

import { getAllData } from './redux/slices/dataSlice';
import { useDispatch } from 'react-redux';

import './firebase.config';

const App: React.FC = () => {
  const dispatch = useDispatch();
  // Get all data from beckend
  dispatch(getAllData());

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/game/:id/:title' element={<GamePage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;

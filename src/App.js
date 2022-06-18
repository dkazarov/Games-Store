import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage.jsx';
import { Cart } from './pages/Cart.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { GamePage } from './pages/GamePage';

import { getAllData } from './redux/slices/dataSlice';
import { useDispatch } from 'react-redux';

import './firebase.config';

function App() {
  const dispatch = useDispatch();
  // Get all data from beckend
  dispatch(getAllData());

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/store/:title' element={<GamePage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

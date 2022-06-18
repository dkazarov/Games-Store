import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage.jsx';
import { Cart } from './pages/Cart.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { GamePage } from './pages/GamePage';

import { useDispatch } from 'react-redux';
import { setAllDataFromServer } from './redux/slices/dataSlice';

import { getDatabase, ref, child, get } from 'firebase/database';

import './firebase.config';

function App() {
  const dispatch = useDispatch();
  const dbRef = ref(getDatabase());

  const getData = async () => {
    const snapshot = await get(child(dbRef, `games/`));
    if (snapshot.exists()) {
      dispatch(setAllDataFromServer(snapshot.val()));
    } else {
      console.log('No data available');
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

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

import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage.jsx';
import { NotFound } from './pages/NotFound.jsx';

import { useDispatch } from 'react-redux';
import { getAllDataFromServer } from './redux/slices/dataSlice';

import { getDatabase, ref, child, get } from 'firebase/database';
import './firebase.config';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `games/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          dispatch(getAllDataFromServer(snapshot.val()));
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

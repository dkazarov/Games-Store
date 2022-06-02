import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home.jsx';
import { NotFound } from './pages/NotFound.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { getAllDataFromServer } from './redux/slices/dataSlice';

import { getDatabase, ref, child, get } from 'firebase/database';
import './firebase.config';

import './App.scss';

function App() {
  const data = useSelector((state) => state.data.data);
  console.log(data);
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
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

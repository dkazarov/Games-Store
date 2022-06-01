import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home.jsx';
import { NotFound } from './pages/NotFound.jsx';

import './App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

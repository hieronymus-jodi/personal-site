import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { PageBase } from './components';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageBase />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

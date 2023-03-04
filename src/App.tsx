import React from 'react';

import { Routes, Route, Outlet } from 'react-router-dom';
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

function PageBase() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;

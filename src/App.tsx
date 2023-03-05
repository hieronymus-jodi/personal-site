import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { PageBase } from './components';
import About from './pages/About';
import Home from './pages/Home';
import BlogHome from './pages/Blog/BlogHome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageBase />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogHome />} />
      </Route>
    </Routes>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'src/components/layout/Layout';
import { HomePage } from './components/pages/Home';
import { Product } from './components/pages/Product';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<Product />} />
    </Route>
  </Routes>
);

export { App };

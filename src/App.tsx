import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'src/components/layout/Layout';
import { ProductItem } from './components/blocks/ProductItem';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/product" element={<ProductItem />} />
    </Route>
  </Routes>
);

export { App };

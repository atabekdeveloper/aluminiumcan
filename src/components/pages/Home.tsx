import React from 'react';

import {
  About,
  About2,
  AdditionalProducts,
  Clients,
  Connection,
  Home,
  Partners,
  Products,
} from '../blocks';

const HomePage: React.FC = () => {
  return (
    <>
      <Home />
      <About />
      <Products />
      <About2 />
      <Connection />
      <AdditionalProducts />
      <Partners />
      <Clients />
    </>
  );
};

export { HomePage };

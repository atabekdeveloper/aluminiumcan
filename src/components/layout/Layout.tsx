import React from 'react';
import { About, About2, Connection, Home, Products } from '../blocks';
import { Header } from './Header';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-full overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-auto relative">
        <div className="h-screen snap-mandatory snap-y overflow-y-scroll">
          <Home />
          <About />
          <Products />
          <About2 />
          <Connection />
        </div>
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

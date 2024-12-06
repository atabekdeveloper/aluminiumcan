import React from 'react';
import { About, Home, Products } from '../blocks';
import { Header } from './Header';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-full overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-auto relative">
        <div className="h-screen scroll-snap">
          <Home />
          <About />
          <Products />
        </div>
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

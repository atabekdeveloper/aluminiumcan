import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-full overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative flex-auto">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

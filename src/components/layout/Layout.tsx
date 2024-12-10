import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = mainRef.current;
        const totalScrollableHeight = scrollHeight - clientHeight;
        const scrollPercentage = (scrollTop / totalScrollableHeight) * 100;
        setScrollPosition(scrollPercentage);
      }
    };

    const mainElement = mainRef.current;
    mainElement?.addEventListener('scroll', handleScroll);

    return () => {
      mainElement?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(scrollPosition);

  return (
    <div className="flex flex-col min-h-full overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main ref={mainRef} className="relative flex-auto">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

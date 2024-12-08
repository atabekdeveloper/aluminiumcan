import React, { useEffect, useRef, useState } from 'react';
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

  return (
    <div className="flex flex-col min-h-full overflow-hidden">
      {/* Header */}
      <Header scrollPosition={scrollPosition} />

      {/* Main content */}
      <main className="relative flex-auto">
        <div ref={mainRef} className="h-screen overflow-y-scroll snap-mandatory snap-y">
          <Home />
          <About />
          <div className="lg:snap-start snap-none">
            <Products />
            <About2 />
            <Connection />
            <AdditionalProducts />
            <Partners />
            <Clients />
            <Footer />
          </div>
        </div>
        {/* <div className="fixed p-2 text-white bg-gray-800 rounded bottom-4 right-4">
          Scroll: {scrollPosition.toFixed(0)}%
        </div> */}
      </main>
    </div>
  );
};

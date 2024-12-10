import React, { useEffect, useRef, useState } from 'react';

import {
  About,
  About2,
  AdditionalProducts,
  Clients,
  Connection,
  First,
  Partners,
  Products,
} from '../blocks';

import product from 'src/assets/images/product/product.svg';

const HomePage: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<{
    top: number;
    left: number;
    width: number;
    rotate: string;
    position: string;
  }>();

  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const productRef = useRef<HTMLLIElement | null>(null);

  const calculateClosestElement = () => {
    const refs = [homeRef, aboutRef, productRef];
    const centerY = window.innerHeight / 2;

    let closestElement = null;
    let closestDistance = Infinity;

    refs.forEach((ref) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - centerY);

        if (distance < closestDistance) {
          closestDistance = distance;

          if (ref === homeRef) {
            closestElement = {
              width: 220,
              top: rect.top,
              left: rect.left,
              rotate: '0deg',
            };
          }
          if (ref === aboutRef) {
            closestElement = {
              width: 90,
              top: rect.top + rect.height - 200,
              left: rect.left + rect.width - 50,
              rotate: '20deg',
            };
          }
          if (ref === productRef) {
            closestElement = {
              width: 130,
              top: rect.top + 100,
              left: rect.left + 80,
              rotate: '20deg',
            };
          }
        }
      }
    });

    return closestElement;
  };

  const handleScroll = () => {
    const closestPosition = calculateClosestElement();
    if (closestPosition) {
      setCurrentPosition(closestPosition);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 1);
    }, 0);
  }, []);

  useEffect(() => {
    // Установка начального положения
    const initialPosition = calculateClosestElement();
    if (initialPosition) {
      setCurrentPosition(initialPosition);
      console.log(initialPosition);
    }

    // Добавляем обработчик скролла
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Красный квадрат */}
      <div
        className="fixed z-20 hidden transition-all duration-700 ease-in-out lg:block"
        style={{
          top: currentPosition?.top,
          left: currentPosition?.left,
          width: currentPosition?.width,
          rotate: currentPosition?.rotate,
        }}
      >
        <img src={product} alt="Product" />
      </div>

      {/* Блоки */}
      <First divRef={homeRef} />
      <About divRef={aboutRef} />
      <Products divRef={productRef} />
      <About2 />
      <Connection />
      <AdditionalProducts />
      <Partners />
      <Clients />
    </>
  );
};

export { HomePage };

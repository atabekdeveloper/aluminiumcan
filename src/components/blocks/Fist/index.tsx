import React from 'react';
import { useTranslation } from 'react-i18next';

import fon1 from 'src/assets/images/fon/fon1.svg';

import product from 'src/assets/images/product/product.svg';
import product3 from 'src/assets/images/product/product3.svg';

const First: React.FC<{ divRef: React.RefObject<HTMLDivElement> }> = React.memo(({ divRef }) => {
  const { t } = useTranslation();
  return (
    <section id="#" className="lg:h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[40%,30%,30%] h-full lg:h-screen">
        {/* Первая колонка с фоновым изображением */}
        <div
          className="h-full bg-cover bg-center bg-[#6cede4] relative flex justify-center items-center py-[150px]"
          style={{
            backgroundImage: `url(${fon1})`, // Указывайте свой URL изображения
          }}
        >
          <div ref={divRef} className="relative">
            <img
              className="max-w-[220px] w-full opacity-100 lg:opacity-0 animate-rise-right"
              src={product}
              alt="Product 1"
            />
          </div>
        </div>

        {/* Вторая колонка с простым фоном */}
        <div className="p-4 bg-[#ADFFF9] relative overflow-hidden flex justify-center items-center">
          <img
            className="max-w-[270px] lg:max-w-[300px] w-full absolute top-[-200px] right-[-100px] animate-rise-down"
            src={product3}
            alt="Product 3"
          />
          <img
            className="max-w-[270px] lg:max-w-[300px] w-full absolute bottom-[-200px] left-[-50px] animate-rise-up"
            src={product3}
            alt="Product 3"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#0A3D6270] lg:hidden block"></div>
          <div className="relative z-10 block px-5 text-center lg:px-11 lg:text-left lg:hidden py-[150px] text-white">
            <h2 className="title text-4xl mb-4 text-white leading-[50px]">{t('homeTitle')}</h2>
            <p className="mb-4 leading-7">{t('homeDesc')}</p>
            <button className="button bg-midnight hover:bg-midnight/70">{t('homeButton')}</button>
          </div>
        </div>

        {/* Третья колонка с текстом и кнопкой */}
        <div className="bg-[#00C6B8] relative justify-center items-center text-white h-full bg-cover bg-center hidden lg:flex">
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#0A3D6270] lg:hidden block"></div>
          <div className="relative z-10 px-5 text-center lg:px-11 lg:text-left">
            <h2 className="title text-4xl mb-4 text-white leading-[50px]">{t('homeTitle')}</h2>
            <p className="mb-4 leading-7">{t('homeDesc')}</p>
            <button className="button bg-midnight hover:bg-midnight/70">{t('homeButton')}</button>
          </div>
        </div>
      </div>
    </section>
  );
});

export { First };

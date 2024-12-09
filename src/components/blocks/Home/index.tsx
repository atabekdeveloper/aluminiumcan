import React from 'react';

import fon from 'src/assets/images/fon/fon.png';
import fon1 from 'src/assets/images/fon/fon1.svg';

import product from 'src/assets/images/product/product.svg';
import product3 from 'src/assets/images/product/product3.svg';
import { useResponsive } from 'src/hooks';

const Home: React.FC = () => {
  const { isMobile } = useResponsive(1024);
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
          <img className="max-w-[220px] w-full block" src={product} alt="Product 1" />
        </div>

        {/* Вторая колонка с простым фоном */}
        <div className="p-4 bg-[#ADFFF9] relative overflow-hidden hidden lg:block">
          <img
            className="max-w-[300px] w-full absolute top-[-200px] right-[-100px] rotate-[35deg]"
            src={product3}
            alt="Product 3"
          />
          <img
            className="max-w-[300px] w-full absolute bottom-[-200px] left-[-50px] rotate-[35deg]"
            src={product3}
            alt="Product 3"
          />
        </div>

        {/* Третья колонка с текстом и кнопкой */}
        <div
          className="bg-[#00C6B8] relative flex justify-center items-center text-white h-full bg-cover bg-center py-[150px]"
          style={{
            backgroundImage: `url(${isMobile && fon})`, // Указывайте свой URL изображения
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#0A3D6270] lg:hidden block"></div>
          <div className="relative z-10 px-5 text-center lg:px-11 lg:text-left">
            <h2 className="title text-4xl mb-4 text-white leading-[50px]">
              "Ichimliklar uchun alyuminiy idishlar ishlab chiqarish."
            </h2>
            <p className="mb-4 leading-7">
              "Biz ichimliklar va boshqa sohalar uchun ekologik toza va sifatli qadoqlash
              yechimlarini taqdim etishni maqsad qilgan, alyuminiy bankalar va butilkalar ishlab
              chiqaruvchi yetakchi kompaniyamiz."
            </p>
            <button className="button bg-midnight hover:bg-midnight/70">
              Katalogni yuklab olish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Home };

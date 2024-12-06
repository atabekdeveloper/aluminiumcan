import React from 'react';

import fon1 from 'src/assets/images/fon/fon1.svg';

import product from 'src/assets/images/product/product.svg';
import product3 from 'src/assets/images/product/product3.svg';

const Home: React.FC = () => {
  return (
    <section id="#" className="h-screen snap-start">
      <div className="grid grid-cols-1 md:grid-cols-[40%,30%,30%] h-screen">
        {/* Первая колонка с фоновым изображением */}
        <div
          className="h-full bg-cover bg-center bg-[#6cede4] relative"
          style={{
            backgroundImage: `url(${fon1})`, // Указывайте свой URL изображения
          }}
        >
          <img
            className="max-w-[220px] w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
            src={product}
            alt="Product 1"
          />
        </div>

        {/* Вторая колонка с простым фоном */}
        <div className="p-4 bg-[#ADFFF9] relative overflow-hidden">
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
        <div className="bg-[#00C6B8] flex justify-center items-center text-white">
          <div className="px-11">
            <h2 className="title text-4xl mb-4 text-white leading-[50px]">
              "Ichimliklar uchun alyuminiy idishlar ishlab chiqarish."
            </h2>
            <p className="leading-7 mb-4">
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

import React from 'react';

import about from 'src/assets/images/about/about1.png';
import product1 from 'src/assets/images/product/product1.svg';

const About: React.FC = () => {
  return (
    <section id="about" className="container h-screen flex snap-start">
      <div className="flex gap-20 items-center">
        <div className="w-1/2 relative">
          <img className="w-full" src={about} alt="About" />
          <img
            className="max-w-[90px] w-full absolute z-50 bottom-0 right-0"
            src={product1}
            alt="Product 1"
          />
        </div>
        <div className="w-1/2">
          <h1 className="title mb-4">Biz haqimizda</h1>
          <p className="text-midnight mb-4 flex flex-col gap-4">
            <span>
              Biz ichimliklar va boshqa sohalar uchun ekologik toza va sifatli qadoqlash
              yechimlarini taqdim etishga intiluvchi alyuminiy butilkalar ishlab chiqaruvchi
              yetakchi kompaniyamiz.
            </span>
            <span>
              Biz innovatsion yondashuv, qat’iy sifat nazorati va barqaror ishlab chiqarish
              amaliyotlarimiz bilan faxrlanamiz. Siz bilan hamkorlik qilish va biznesingiz
              muvaffaqiyatiga hissa qo‘shishdan mamnunmiz.
            </span>
          </p>
          <button className="button">Biz bilan bog’lanish</button>
        </div>
      </div>
    </section>
  );
};

export { About };

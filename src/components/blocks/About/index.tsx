import React from 'react';

import about from 'src/assets/images/about/about1.png';
import product from 'src/assets/images/product/product.svg';

const About: React.FC = () => {
  return (
    <section id="about" className="container flex lg:h-screen lg:snap-start snap-none ">
      <div className="flex flex-col items-center gap-10 lg:gap-20 lg:flex-row">
        <div className="relative w-full lg:w-1/2">
          <img className="w-full" src={about} alt="About" />
          <img
            className="max-w-[90px] w-full absolute z-30 bottom-0 right-[-20px] rotate-[20deg] lg:block hidden"
            src={product}
            alt="Product 1"
          />
        </div>
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h1 className="mb-4 title">Biz haqimizda</h1>
          <p className="flex flex-col gap-4 mb-4 text-midnight">
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

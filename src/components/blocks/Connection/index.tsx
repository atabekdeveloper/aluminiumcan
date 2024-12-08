import React from 'react';

import icon from 'src/assets/images/about/icon.svg';

const Connection: React.FC = () => {
  return (
    <section id="connection" className="relative bg-pink lg:snap-start snap-none">
      <div className="container relative z-20 flex flex-col items-center justify-between gap-5 py-14 lg:flex-row">
        <div className="w-full text-center lg:w-3/5 lg:text-left">
          <h3 className="mb-4 text-4xl text-white title">Katalogni shu yerdan yuklab oling!</h3>
          <p className="text-white">
            Biz innovatsion yondashuv, qat’iy sifat nazorati va barqaror ishlab chiqarish
            amaliyotlarimiz bilan faxrlanamiz.
          </p>
        </div>
        <button className="bg-white button text-midnight hover:bg-white/70">
          Biz bilan bog’lanish
        </button>
      </div>
      <img className="absolute bottom-0 right-0 lg:right-[25%] z-10" src={icon} alt="Icon" />
    </section>
  );
};

export { Connection };

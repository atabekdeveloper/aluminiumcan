import React from 'react';

import about2 from 'src/assets/images/about/about2.png';

const About2: React.FC = () => {
  return (
    <section id="about2" className="container h-screen flex snap-start">
      <div className="flex gap-20 items-center">
        <div className="w-2/5 relative">
          <img className="w-full" src={about2} alt="About 2" />
        </div>
        <div className="w-3/5">
          <h1 className="title mb-4">
            Nima uchun <span className="text-pink">bizni tanlashingiz</span>{' '}
            <span className="text-primary">kerak!</span>
          </h1>
          <p className="text-midnight mb-4 flex flex-col gap-4">
            <span>
              Alyuminiy shisha sof alyuminiydan, odatda 1050A (AD0) yoki 1070A (AD00) alyuminiydan
              tayyorlanadi. Shishaning ichki qismi maxsus oziq-ovqat lakining qatlami bilan
              qoplangan. Ushbu lak alyuminiyning korroziyasini oldini oladi, bu bizning
              ichimlikimizni buzishi mumkin.
            </span>
            <span>
              Aksariyat alyuminiy butilkalar ishlatilgan alyuminiy butilkalardan olinadigan qayta
              ishlangan alyuminiydan tayyorlanadi. Shunday qilib, javondan alyuminiy shisha idishni
              tanlaganingizda, siz ham atrof-muhitni muhofaza qilish uchun o'z hissangizni
              qo'shasiz.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export { About2 };

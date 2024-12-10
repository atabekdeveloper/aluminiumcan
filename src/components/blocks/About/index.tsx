import React from 'react';
import { useTranslation } from 'react-i18next';

import about from 'src/assets/images/about/about1.png';
import product1 from 'src/assets/images/product/product.svg';

const About: React.FC<{ divRef: React.RefObject<HTMLDivElement> }> = ({ divRef }) => {
  const { t } = useTranslation();
  return (
    <section id="about" className="pt-10">
      <div className="container flex flex-col items-center gap-10 lg:gap-20 lg:flex-row">
        <div className="relative w-full lg:w-1/2" ref={divRef}>
          <img className="w-full" src={about} alt="About" />
          <img
            className="max-w-[90px] w-full absolute z-30 bottom-0 right-[-20px] rotate-[20deg] hidden"
            src={product1}
            alt="Product 1"
          />
        </div>
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h1 className="mb-4 title">{t('aboutTitle')}</h1>
          <p className="flex flex-col gap-4 mb-4 text-midnight">
            <span>{t('aboutDesc1')}</span>
            <span>{t('aboutDesc2')}</span>
          </p>
          <button className="button">{t('aboutButton')}</button>
        </div>
      </div>
    </section>
  );
};

export { About };

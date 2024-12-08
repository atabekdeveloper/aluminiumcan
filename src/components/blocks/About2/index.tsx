import React from 'react';
import { useResponsive } from 'src/hooks';

import { useTranslation } from 'react-i18next';
import aboutTransparent from 'src/assets/images/about/about-transparent.png';
import about2 from 'src/assets/images/about/about2.png';

const About2: React.FC = () => {
  const { isMobile } = useResponsive(1024);
  const { t } = useTranslation();
  const lang = localStorage.getItem('lang');
  return (
    <section id="about2" className="container flex">
      <div className="flex flex-col items-center gap-20 lg:flex-row">
        <div className="relative hidden lg:w-2/5 lg:block">
          <img className="w-full" src={about2} alt="About 2" />
        </div>
        <div className="relative w-full text-center lg:text-left lg:w-3/5">
          {lang === 'UZ' ? (
            <h1 className="mb-4 title">
              Nima uchun <span className="text-pink">bizni tanlashingiz</span>{' '}
              <span className="text-primary">kerak!</span>
            </h1>
          ) : (
            <h1 className="mb-4 title">
              Почему <span className="text-pink">вам стоит</span>{' '}
              <span className="text-primary">выбрать нас!</span>
            </h1>
          )}
          <p className="text-midnight mb-4 flex flex-col gap-4 leading-[30px]">
            <span>{t('about2Desc1')}</span>
            <span>{t('about2Desc2')}</span>
          </p>
          <img
            className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            src={aboutTransparent}
            alt="About Transparent"
            hidden={!isMobile}
          />
        </div>
      </div>
    </section>
  );
};

export { About2 };

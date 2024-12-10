import React from 'react';
import { useTranslation } from 'react-i18next';

import icon from 'src/assets/images/about/icon.svg';

const Connection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="connection" className="relative bg-pink">
      <div className="container relative z-20 flex flex-col items-center justify-between gap-5 py-14 lg:flex-row">
        <div className="w-full text-center lg:w-3/5 lg:text-left">
          <h3 className="mb-4 text-4xl text-white title">{t('catalogTitle')}</h3>
          <p className="text-white">{t('catalogDesc')}</p>
        </div>
        <button className="bg-white button text-midnight hover:bg-white/70">
          {t('catalogButton')}
        </button>
      </div>
      <img className="absolute bottom-0 right-0 lg:right-[25%] z-10" src={icon} alt="Icon" />
    </section>
  );
};

export { Connection };

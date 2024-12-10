import React from 'react';
import { useTranslation } from 'react-i18next';

import fon3 from 'src/assets/images/fon/fon3.svg';
import fon4 from 'src/assets/images/fon/fon4.svg';
import tube from 'src/assets/images/tube/tube.png';
import { useResponsive } from 'src/hooks';

const AdditionalProducts: React.FC = () => {
  const { isMobile } = useResponsive(1024);
  const { t } = useTranslation();
  const aditionalProducts = [
    { img: tube, title: t('additionalProductsTitle1'), desc: t('additionalProductsDesc1') },
    { img: tube, title: t('additionalProductsTitle2'), desc: t('additionalProductsDesc2') },
    { img: tube, title: t('additionalProductsTitle3'), desc: t('additionalProductsDesc3') },
  ];
  return (
    <section id="news" className="relative overflow-hidden">
      <div className="container">
        <h2 className="title">{t('additionalProductsTitle')}</h2>
        <ul className="grid grid-cols-1 gap-10 px-10 md:gap-20 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
          {aditionalProducts.map((el, i) => (
            <li key={i} className="bg-primary rounded-[188px] overflow-hidden pt-40 pb-16 relative">
              <img className="w-full" src={el.img} alt={el.title} />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full transition-opacity opacity-0 hover:opacity-100 bg-primary/60">
                <div className="text-center">
                  <h3 className="mb-2 text-3xl title">{el.title}</h3>
                  <p className="text-midnight">{el.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="container -mt-16 -mb-10 title">{t('partnersTitle')}</h2>
      <img
        className="absolute bottom-0 left-0 right-0 w-full -z-10"
        src={isMobile ? fon4 : fon3}
        alt="Fon 3"
      />
    </section>
  );
};

export { AdditionalProducts };

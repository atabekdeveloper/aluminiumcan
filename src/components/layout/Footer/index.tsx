import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import logo from 'src/assets/images/logo3.svg';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact" className="bg-midnight">
      <div className="container text-center text-white md:text-left">
        <h2 className="text-4xl text-white title">{t('contactsTitle')}</h2>
        <p className="text-white/80 max-w-[700px] mb-8">{t('contactsDesc')}</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <input className="rounded-[100px] py-3 px-7" placeholder={t('phone')} type="text" />
          <input className="rounded-[100px] py-3 px-7" placeholder={t('name')} type="text" />
          <input className="rounded-[100px] py-3 px-7" placeholder={t('question')} type="text" />
          <button className="button">{t('contactButton')}</button>
        </div>
        <div className="flex justify-center md:justify-between items-center gap-5 pt-[100px] md:flex-row flex-col">
          <img className="max-w-[200px]" src={logo} alt="Logo" />
          <div className="flex flex-col flex-wrap items-center justify-center gap-10 md:flex-row">
            <a href="tel:+998933900107">+998 (93) 390-01-07</a>
            <a href="mailto:ikkili@mail.ru">ikkili@mail.ru</a>
            <div className="flex gap-3">
              <a
                href=""
                className="flex items-center justify-center w-10 h-10 border border-white rounded-full"
              >
                <FaLinkedinIn />
              </a>
              <a
                href=""
                className="flex items-center justify-center w-10 h-10 border border-white rounded-full"
              >
                <FaFacebookF />
              </a>
              <a
                href=""
                className="flex items-center justify-center w-10 h-10 border border-white rounded-full"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

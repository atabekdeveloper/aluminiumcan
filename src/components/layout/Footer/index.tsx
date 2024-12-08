import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import logo from 'src/assets/images/logo3.svg';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-midnight">
      <div className="container text-center text-white md:text-left">
        <h2 className="text-4xl text-white title">Savollaringiz bormi?</h2>
        <p className="text-white/80 max-w-[700px] mb-8">
          Agar savollaringiz bo’lsa yoki biz bilan birga ishlashni istasangiz raqamingizni
          qoldiring. Biz siz bilan eng qisqa muddatta bog’lanamiz
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <input className="rounded-[100px] py-3 px-7" placeholder="Raqamingiz" type="text" />
          <input className="rounded-[100px] py-3 px-7" placeholder="Ismingiz" type="text" />
          <input
            className="rounded-[100px] py-3 px-7"
            placeholder="Qanday savol bo’yicha?"
            type="text"
          />
          <button className="button">Yuborish</button>
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

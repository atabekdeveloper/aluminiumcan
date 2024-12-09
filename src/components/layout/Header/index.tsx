import React, { useEffect, useRef, useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { VscMenu } from 'react-icons/vsc';
import logo from 'src/assets/images/logo1.svg';
import logo3 from 'src/assets/images/logo3.svg';

// Language options
const options = ['UZ', 'RU'];

export const Header: React.FC = () => {
  const langStorage = localStorage.getItem('lang');
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lang, setLang] = useState(langStorage || 'UZ');

  // Navigation items with hardcoded translations
  const navItems = [
    { title: lang === 'UZ' ? 'Biz haqimizda' : 'О нас', link: '#about' },
    { title: lang === 'UZ' ? 'Mahsulotlarimiz' : 'Наши продукты', link: '#products' },
    { title: lang === 'UZ' ? 'Yangiliklar' : 'Новости', link: '#news' },
    { title: lang === 'UZ' ? 'Bizni tanlaganlar' : 'Наши клиенты', link: '#partners' },
    { title: lang === 'UZ' ? 'Kamentlar' : 'Комментарии', link: '#comments' },
  ];

  // Change language
  const handleChangeLanguage = (value: string) => {
    localStorage.setItem('lang', value);
    setLang(value);
    setIsDropdownOpen(false);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Close dropdown on outside click
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !buttonRef.current?.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full backdrop-blur-lg shadow-lg transition-all ${
        scrolled ? 'bg-midnight' : 'bg-white/5'
      }`}
    >
      <div className="container flex items-center justify-between py-7">
        {/* Logo */}
        <a href="#" onClick={() => handleScrollTo('#')}>
          <img
            className="transition-transform duration-500"
            src={scrolled ? logo3 : logo}
            alt="Logo"
          />
        </a>

        {/* Language and Menu Options */}
        <div className="relative flex items-center gap-6 lg:gap-10">
          {/* Desktop Navigation */}
          <nav className="hidden space-x-4 lg:flex">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded hover:underline ${
                  scrolled ? 'text-white' : 'text-[#333]'
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>
          <button
            ref={buttonRef}
            className={`lg:flex items-center gap-2 ${
              scrolled ? 'text-white' : 'text-[#333]'
            } hidden`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <GrLanguage size={20} />
          </button>
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 hidden w-20 py-2 bg-white rounded shadow top-10 lg:block"
            >
              {options.map((option) => (
                <div
                  key={option}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                    lang === option ? 'font-bold' : ''
                  }`}
                  onClick={() => handleChangeLanguage(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${scrolled ? 'text-white' : 'text-[#333]'} lg:hidden z-20`}
          >
            <VscMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed right-0 w-[200px] py-6 bg-white rounded shadow top-20 flex flex-col text-right">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="px-5 py-3 cursor-pointer hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
          {/* Language and Menu Options */}
          <div className="relative flex justify-end gap-6 px-5 pt-2 lg:gap-10">
            <button
              ref={buttonRef}
              className="flex items-center gap-2 text-[#333]"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <GrLanguage size={20} />
            </button>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 w-20 py-2 bg-white rounded shadow top-10"
              >
                {options.map((option) => (
                  <div
                    key={option}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                      lang === option ? 'font-bold' : ''
                    }`}
                    onClick={() => handleChangeLanguage(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

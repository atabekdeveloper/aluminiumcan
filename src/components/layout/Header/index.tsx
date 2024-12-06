import React, { useEffect, useRef, useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { TbMenuDeep, TbX } from 'react-icons/tb';
import logo from 'src/assets/images/logo1.svg';

// Language options
const options = ['UZ', 'RU'];

export const Header: React.FC = () => {
  const langStorage = localStorage.getItem('lang');
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

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/10 backdrop-blur-lg shadow-lg">
      <div className="container flex items-center justify-between py-7">
        {/* Logo */}
        <a href="#" onClick={() => handleScrollTo('#')}>
          <img className="transition-transform duration-500" src={logo} alt="Logo" />
        </a>

        {/* Language and Menu Options */}
        <div className="relative flex items-center gap-6 lg:gap-10">
          {/* Desktop Navigation */}
          <nav className="hidden space-x-4 lg:flex">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(item.link.substring(1));
                }}
                className="px-3 py-2 text-sm font-medium text-[#333] transition-colors rounded hover:underline"
              >
                {item.title}
              </a>
            ))}
          </nav>
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

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#333] lg:hidden z-20">
            {isMenuOpen ? <TbX className="text-white" size={24} /> : <TbMenuDeep size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 bottom-0 w-full h-screen flex flex-col items-center gap-4 justify-center bg-black bg-opacity-90">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="text-xl text-white hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

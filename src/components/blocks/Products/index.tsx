import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import fon2 from 'src/assets/images/fon/fon2.svg';
import product1 from 'src/assets/images/product/product1.svg';

import { useProducts } from 'src/hooks';

const Products: React.FC<{ divRef: React.RefObject<HTMLLIElement> }> = ({ divRef }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const products = useProducts();
  const handleClickProduct = (id: number) => {
    localStorage.setItem('productId', `${id}`);
    navigate('/product');
  };
  return (
    <section id="products" className="relative">
      <div className="container">
        <h1 className="title">{t('productsTitle')}</h1>
        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[170px]">
          <li ref={divRef} className="text-center text-midnight lg:text-left">
            <img
              className="w-[180px] h-[180px] md:h-[240px] lg:h-[450px] object-contain mb-5 lg:mb-0 mx-auto opacity-100 lg:opacity-0"
              src={product1}
              alt="Product 1"
            />
            <h3 className="mb-5 text-xl font-medium">Kategoriyasi</h3>
            <p className="mb-5 text-sm md:text-base">
              Biz ichimliklar va boshqa sohalar uchun ekologik toza va sifatli
            </p>
            <button onClick={() => handleClickProduct(1)} className="button">
              {t('productButton')}
            </button>
          </li>
          {products.map((product, i) => (
            <li key={i} className="text-center text-midnight lg:text-left">
              <img
                className="w-[180px] h-[180px] md:h-[240px] lg:h-[450px] object-contain mb-5 lg:mb-0 mx-auto"
                src={product.img}
                alt={product.title}
              />
              <h3 className="mb-5 text-xl font-medium">{product.title}</h3>
              <p className="mb-5 text-sm md:text-base">{product.desc}</p>
              <button onClick={() => handleClickProduct(product.id)} className="button">
                {t('productButton')}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <img
        className="absolute w-full max-w-[1500px] top-0 lg:-top-[300px] right-0 -z-10 opacity-40"
        src={fon2}
        alt="Fon 2"
      />
    </section>
  );
};

export { Products };

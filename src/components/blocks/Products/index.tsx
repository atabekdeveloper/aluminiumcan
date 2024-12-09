import React from 'react';

import product1 from 'src/assets/images/product/product1.svg';
import product2 from 'src/assets/images/product/product2.svg';
import product3 from 'src/assets/images/product/product3.svg';
import product4 from 'src/assets/images/product/product4.svg';
import product5 from 'src/assets/images/product/product5.svg';
import product6 from 'src/assets/images/product/product6.svg';

import fon2 from 'src/assets/images/fon/fon2.svg';

const products = [
  {
    img: product2,
    title: 'Kategoriyasi',
    desc: 'Biz ichimliklar va boshqa sohalar uchun ekologik toza va sifatli',
  },
  {
    img: product3,
    title: 'Kategoriyasi',
    desc: 'Biz ichimliklar va boshqa sohalar uchun ekologik toza va sifatli',
  },
  {
    img: product4,
    title: 'Kategoriyasi',
    desc: 'Biz ichimliklar va boshqa sohalar uchun ekologik toza va sifatli',
  },
  {
    img: product5,
    title: 'Kategoriyasi',
    desc: 'Biz ichimliklar va boshqa sohalar uchun ekologik toza va sifatli',
  },
  {
    img: product6,
    title: 'Kategoriyasi',
    desc: 'Biz ichimliklar va boshqa sohalar uchun ekologik toza va sifatli ',
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="relative">
      <div className="container">
        <h1 className="title">Biz ishlab chiqargan maxsulotlar</h1>
        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[170px]">
          <li className="text-center text-midnight lg:text-left">
            <img
              className="w-[200px] h-[180px] md:h-[300px] lg:h-[450px] object-contain mb-5 lg:mb-0 mx-auto"
              src={product1}
              alt="Kategoriyasi"
            />
            <h3 className="mb-5 text-xl font-medium">Kategoriyasi</h3>
            <p className="mb-5 text-sm md:text-base">
              Biz ichimliklar va boshqa sohalar uchun ekologik toza va sifatli
            </p>
            <button className="button">Tanishish</button>
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
              <button className="button">Tanishish</button>
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

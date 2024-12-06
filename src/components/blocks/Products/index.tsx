import React from 'react';

import product1 from 'src/assets/images/product/product1.svg';
import product2 from 'src/assets/images/product/product2.svg';
import product3 from 'src/assets/images/product/product3.svg';
import product4 from 'src/assets/images/product/product4.svg';
import product5 from 'src/assets/images/product/product5.svg';
import product6 from 'src/assets/images/product/product6.svg';

const products = [
  {
    img: product1,
    title: 'Kategoriyasi',
    desc: 'Biz ichimliklar va boshqa sohalar uchun ekologik toza va sifatli ',
  },
  {
    img: product2,
    title: 'Kategoriyasi',
    desc: 'Biz ichimliklar va boshqa sohalar uchun ekologik toza va sifatli ',
  },
  {
    img: product3,
    title: 'Kategoriyasi',
    desc: 'Biz ichimliklar va boshqa sohalar uchun ekologik toza va sifatli ',
  },
  {
    img: product4,
    title: 'Kategoriyasi',
    desc: 'Biz ichimliklar va boshqa sohalar uchun ekologik toza va sifatli ',
  },
  {
    img: product5,
    title: 'Kategoriyasi',
    desc: 'Biz ichimliklar va boshqa sohalar uchun ekologik toza va sifatli ',
  },
  {
    img: product6,
    title: 'Kategoriyasi',
    desc: 'Biz ichimliklar va boshqa sohalar uchun ekologik toza va sifatli ',
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="scroll-snap-align relative">
      <div className="container">
        <h1 className="title">Biz ishlab chiqargan maxsulotlar</h1>
        <ul className="grid grid-cols-3 gap-[170px]">
          {products.map((product, i) => (
            <li key={i} className="text-midnight">
              <img
                className="w-[180px] h-[450px] object-contain"
                src={product.img}
                alt={product.title}
              />
              <h3 className="mb-5 text-xl font-medium">{product.title}</h3>
              <p className="mb-5">{product.desc}</p>
              <button className="button">Tanishish</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Products };

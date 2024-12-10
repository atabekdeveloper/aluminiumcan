import { useTranslation } from 'react-i18next';
import product2 from 'src/assets/images/product/product2.svg';
import product3 from 'src/assets/images/product/product3.svg';
import product4 from 'src/assets/images/product/product4.svg';
import product5 from 'src/assets/images/product/product5.svg';
import product6 from 'src/assets/images/product/product6.svg';

export const useProducts = () => {
  const { t } = useTranslation();
  const products = [
    {
      id: 2,
      img: product2,
      title: t('productTitle2'),
      desc: t('productDesc2'),
    },
    {
      id: 3,
      img: product3,
      title: t('productTitle3'),
      desc: t('productDesc3'),
    },
    {
      id: 4,
      img: product4,
      title: t('productTitle4'),
      desc: t('productDesc4'),
    },
    {
      id: 5,
      img: product5,
      title: t('productTitle5'),
      desc: t('productDesc5'),
    },
    {
      id: 6,
      img: product6,
      title: t('productTitle6'),
      desc: t('productDesc6'),
    },
  ];
  return products;
};

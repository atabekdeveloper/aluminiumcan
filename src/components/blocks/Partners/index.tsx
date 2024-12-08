import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

import blackSwiper1 from 'src/assets/images/swiper/blackSwiper1.png';
import blackSwiper2 from 'src/assets/images/swiper/blackSwiper2.png';
import whiteSwiper1 from 'src/assets/images/swiper/whiteSwiper1.png';
import whiteSwiper2 from 'src/assets/images/swiper/whiteSwiper2.png';

const partners1 = [
  blackSwiper1,
  blackSwiper2,
  blackSwiper1,
  blackSwiper2,
  blackSwiper1,
  blackSwiper2,
  blackSwiper1,
  blackSwiper2,
];
const partners2 = [
  whiteSwiper1,
  whiteSwiper2,
  whiteSwiper1,
  whiteSwiper2,
  whiteSwiper1,
  whiteSwiper2,
  whiteSwiper1,
  whiteSwiper2,
];

const Partners: React.FC = () => {
  return (
    <section id="partners">
      <ScrollCarousel autoplay>
        {partners1.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[256px] -mx-2 border-x border-white bg-primary py-8"
          >
            <img className="w-[110px] h-[110px]" src={item} />
          </div>
        ))}
      </ScrollCarousel>
      <ScrollCarousel autoplay direction="ltr">
        {partners2.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[256px] -mx-2 border-x border-white bg-midnight py-8"
          >
            <img className="w-[110px] h-[110px]" src={item} />
          </div>
        ))}
      </ScrollCarousel>
    </section>
  );
};

export { Partners };

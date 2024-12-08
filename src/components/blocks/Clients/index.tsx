import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import client1 from 'src/assets/images/clients/client1.png';
import client1Banner from 'src/assets/images/clients/client1Banner.png';

const Clients: React.FC = () => {
  return (
    <section id="comments" className="bg-pink">
      <div className="container px-10 md:px-0">
        <h2 className="title">Mijozlarimiz izohlari</h2>
        <div className="bg-white rounded-[50px] md:rounded-[180px] px-10 py-5 flex items-center gap-5 relative md:flex-row flex-col">
          <div className="flex items-center">
            <img className="max-w-[130px] md:max-w-[220px]" src={client1} alt="Client" />
            <div className="max-w-[400px]">
              <h3 className="mb-2 text-xl md:text-2xl title">Malika Yunusova</h3>
              <p className="text-xs text-midnight/80 md:text-base line-clamp-5">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare."
              </p>
            </div>
          </div>
          <div className="rounded-[80px] overflow-hidden w-full md:w-[400px] h-32 md:h-40">
            <img className="object-cover w-full h-full" src={client1Banner} alt="Banner" />
          </div>
          <button className="absolute flex items-center justify-center w-16 h-16 text-white -translate-y-1/2 rounded-full -left-8 bg-primary top-1/2">
            <FaChevronLeft size={30} />
          </button>
          <button className="absolute flex items-center justify-center w-16 h-16 text-white -translate-y-1/2 rounded-full -right-8 bg-primary top-1/2">
            <FaChevronRight size={30} />
          </button>
        </div>
      </div>
    </section>
  );
};

export { Clients };

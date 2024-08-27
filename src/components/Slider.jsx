import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-scroll';

import imageSlide from '../data/data';
import '../index.css';

const Slider = () => {
  return (
    <div>
        <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-screen"
      >
        {imageSlide.map((slide, index) => (
          <SwiperSlide key={index} className='w-full h-full'>
            <div
              className='w-full h-full'
              style={{
                backgroundImage: `url(${slide.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent flex flex-col px-16 items-start justify-center p-4">
                <h6 className="text-white text-sm uppercase mb-2">{slide.title}</h6>
                <h1 className="text-white lg:w-1/2 text-5xl font-bold mb-4">{slide.subtitle}</h1>
                <p className="text-gray-200 text-sm lg:w-1/3 mb-4">{slide.description}</p>
                <Link to={slide.link}
                smooth={true}
                duration={500}
                 className='bg-transparent border border-[#fff] text-white px-7 py-3 mt-4 uppercase rounded-full text-sm hover:text-white hover:bg-black hover:border-black'>
                  {slide.linkText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
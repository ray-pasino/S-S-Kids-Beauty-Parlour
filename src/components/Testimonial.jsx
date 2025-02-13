import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import person1 from '/images/person1.jpg';
import person3 from '/images/person3.jpg';
import person2 from '/images/person2.jpg';
import ParallaxImg from '/img5.jpg';

const Testimonial = () => {
  return (
    <div className='relative h-full w-full xl:px-28 px-4 pb-5'
    style={{
      backgroundImage: `url(${ParallaxImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      objectFit: 'cover' 
    }}>

        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h6 className='relative uppercase text-center text-xs tracking-[3px] pt-24 font-semibold text-white'>Testimonials</h6>
           <div className='flex flex-col justify-center items-center'>
              <h2 className='text-center text-5xl font-bold my-3 text-white z-10'>Hear from our customers</h2>
              <p className='text-center text-md md:w-1/2 text-slate-100 z-10'>Here’s what our clients are saying:</p>
           </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mt-10 w-full md:w-2/3"
        >
           <SwiperSlide>
            <div className='flex flex-col items-center justify-center space-y-2 mb-10'>
              <h4 className='text-sm leading-6 capitalize md:text-md text-center md:w-2/3 text-white'>I had so much fun getting my hair styled here. The stylists are really good at making my hair look awesome.
              </h4>
              <img src={person1} alt="client image" className='rounded-full w-[50px] h-[50px] object-cover' />
              <h6 className='mt-4 text-xs md:text-sm uppercase text-white text-center'>~Tiana Jones</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='flex flex-col items-center justify-center space-y-2 mb-10'>
              <h4 className='text-sm leading-6 capitalize md:text-md text-center md:w-2/3 text-white'>I was not scared at all. The barbers made me feel comfortable and told me funny stories while they worked.</h4>
              <img src={person3} alt="client image" className='rounded-full w-[50px] h-[50px] object-cover' />
              <h6 className='mt-4 text-xs md:text-sm uppercase text-white text-center'>~Micheal Livingston</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='flex flex-col items-center justify-center space-y-2 mb-10'>
              <h4 className='text-sm leading-6 capitalize md:text-md text-center md:w-2/3 text-white'>I was nervous about taking my toddler for a haircut, but the staff was so gentle and patient with him. He had a great experience and loves his new look.</h4>
              <img src={person2} alt="client image" className='rounded-full w-[50px] h-[50px] object-cover' />
              <h6 className='mt-4 text-xs md:text-sm uppercase text-white text-center'>~Daniel Doe</h6>
            </div>
          </SwiperSlide>
        </Swiper>
        
    </div>
  )
}

export default Testimonial

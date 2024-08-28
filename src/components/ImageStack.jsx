import React from 'react';
import BarberBg from '/images/img4.jpg';
import BarberImg from '/images/barberBg3.jpg';
import BgImg from '/images/img3.jpg';


const imageStack = () => {
  return (
    <div className='relative flex justify-center items-center h-[600px] mb-12 -mt-12 px-2'>
        <div className='relative'>
            <div className='bg-black w-[200px] h-[300px]'></div>
            <img src={BarberBg} alt="little boy receiving stylish hairstyle" loading="lazy"  className='absolute top-0 left-1/2 transform -translate-x-44 border-none rounded-sm w-[300px] h-[200px] object-cover z-10' />
            <img src={BarberImg} alt="little boy about receive a haircut" loading="lazy"  className='absolute top-[30px] left-1/2 transform -translate-x-[10%] border-none rounded-sm w-[200px] h-[250px] object-cover z-20' />
            <img src={BgImg} alt="little girl with braids" loading="lazy"  className='absolute top-[170px] left-1/2 transform -translate-x-[50%] border-none rounded-sm w-[200px] h-[250px] object-cover z-30' />
        </div>
    </div>

  )
}

export default imageStack
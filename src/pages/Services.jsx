import React from 'react';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/Cards'

const Services = () => {
  return (
    <main className='max-w-screen-7xl mx-auto overflow-x-hidden'>
        <Navbar />
        <div className='h-[450px] relative overflow-hidden w-full'
        style={{
          backgroundImage: 'url(/images/barberBg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover' 
        }}
      >
        <div className='w-full h-full'>
          <div className="absolute inset-0 bg-black bg-opacity-45 flex flex-col items-center justify-center text-center">
          <h6 className='uppercase text-center text-xs tracking-[3px] font-semibold text-slate-50'>Our Services</h6>
           <div className='flex flex-col justify-center items-center '>
              <h2 className='text-center text-4xl font-bold my-3 text-white'>Legendary haircut with
              traditional service.</h2>
              <p className='text-center w-1/2 text-slate-200'>There is a distinction between a beauty salon and a hair salon and although many small businesses.</p>
           </div>
          </div>
        </div>
        </div>
        <section className='bg-[#eeeeee66]'>
        <ServiceCard />
        </section>
    </main>
  )
}

export default Services
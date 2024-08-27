import React from 'react';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/Cards'
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

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
        <section>
      <div className='relative h-[500px] xl:px-28 px-4  bg-black'
        style={{
          backgroundImage: 'url(/images/services.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          objectFit: 'cover'
        }}
      >
        <div className='absolute inset-0 bg-black opacity-55'></div>
        <div className='relative z-10 w-full flex flex-col md:flex-row items-center justify-center object-cover'>
          <div className='md:w-1/2 my-20 flex items-center flex-col'>
            <h6 className="text-gray-100 text-xs text-center font-medium uppercase tracking-[3px] mb-5">The Supercut Salon</h6>
            <h2 className="text-white text-5xl text-center font-bold mt-2 capitalize mb-6">Revitalize your senses and Refresh your mind.</h2>
            <p className="text-gray-100 text-center font-medium text-sm leading-5">There is a distinction between a beauty salon and a hair salon and although many small
            businesses do offer both sets of treatments.</p>
          <Button className="text-white hover:border-black border border-white w-[100px] my-7">Book Now</Button>
          </div>
        </div>
      </div>
    </section>
    <section className='pt-10'>
        <Footer />
    </section>
    </main>
  )
}

export default Services
import React from 'react';
import Navbar from '@/components/Navbar';
import ImageStack from '@/components/ImageStack';
import { Button } from '@/components/ui/button';
import { ScissorsIcon } from 'lucide-react';

const About = () => {
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
          <h6 className='uppercase text-center text-xs tracking-[3px] font-semibold text-slate-50'>About Us</h6>
           <div className='flex flex-col justify-center items-center '>
              <h2 className='text-center text-4xl font-bold my-3 text-white'>Legendary haircut with
              traditional service.</h2>
              <p className='text-center w-1/2 text-slate-200'>There is a distinction between a beauty salon and a hair salon and although many small businesses.</p>
           </div>
          </div>
        </div>
        </div>
        <section className="min-h-screen my-2">
        <div className="px-6 xl:px-24 flex flex-col justify-evenly lg:flex-row-reverse items-center">
          {/* Text Content */}
          <div className="space-y-5 text-center lg:text-left lg:w-1/2">
            <h6 className="text-xs font-semibold uppercase tracking-[2px]">Introducing</h6>
            <h2 className="text-5xl font-bold">
            S<span className="inline-block align-middle"><ScissorsIcon className="flex items-center  w-8 h-8" /></span>S   
            <br />KIDS BEAUTY PALOUR</h2>
            <p className="text-xs">
              There is a distinction between a beauty salon and a hair salon, and although many small businesses do offer both sets of treatments, beauty salons provide extended services related to skin health.
            </p>
            <Button className="text-black hover:text-white border border-black w-[200px] mx-auto">Book An Appointment</Button>
          </div>

          {/* Image Container */}
            <ImageStack />
        </div>
      </section>
      <section >
        <div className="container mx-auto px-8 xl:px-28">
            <h6 className="text-xs font-semibold uppercase tracking-[2px] text-blackmb-5">Our Commitment</h6>
            <h2 className="text-4xl md:text-5xl font-semibold text-black ">A Safe and Fun Environment</h2>
            <div className="grid grid-cols md:grid-cols-2 mt-11 gap-x-12 gap-y-16">
            <h5 className="text-xl font-semibold capitalize text-black mb-5">Creating Memories, One Haircut at a Time</h5>
            <div className="">
                <p className="text-black/50 font-medium font-montserrat text-sm text-left">At S&S Kids Beauty Palour, we prioritize creating a safe and welcoming environment where children can feel comfortable and relaxed. Our salon is designed with kids in mind, featuring playful decor and engaging activities. We understand that visiting a salon can be a new experience for some children, so our team is always patient, gentle, and understanding.</p>
                <br />
                <p className="text-black/50 font-medium font-montserrat text-sm text-left">We're committed to providing a fun and memorable experience for every child who visits our salon. From the moment they walk in to the moment they leave, we strive to make them feel special and appreciated.</p>
            </div>
            </div>
        </div>
      </section>
    </main>
  )
}

export default About
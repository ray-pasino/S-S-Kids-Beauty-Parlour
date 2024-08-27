import React from 'react';
import Navbar from '@/components/Navbar';
import ImageStack from '@/components/ImageStack';
import { Button } from '@/components/ui/button';
import { ScissorsIcon } from 'lucide-react';
// import AboutImage from '/images/Aboutpic.jpg';
import Footer from '@/components/Footer';

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
        <section className="mt-12">
        <div className="px-6 xl:px-24 flex flex-col justify-around lg:flex-row items-center">
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
    
    <section className='bg-[#eeeeee66] py-24'>
        <div className="container mx-auto px-8 xl:px-28">
            <h6 className="text-xs font-semibold uppercase tracking-[2px] text-black mb-5">Our Commitment</h6>
            <h2 className="text-4xl md:text-5xl font-semibold text-black ">A Safe and Fun Environment</h2>
            <div className="grid grid-cols md:grid-cols-2 mt-11 gap-x-12 gap-y-16">
                <h5 className="text-xl font-semibold capitalize text-black mb-5">Creating Memories, One Haircut at a Time</h5>
                <div className="">
                <p className="text-black/50 font-medium text-sm text-left">At S&S Kids Beauty Palour, we prioritize creating a safe and welcoming environment where children can feel comfortable and relaxed. Our salon is designed with kids in mind, featuring playful decor and engaging activities. We understand that visiting a salon can be a new experience for some children, so our team is always patient, gentle, and understanding.</p>
                <br />
                <p className="text-black/50 font-medium text-sm text-left">We are committed to providing a fun and memorable experience for every child who visits our salon. From the moment they walk in to the moment they leave, we strive to make them feel special and appreciated.</p>
                </div>
            </div>
                {/* <img src={AboutImage} alt="" className='w-[400px] h-[400px] object-cover -mt-28'/> */}
        </div>
    </section>
    <section>
      <div className='relative h-[500px] xl:px-28 px-4  bg-black'
        style={{
          backgroundImage: 'url(/images/img2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          objectFit: 'cover'
        }}
      >
        <div className='absolute inset-0 bg-black opacity-55'></div>
        <div className='relative z-10 w-full flex flex-col md:flex-row items-center justify-center object-cover'>
          <div className='md:w-1/2 my-20'>
            <h6 className="text-gray-100 text-xs text-center font-medium uppercase tracking-[3px] mb-5">Our Expertise</h6>
            <h2 className="text-white text-5xl text-center font-bold mt-2 capitalize mb-6">Expert Care, Personalized Touch</h2>
            <p className="text-gray-100 text-center font-medium text-sm leading-5">Our team of skilled and experienced professionals is passionate about providing top-notch services tailored to each childs unique needs. We believe in creating a personalized experience where kids feel valued and empowered. From haircuts and styling to manicures and pedicures, we offer a range of services designed to make them feel their best.</p>
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

export default About
import React from 'react';
import './index.css';
import Navbar from '@/components/Navbar';
// import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll'; // Import from react-scroll
import ServiceCard from '@/components/Cards';
import Slider from '@/components/Slider';
import ImageStack from '@/components/ImageStack';
import { ScissorsIcon } from 'lucide-react';
import Parallax from '@/components/Parallax';
import PricingList from '@/components/PricingList';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import AnimatedSection from './components/AnimatedSection';


function App() {

  return (
    <main className='max-w-screen-7xl mx-auto overflow-x-hidden'>
      <Navbar />

      <section id='home' className='min-h-screen w-full'>
        <Slider />
      </section>

      {/* About Section */}
      <AnimatedSection>
      <section id='about' className="h-full my-14 w-full">
        <div className="px-6 xl:px-24 flex flex-col justify-around lg:flex-row-reverse items-center">
          {/* Text Content */}
          <div className="space-y-5 text-center lg:text-left lg:w-1/2">
            <h6 className="text-xs font-semibold uppercase tracking-[2px]">Introducing</h6>
            <h2 className="text-5xl font-bold">
            S<span className="inline-block align-middle"><ScissorsIcon className="flex items-center  w-8 h-8" /></span>S   
            <br />KIDS BEAUTY PALOUR</h2>
            <p className="text-sm">
            S&S Kids Beauty Parlour provides top-notch grooming experiences for children and teens, with a strong focus on excellent customer service.
            </p>
            <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-black hover:text-white border hover:bg-black border-black w-[250px]  px-10 py-3 rounded-full flex mx-10 md:mx-auto xl:-mx-1"
                    >Book An Appointment
            </Link>
          </div>

          {/* Image Container */}
            <ImageStack />
        </div>
      </section>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection>
      <section id='services' className='h-full -mt-20 bg-[#eeeeee66] w-full'> 
           <h6 className='uppercase text-center text-xs tracking-[3px] pt-24 font-semibold'>Services</h6>
           <div className='flex flex-col justify-center items-center'>
              <h2 className='text-center text-5xl font-bold my-3'>Our Services</h2>
              <p className='text-center md:w-1/2'>S&S Kids Beauty Parlour offers tailored services including trimming, hair washing, braiding, and shaving, with expertise and dedication.</p>
           </div>
           <ServiceCard />
      </section>
      </AnimatedSection>

      <AnimatedSection>
      <section className='h-full w-full'>
        <Parallax />
      </section>
      </AnimatedSection>

      {/* Pricing */}
      <AnimatedSection>
      <section id='pricing' className='h-full bg-[#eeeeee66] w-full'>
      <h6 className='uppercase text-center text-xs tracking-[3px] pt-24 font-semibold'>Pricing</h6>
           <div className='flex flex-col justify-center items-center'>
              <h2 className='text-center text-5xl font-bold my-3'>Pricing Plans</h2>
              <p className='text-center md:w-1/2'>At S&S Kids Beauty Parlour, we offer high-quality grooming services with transparent pricing. Visit us and see why parents prefer us for their kids grooming needs.</p>
           </div>
           <PricingList />
      </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
      <section id='testimonials' className='h-full w-full'>
        <Testimonial />
      </section>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection>
      <section id='contact' className='h-full bg-[#eeeeee66] w-full'>
        <Contact />
      </section>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection>
      <section className='pt-10 w-full'>
         <Footer />
      </section>
      </AnimatedSection>
    </main>
  )
}

export default App;  

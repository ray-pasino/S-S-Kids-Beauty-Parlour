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


function App() {

  return (
    <main className='max-w-screen-7xl mx-auto overflow-x-hidden'>
      <Navbar />

      <section id='home' className='min-h-screen'>
        <Slider />
      </section>

      {/* About Section */}
      <section id='about' className="min-h-screen my-14">
        <div className="px-6 xl:px-24 flex flex-col justify-around lg:flex-row-reverse items-center">
          {/* Text Content */}
          <div className="space-y-5 text-center lg:text-left lg:w-1/2">
            <h6 className="text-xs font-semibold uppercase tracking-[2px]">Introducing</h6>
            <h2 className="text-5xl font-bold">
            S<span className="inline-block align-middle"><ScissorsIcon className="flex items-center  w-8 h-8" /></span>S   
            <br />KIDS BEAUTY PALOUR</h2>
            <p className="text-sm">
              There is a distinction between a beauty salon and a hair salon, and although many small businesses do offer both sets of treatments, beauty salons provide extended services related to skin health.
            </p>
            <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-black hover:text-white border hover:bg-black border-black w-[250px]  px-10 py-3 rounded-full flex mx-10 lg:-mx-1"
                    >Book An Appointment
            </Link>
          </div>

          {/* Image Container */}
            <ImageStack />
        </div>
      </section>

      {/* Services */}
      <section id='services' className='min-h-screen -mt-20 bg-[#eeeeee66]'> 
           <h6 className='uppercase text-center text-xs tracking-[3px] pt-24 font-semibold'>Services</h6>
           <div className='flex flex-col justify-center items-center'>
              <h2 className='text-center text-5xl font-bold my-3'>Our Services</h2>
              <p className='text-center w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ab cumque non, similique sequi modi assumenda vel in amet quae.</p>
           </div>
           <ServiceCard />
      </section>

      <section className='min-h-screen'>
        <Parallax />
      </section>

      <section id='pricing' className='min-h-screen bg-[#eeeeee66]'>
      <h6 className='uppercase text-center text-xs tracking-[3px] pt-24 font-semibold'>Pricing</h6>
           <div className='flex flex-col justify-center items-center'>
              <h2 className='text-center text-5xl font-bold my-3'>Pricing Plans</h2>
              <p className='text-center w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ab cumque non, similique sequi modi assumenda vel in amet quae.</p>
           </div>
           <PricingList />
      </section>

      <section id='testimonials'>
        <Testimonial />
      </section>

      <section id='contact' className='min-h-screen bg-[#eeeeee66] mx-auto'>
        <Contact />
      </section>

      <section className='pt-10'>
         <Footer />
      </section>
    </main>
  )
}

export default App;  

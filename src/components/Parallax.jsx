import React from 'react';
// import { Button } from './ui/button';
import {Goal} from 'lucide-react';
import { Link } from 'react-scroll'; // Import from react-scroll
import ParallaxImg from '/Parallax3.jpg';

const Parallax = () => {
  return (
    <div className='relative h-full xl:px-28 px-4 '
    style={{
        backgroundImage: `url(${ParallaxImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        objectFit: 'cover' 
      }} >
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='relative z-10 w-full flex flex-col md:flex-row items-center justify-between object-cover'>
        <div className='md:w-[400px] md:h-[auto] mx-auto text-center my-16 p-8 border-none rounded-2xl bg-[#f8f8f8] shadow-xl'>
            <h2 className='font-semibold text-4xl mb-4 text-[#004085]'>Working Hours</h2>
            <p className='text-lg mb-3 text-[#333]'>SUNDAY 10AM - 8PM</p>
            <p className='text-lg mb-3 text-[#333]'>MONDAY 10AM - 8PM</p>
            <p className='text-lg mb-3 text-[#333]'>TUESDAY 10AM - 8PM</p>
            <p className='text-lg mb-3 text-[#333]'>WEDNESDAY 10AM - 8PM</p>
            <p className='text-lg mb-3 text-[#333]'>THURSDAY 10AM - 8PM</p>
            <p className='text-lg mb-3 text-[#333]'>FRIDAY 10AM - 8PM</p>
            <p className='text-lg text-[#333]'>SATURDAY 10AM - 8PM</p>

            <div className='mx-auto mt-11'>
            <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-black hover:text-white hover:border-black hover:bg-black border border-black w-[150px] mx-auto px-7 py-3 rounded-full"
                    >Book Now
            </Link>
            </div>
        </div>

        <div className='md:w-[400px] md:h-[auto] mx-auto text-center my-16 p-8 border-none rounded-xl bg-transparent'>
            <h2 className='font-bold text-4xl mb-4 text-[#ebebeb]'>Why Choose Us?</h2>
            <h5 className='text-lg mb-3 font-bold text-[#fff]'>In addition, there 5 more reasons why people prefer S&S Kids Beauty Palour:</h5>
            <p className='text-md mb-3 text-[#fff] flex items-center justify-center gap-x-3'><span><Goal /></span> Always welcoming environment</p>
            <p className='text-md mb-3 text-[#fff] flex items-center justify-center gap-x-3'><span><Goal /></span> Our masters focus on quality</p>
            <p className='text-md mb-3 text-[#fff] flex items-center justify-center gap-x-3'><span><Goal /></span> We value both the time and money of our clients</p>
            <p className='text-md mb-3 text-[#fff] flex items-center justify-center gap-x-3'><span><Goal /></span> All surfaces and tools are cleaned, disinfected before and after using</p>
            <p className='text-md mb-3 text-[#fff] flex items-center justify-center gap-x-3'><span><Goal /></span>We work only with high-quality, hypoallergenic premium products</p>

            <div className='mx-auto mt-10'>
            <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-white hover:text-white hover:border-black hover:bg-black border border-white w-[150px] mx-auto px-7 py-3 rounded-full"
                    >Book Now
            </Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Parallax
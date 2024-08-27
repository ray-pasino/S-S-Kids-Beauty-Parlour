import React from 'react';
import { Button } from './ui/button';
import {Goal} from 'lucide-react';

const Parallax = () => {
  return (
    <div className='relative min-h-screen bg-[url("public/images/parallax3.jpg")] bg-cover xl:px-28 px-4 bg-fixed  bg-no-repeat object-cover'>
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
                <Button className="text-black hover:text-white border border-black w-[100px] mx-auto">Book Now</Button>
            </div>
        </div>

        <div className='md:w-[400px] md:h-[auto] mx-auto text-center my-16 p-8 border-none rounded-xl bg-transparent shadow-xl'>
            <h2 className='font-bold text-4xl mb-4 text-[#ebebeb]'>Why Choose Us?</h2>
            <h5 className='text-lg mb-3 font-bold text-[#fff]'>In addition, there 5 more reasons why people prefer S&S Kids Beauty Palour:</h5>
            <p className='text-lg mb-3 text-[#fff] flex items-center justify-center gap-x-3'><span><Goal /></span> Always welcoming environment</p>
            <p className='text-lg mb-3 text-[#fff] flex items-center justify-center gap-x-3'><span><Goal /></span> Our masters focus on quality</p>
            <p className='text-lg mb-3 text-[#fff] flex items-center justify-center gap-x-3'><span><Goal /></span> We value both the time and money of our clients</p>
            <p className='text-lg mb-3 text-[#fff] flex items-center justify-center gap-x-3'><span><Goal /></span> All surfaces and tools are cleaned, disinfected before and after using</p>
            <p className='text-lg mb-3 text-[#fff] flex items-center justify-center gap-x-3'><span><Goal /></span>We work only with high-quality, hypoallergenic premium products</p>

            <div className='mx-auto mt-10'>
                <Button className="text-white hover:border-black border border-white w-[100px] mx-auto">Book Now</Button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Parallax
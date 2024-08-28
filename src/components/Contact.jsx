import React from 'react';
import ContactForm from '@/components/ContactForm'
import { Link } from 'react-scroll';

const info = [
    {
      title: 'Phone',
      description: '+447442853360'
    },
    {
      title: 'Email',
      description: 'Soadakukhalil89@gmail.com'
    },
    {
      title: 'Address',
      description: 'Milton Keynes City Center, England'
    },
    // {
    //   title: 'Follow Us', 
    //   description:  
    // }
  ]
const Contact = () => {
  return (
    <div>
        <h6 className='uppercase text-center text-xs tracking-[3px] pt-16 font-semibold'>Contact Us</h6>
           <div className='flex flex-col justify-center items-center'>
              <h2 className='text-center text-5xl font-bold my-3'>Book Your Appointments Here</h2>
              <p className='text-center px-2 md:w-1/2'> Ready to book an Appointment? Contact S&S Kids Beauty Parlour for all your hair care needs. Whether you need a trim, a new style, or advice, we are here for you.</p>
           </div>
           <div className='py-16 px-8 xl:px-28 mx-auto grid grid-cols md:grid-cols-2 gap-20'>
        <ContactForm />
        <div>
          <ul className="flex flex-col gap-10">
              {info.map((item, index)=> {
              return <li key={index} className="flex items-center gap-6 text-left">
              <div className="flex-1">
                <p className="text-gray-400 text-xs uppercase ">{item.title}</p>
                <Link className="text-xl pb-1">{item.description}</Link>
              </div>
              </li>
              })}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
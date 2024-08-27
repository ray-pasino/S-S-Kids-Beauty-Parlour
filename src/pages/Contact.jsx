import Navbar from '@/components/Navbar'
import React from 'react'
import ContactForm from '@/components/Form'

const Contact = () => {
  return (
    <main className='max-w-screen-7xl mx-auto overflow-x-hidden'>
        <Navbar />
        <section>
      <div className='relative h-[500px] xl:px-28 px-4  bg-black'
        style={{
          backgroundImage: 'url(/images/img2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover'
        }}
      >
        <div className='absolute inset-0 bg-black opacity-55'></div>
        <div className='relative z-10 w-full flex flex-col md:flex-row items-center justify-center object-cover'>
        <div className='py-16 px-8 xl:px-28 mx-auto grid grid-cols md:grid-cols-2 gap-20'>
        <ContactForm/>
        {/* <div>
          <ul className="flex flex-col xl:grid xl:grid-cols-2 gap-10">
              {info.map((item, index)=> {
              return <li key={index} className="flex items-center gap-6 text-left">
              <div className="flex-1">
                <p className="text-gray-400 text-xs uppercase font-montserrat">{item.title}</p>
                <h3 className="text-xl font-cormorant italic pb-1">{item.description}</h3>
                <hr className='py-1'/>
              </div>
              </li>
              })}
            </ul>
        </div> */}
      </div>
        </div>
      </div>
    </section>
    </main>
  )
}

export default Contact
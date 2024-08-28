import React from 'react';


const features = [
    {
      title: 'Braiding',
      description: 'Elegant braids for every style.',
      url: '/images/braids.png',
    },
    {
      title: 'Washing',
      description: 'Gentle and thorough hair washing.',
      url: '/images/shampoo.png',
    },
    {
      title: 'Trimming',
      description: 'Precision trims for a polished look.',
      url: '/images/shaving-machine.png',
    },
    {
      title: 'Hair Drying',
      description: 'Efficient drying for a flawless finish.',
      url: '/images/hair-dryer.png',
    },
  ];
const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center space-x-4 overflow-hidden p-6 ">
    {features.map((feature, index) => (
      <div key={index} className="flex flex-col items-center text-center p-8 rounded-2xl shadow-lg bg-white my-10">
        <img src={feature.url} alt=""  className='w-20 h-20'/>
        <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
        <p className="text-gray-600 font-medium text-sm leading-6">{feature.description}</p>
      </div>
    ))}
  </div>
  )
}

export default Card
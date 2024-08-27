import React from 'react';


const features = [
    {
      title: 'Braiding',
      description: 'There is a distinction between a beauty salon and a hair salon and although many small businesses.',
      url: '/images/braids.png',
    },
    {
      title: 'Washing',
      description: 'There is a distinction between a beauty salon and a hair salon and although many small businesses.',
      url: '/images/shampoo.png',
    },
    {
      title: 'Trimming',
      description: 'There is a distinction between a beauty salon and a hair salon and although many small businesses.',
      url: '/images/shaving-machine.png',
    },
    {
      title: 'Shaving',
      description: 'There is a distinction between a beauty salon and a hair salon and although many small businesses.',
      url: '/images/razor.png',
    },
  ];
const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center space-x-4 overflow-hidden p-6 ">
    {features.map((feature, index) => (
      <div key={index} className="flex flex-col items-center text-center p-8 shadow-lg bg-white my-10">
        <img src={feature.url} alt=""  className='w-20 h-20'/>
        <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
        <p className="text-gray-600 font-medium text-xs leading-6">{feature.description}</p>
      </div>
    ))}
  </div>
  )
}

export default Card
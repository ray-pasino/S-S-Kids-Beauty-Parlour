import React from 'react';

const Pricing = () => {
    const services = [
        { service: 'Haircut', price: '$30' },
        { service: 'Shampoo & Cut', price: '$40' },
        { service: 'Line-up', price: '$20' },
        { service: 'Braiding', price: '$50' },
        { service: 'Styling', price: '$60' },
        { service: 'Shaving', price: '$25' },
      ];

  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto mt-8">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="">
            <th className="py-4 px-6 text-left text-3xl font-bold text-gray-700">Service</th>
            <th className="py-4 px-6 text-left text-3xl font-bold text-gray-700">Price</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item, index) => (
            <tr key={index} className="">
              <td className="py-4 px-10 text-xl text-gray-600">{item.service}</td>
              <td className="py-4 px-10 text-xl text-gray-600">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Pricing
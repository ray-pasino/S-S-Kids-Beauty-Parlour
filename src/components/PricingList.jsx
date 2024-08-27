import React from 'react';

const PricingList = () => {
  return (
    <div className="container mx-auto px-4 py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold mb-2">Toddler Haircut</h3>
          <p className="text-lg font-semibold">$25.00</p>
        </div>
        <p className="text-sm text-gray-400">Haircut for children ages 1-3.</p>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold mb-2">Children Haircut</h3>
          <p className="text-lg font-semibold">$30.00</p>
        </div>
        <p className="text-sm text-gray-400">Haircut for children ages 4-12.</p>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold mb-2">Teens Haircut</h3>
          <p className="text-lg font-semibold">$35.00</p>
        </div> 
        <p className="text-sm text-gray-400">Haircut for teenagers ages 13-17.</p>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold mb-2">Haircut and Styling</h3>
          <p className="text-lg font-semibold">$40.00</p>
        </div>
        <p className="text-sm text-gray-400">Haircut with styling and design for kids.</p>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold mb-2">Hair Washing & Conditioning </h3>
          <p className="text-lg font-semibold">$15.00</p>
        </div>
        <p className="text-sm text-gray-400">Shampoo and conditioner treatment.</p>
      </div>
    </div>
  </div>
  )
}

export default PricingList
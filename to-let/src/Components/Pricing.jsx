import React from 'react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 mt-18">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8" data-aos="fade-down">
        Our Pricing Plans
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">

        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="100">
          <h3 className="text-2xl font-bold mb-4">Basic</h3>
          <p className="text-gray-600 mb-6">Perfect for individuals</p>
          <p className="text-4xl font-extrabold text-[#e45716] mb-6">$19<span className="text-base font-normal">/month</span></p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔ 5 Listings</li>
            <li>✔ Basic Support</li>
            <li>✔ Standard Visibility</li>
          </ul>
          <button className="bg-gradient-to-r from-[#EC733B] to-[#e45716] hover:scale-105 duration-300 text-white py-2 px-6 rounded-full">
            Choose Plan
          </button>
        </div>

        {/* Standard Plan */}
        <div className="bg-white shadow-2xl rounded-lg p-8 flex flex-col items-center border-2 border-[#e45716]" data-aos="zoom-in" data-aos-delay="200">
          <h3 className="text-2xl font-bold mb-4">Standard</h3>
          <p className="text-gray-600 mb-6">Best for small teams</p>
          <p className="text-4xl font-extrabold text-[#e45716] mb-6">$49<span className="text-base font-normal">/month</span></p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔ 25 Listings</li>
            <li>✔ Priority Support</li>
            <li>✔ Featured Visibility</li>
          </ul>
          <button className="bg-gradient-to-r from-[#EC733B] to-[#e45716] hover:scale-105 duration-300 text-white py-2 px-6 rounded-full">
            Choose Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="300">
          <h3 className="text-2xl font-bold mb-4">Premium</h3>
          <p className="text-gray-600 mb-6">Ideal for businesses</p>
          <p className="text-4xl font-extrabold text-[#e45716] mb-6">$99<span className="text-base font-normal">/month</span></p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔ Unlimited Listings</li>
            <li>✔ 24/7 Support</li>
            <li>✔ Top Featured Placement</li>
          </ul>
          <button className="bg-gradient-to-r from-[#EC733B] to-[#e45716] hover:scale-105 duration-300 text-white py-2 px-6 rounded-full">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

import React, { useEffect, useState } from "react";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    alert("Your message has been sent!"); // You can later connect it to an email service
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 relative">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          We are committed to helping you find homes, offices, and commercial spaces easily, safely, and quickly. Our goal is to provide a reliable and user-friendly platform where you can rent or purchase properties that meet your needs.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          With constantly updated property listings, secure transactions, and dedicated customer support, we strive to deliver the best service to all our users.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Join us today and find the perfect place for your dream home or growing business!
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-[#EC733B] to-[#e45716] hover:scale-105 duration-300 text-white py-2 px-6 rounded-full"
          >
            Contact Us
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Send us a message
              </h2>
              <form onSubmit={handleSend} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <textarea
                  placeholder="Your Message"
                  required
                  rows="4"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                ></textarea>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#EC733B] to-[#e45716] text-white px-6 py-2 rounded-full hover:scale-105 duration-300"
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;

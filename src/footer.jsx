import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="flex-1 mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-bold mb-4">TULOS</h2>
            <p className="text-gray-600 mb-4">Our newsletter is loaded with exclusive updates, the latest releases, and the best discounts for you!</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
          {/* Right Section */}
          <div className="flex-1 md:ml-8">
            <div className="flex md:flex-row sm:flex-row justify-between">
              <div className="mb-8 md:mb-0 mr-4">
                <h3 className="text-lg font-semibold mb-3">Product</h3>
                <ul className="text-gray-600">
                  <li><a href="#" className="hover:underline">Sneakers</a></li>
                  <li><a href="#" className="hover:underline">Loafers</a></li>
                  <li><a href="#" className="hover:underline">Sandals</a></li>
                  <li><a href="#" className="hover:underline">Boots</a></li>
                  <li><a href="#" className="hover:underline">Slippers</a></li>
                </ul>
              </div>
              <div className="mb-8 md:mb-0 mr-4">
                <h3 className="text-lg font-semibold mb-3">Categories</h3>
                <ul className="text-gray-600">
                  <li><a href="#" className="hover:underline">Men</a></li>
                  <li><a href="#" className="hover:underline">Women</a></li>
                  <li><a href="#" className="hover:underline">Kids</a></li>
                  <li><a href="#" className="hover:underline">New Arrivals</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Our Social Media</h3>
                <ul className="text-gray-600">
                  <li><a href="#" className="hover:underline">Instagram</a></li>
                  <li><a href="#" className="hover:underline">Facebook</a></li>
                  <li><a href="#" className="hover:underline">YouTube</a></li>
                  <li><a href="#" className="hover:underline">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

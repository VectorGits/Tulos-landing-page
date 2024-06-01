import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-6">
      <div className="flex items-center justify-between">
        
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-black border-gray-400 hover:text-gray-700 hover:border-gray-700"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex items-center flex-grow justify-left">
          <a href="#home" className="text-black hover:text-gray-700 mr-4">Home</a>
          <a href="#shop" className="text-black hover:text-gray-700 mr-4">Shop</a>
          <a href="#discover" className="text-black hover:text-gray-700 mr-4">Discover</a>
          <a href="#new" className="text-black hover:text-gray-700 mr-4">New & Featured</a>
          <a href="#sale" className="text-black hover:text-gray-700">Sale</a>
        </div>
		<div className="text-center sm:text-center lg:text-left flex-grow">
          <span className="font-semibold text-xl tracking-tight">TULOS</span>
        </div>
        <div className="flex items-center">
          <a href="#search" className="text-black hover:text-gray-700 mr-4">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 19a9 9 0 100-18 9 9 0 000 18z" />
            </svg>
          </a>
          <a href="#cart" className="text-black hover:text-gray-700">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L3 3m0 0L2 9h13m-9 9a2 2 0 104 0 2 2 0 10-4 0zm9 2a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </a>
        </div>
		
      </div>
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <a href="#home" className="block text-black hover:text-gray-700 mb-2">Home</a>
        <a href="#shop" className="block text-black hover:text-gray-700 mb-2">Shop</a>
        <a href="#discover" className="block text-black hover:text-gray-700 mb-2">Discover</a>
        <a href="#new" className="block text-black hover:text-gray-700 mb-2">New & Featured</a>
        <a href="#sale" className="block text-black hover:text-gray-700">Sale</a>
      </div>
    </nav>
  );
}

export default Navbar;

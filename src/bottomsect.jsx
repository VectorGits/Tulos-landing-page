import React from 'react';

const BottomSection = () => {
  return (
    <div className="bg-black py-4">
      <div className="container mx-auto px-4 flex md:flex-row justify-between items-center text-white max-w-5xl">
        <div className="text-xs md:text-sm mb-2 md:mb-0">
          ©2024 Vector Development
        </div>
        <div className="flex space-x-4 text-xs md:text-sm">
          <a href="#terms" className="hover:underline">Terms & Conditions</a>
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#cookie" className="hover:underline">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;

import React, { useState } from 'react';

const RadialMenu = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-50 bottom-10 right-10">
      {/* Main button */}
      <div
        onClick={toggleMenu}
        className="flex items-center justify-center w-24 h-24 text-white transition-transform duration-300 transform bg-black rounded-full shadow-lg cursor-pointer neon-shadow hover:scale-105"
      >
        <span className="text-3xl font-bold">Menu</span>
      </div>

      {/* Radial Menu Items */}
      <div
        className={`relative transition-all duration-500 ease-in-out ${isOpen ? 'scale-100' : 'scale-0'}`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }} // Prevent clicks when closed
      >
        {/* Home */}
        <div className="absolute flex items-center justify-center w-16 h-16 transform -translate-x-24 -translate-y-10">
          <button
            onClick={() => onNavigate('home')}
            className="relative flex items-center justify-center w-16 h-16 font-semibold text-white transition duration-300 border-2 border-transparent rounded-full bg-gradient-to-br from-blue-500 to-blue-700 neon-shadow hover:border-neon-green hover:text-neon-green"
          >
            Home
          </button>
        </div>

        {/* About */}
        <div className="absolute flex items-center justify-center w-16 h-16 transform -translate-x-20 -translate-y-28">
          <button
            onClick={() => onNavigate('about')}
            className="relative flex items-center justify-center w-16 h-16 font-semibold text-white transition duration-300 border-2 border-transparent rounded-full bg-gradient-to-br from-red-500 to-red-700 neon-shadow hover:border-neon-red hover:text-neon-red"
          >
            About
          </button>
        </div>

        {/* Projects */}
        <div className="absolute flex items-center justify-center w-16 h-16 transform -translate-x-5 -translate-y-40">
          <button
            onClick={() => onNavigate('projects')}
            className="relative flex items-center justify-center w-16 h-16 font-semibold text-white transition duration-300 border-2 border-transparent rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 neon-shadow hover:border-neon-yellow hover:text-neon-yellow"
          >
            Projects
          </button>
        </div>

        {/* Contact */}
        <div className="absolute flex items-center justify-center w-16 h-16 transform translate-x-14 -translate-y-44">
          <button
            onClick={() => onNavigate('contact')}
            className="relative flex items-center justify-center w-16 h-16 font-semibold text-white transition duration-300 border-2 border-transparent rounded-full bg-gradient-to-br from-purple-500 to-purple-700 neon-shadow hover:border-neon-purple hover:text-neon-purple"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default RadialMenu;

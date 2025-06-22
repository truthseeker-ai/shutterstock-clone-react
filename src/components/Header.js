import React from 'react';
import { FaHeart, FaShoppingCart, FaGlobe } from 'react-icons/fa';

const Header = () => {
  return (
<header className="bg-black text-white flex flex-col items-center px-6 py-3 space-y-3">
      {/* Logo */}
      <div className="text-2xl font-bold cursor-pointer select-none text-center">
        shutterst<span className="text-red-600">o</span>ck
      </div>

      {/* Navigation menu */}
      <nav className="hidden md:flex space-x-6 text-sm font-semibold justify-center w-full">
        <div className="cursor-pointer hover:underline">Images</div>
        <div className="cursor-pointer hover:underline">Video</div>
        <div className="cursor-pointer hover:underline">Music</div>
        <div className="cursor-pointer hover:underline">Editorial</div>
        <div className="cursor-pointer hover:underline">3D</div>
        <div className="cursor-pointer hover:underline">AI solutions</div>
        <div className="cursor-pointer hover:underline">Studios</div>
        <div className="cursor-pointer hover:underline">Business services</div>
      </nav>

      {/* Right icons and login button */}
      <div className="flex items-center space-x-4">
        <div className="cursor-pointer hover:text-red-600">
          Pricing
        </div>
        <FaGlobe className="cursor-pointer hover:text-red-600" title="Language" />
        <FaHeart className="cursor-pointer hover:text-red-600" title="Favorites" />
        <FaShoppingCart className="cursor-pointer hover:text-red-600" title="Cart" />
        <button className="bg-white text-black rounded px-4 py-1 font-semibold hover:bg-gray-200">
          Log in
        </button>
      </div>
    </header>
  );
};

export default Header;

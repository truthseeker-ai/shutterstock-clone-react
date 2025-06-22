import React from 'react';
import { FaCamera } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="flex items-center space-x-4 px-6 py-4 bg-white border-b border-gray-300">
      {/* Dropdown for Photos, Videos, etc */}
      <div className="relative">
        <select className="border border-gray-300 rounded-l px-3 py-2 focus:outline-none">
          <option>Photos</option>
          <option>Videos</option>
          <option>Music</option>
          <option>Editorial</option>
          <option>3D</option>
        </select>
      </div>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search for photos"
        className="flex-grow border-t border-b border-gray-300 px-3 py-2 focus:outline-none"
      />

      {/* Search button */}
      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
        </svg>
      </button>

      {/* Search by image button */}
      <button className="flex items-center space-x-2 border border-gray-300 rounded px-3 py-2 hover:bg-gray-100">
        <FaCamera />
        <span>Search by image</span>
      </button>
    </div>
  );
};

export default SearchBar;

import React, { useState } from 'react';
import { FaHeart, FaDownload, FaClone } from 'react-icons/fa';

const MainImageSection = () => {
  const [selectedOption, setSelectedOption] = useState('subscription');

  // Placeholder image URL or empty div for image placeholder
  // Hover overlay shows buttons and text as per screenshot

  return (
    <div className="flex flex-col md:flex-row bg-white p-6 space-y-6 md:space-y-0 md:space-x-6">
      {/* Main image container with hover overlay */}
      <div className="relative flex-1 group border border-gray-300 rounded overflow-hidden cursor-pointer">
        {/* Image placeholder */}
        <div className="bg-yellow-400 h-96 flex items-center justify-center text-4xl font-bold text-white select-none">
          Image Here
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
          <button className="self-start bg-gray-700 bg-opacity-70 rounded-full px-3 py-1 flex items-center space-x-2 hover:bg-gray-600">
            <FaClone />
            <span>Similar</span>
          </button>
          <div className="flex justify-between items-center">
            <button className="bg-gray-700 bg-opacity-70 rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-gray-600">
              <FaHeart />
              <span>Save</span>
            </button>
            <button className="bg-red-600 rounded-full px-6 py-2 font-semibold hover:bg-red-700 flex items-center space-x-2">
              <FaDownload />
              <span>Buy now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Purchase options */}
      <div className="w-full md:w-80 border border-gray-300 rounded p-4 space-y-6">
        {/* Subscription option */}
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="radio"
            name="purchaseOption"
            value="subscription"
            checked={selectedOption === 'subscription'}
            onChange={() => setSelectedOption('subscription')}
            className="form-radio text-red-600"
          />
          <div>
            <div className="font-semibold">10 images subscription</div>
            <div className="text-sm text-gray-600">$2.90 per image</div>
            <div className="text-xs text-gray-500">Subscribe & Save $29/month*</div>
            <div className="text-xs text-gray-500">Cancellation fee applies. See terms & conditions.</div>
          </div>
        </label>

        {/* On demand option */}
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="radio"
            name="purchaseOption"
            value="ondemand"
            checked={selectedOption === 'ondemand'}
            onChange={() => setSelectedOption('ondemand')}
            className="form-radio text-red-600"
          />
          <div>
            <div className="font-semibold">2 on demand images</div>
            <div className="text-sm text-gray-600">$14.50 per image</div>
            <div className="text-xs text-gray-500">$29 no commitment</div>
            <div className="text-xs text-gray-500">Upgrade to Enhanced License</div>
          </div>
        </label>

        {/* Download button */}
        <button className="w-full bg-red-600 text-white rounded-full py-3 font-semibold hover:bg-red-700 transition">
          Download
        </button>

        {/* See all image plans link */}
        <div className="text-center text-blue-600 cursor-pointer hover:underline text-sm">
          See all image plans
        </div>

        {/* Business protection link */}
        <div className="text-center text-blue-600 cursor-pointer hover:underline text-sm">
          Are you a business? Get the right protection
        </div>

        {/* Image details section */}
        <div className="pt-6 border-t border-gray-300">
          <h3 className="font-semibold mb-2">Image details</h3>
          <div className="text-sm mb-1">
            <span className="font-semibold">Asset id:</span> 1799966587
          </div>
          <div className="text-sm mb-1">
            Happy puppy dog smiling on isolated yellow background.
          </div>
          <div className="text-sm mb-1">
            <span className="font-semibold">Upload date:</span> August 21, 2020
          </div>
          <div className="text-sm mb-1">
            <span className="font-semibold">Categories:</span>{' '}
            <a href="#" className="text-blue-600 hover:underline">Animals/Wildlife</a>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold select-none">
              S
            </div>
            <a href="#" className="text-blue-600 hover:underline text-sm">smrm1977</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainImageSection;

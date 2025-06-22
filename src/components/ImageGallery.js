import React from 'react';
import { FaHeart } from 'react-icons/fa';

const ImageGallery = () => {
  // Placeholder images with hover overlays showing Save button and text
  // Sections: Similar images, Recommended for you, More from this artist

  return (
    <div className="bg-white p-6 space-y-8">
      {/* Photo Formats */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Photo Formats</h2>
        <div className="flex flex-wrap gap-4">
          <div className="border border-gray-300 rounded px-3 py-1 text-sm cursor-default select-none">
            8835 × 4000 pixels · 29.5 × 13.3 in · DPI 300 · JPG
          </div>
          <div className="border border-gray-300 rounded px-3 py-1 text-sm cursor-default select-none">
            1000 × 453 pixels · 3.3 × 1.5 in · DPI 300 · JPG
          </div>
          <div className="border border-gray-300 rounded px-3 py-1 text-sm cursor-default select-none">
            500 × 227 pixels · 1.7 × 0.8 in · DPI 300 · JPG
          </div>
        </div>
      </section>

      {/* Similar images */}
      <section>
        <h2 className="text-lg font-semibold mb-4 flex justify-between items-center">
          Similar images
          <button className="text-blue-600 hover:underline text-sm">See all</button>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="relative group cursor-pointer rounded overflow-hidden border border-gray-300 bg-gray-200 h-48 flex items-center justify-center text-gray-500 font-semibold select-none">
              Image {i + 1}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex justify-between items-start p-2 text-white">
                <button className="bg-gray-700 bg-opacity-70 rounded-full px-3 py-1 flex items-center space-x-2 hover:bg-gray-600 text-sm">
                  <FaHeart />
                  <span>Save</span>
                </button>
                <button className="bg-red-600 rounded-full px-3 py-1 text-sm font-semibold hover:bg-red-700">
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended for you */}
      <section>
        <h2 className="text-lg font-semibold mb-4 flex justify-between items-center">
          Recommended for you
          <button className="text-blue-600 hover:underline text-sm">See all</button>
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="relative group cursor-pointer rounded overflow-hidden border border-gray-300 bg-gray-200 h-32 flex items-center justify-center text-gray-500 font-semibold select-none">
              Image {i + 1}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center text-white text-sm font-semibold">
                Save
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* More from this artist */}
      <section>
        <h2 className="text-lg font-semibold mb-4 flex justify-between items-center">
          More from this artist
          <button className="text-blue-600 hover:underline text-sm">See all</button>
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="relative group cursor-pointer rounded overflow-hidden border border-gray-300 bg-gray-200 h-20 flex items-center justify-center text-gray-500 font-semibold select-none">
              Image {i + 1}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center text-white text-sm font-semibold">
                Save
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;

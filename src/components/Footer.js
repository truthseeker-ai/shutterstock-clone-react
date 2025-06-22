import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaVimeoV } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">
        {/* Language selector */}
        <div>
          <select className="bg-black border border-gray-600 rounded px-3 py-2 text-white w-full">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>

        {/* Our company */}
        <div>
          <h3 className="font-semibold mb-3">Our company</h3>
          <ul className="space-y-1 text-sm">
            <li className="cursor-pointer hover:underline">About us</li>
            <li className="cursor-pointer hover:underline">Careers</li>
            <li className="cursor-pointer hover:underline">Press/Media</li>
            <li className="cursor-pointer hover:underline">Investor relations</li>
            <li className="cursor-pointer hover:underline">Shutterstock Blog</li>
            <li className="cursor-pointer hover:underline">Pricing</li>
            <li className="cursor-pointer hover:underline">Coupons</li>
            <li className="cursor-pointer hover:underline">Popular searches</li>
            <li className="cursor-pointer hover:underline">Contact us</li>
          </ul>
        </div>

        {/* Stock Photos and Videos */}
        <div>
          <h3 className="font-semibold mb-3">Stock Photos and Videos</h3>
          <ul className="space-y-1 text-sm">
            <li className="cursor-pointer hover:underline">Stock photos</li>
            <li className="cursor-pointer hover:underline">Stock videos</li>
            <li className="cursor-pointer hover:underline">Stock vectors</li>
            <li className="cursor-pointer hover:underline">Editorial images</li>
            <li className="cursor-pointer hover:underline">Featured photo collections</li>
            <li className="font-semibold mt-2">Partner</li>
            <li className="cursor-pointer hover:underline">Sell your content</li>
            <li className="cursor-pointer hover:underline">Affiliate/Reseller</li>
            <li className="cursor-pointer hover:underline">International reseller</li>
            <li className="cursor-pointer hover:underline">Live assignments</li>
            <li className="cursor-pointer hover:underline">Rights and clearance</li>
            <li className="cursor-pointer hover:underline">Developers</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li className="cursor-pointer hover:underline">Website Terms of Use</li>
            <li className="cursor-pointer hover:underline">Terms of Service</li>
            <li className="cursor-pointer hover:underline">Privacy policy</li>
            <li className="cursor-pointer hover:underline">Modern Slavery Statement</li>
            <li className="cursor-pointer hover:underline">Patents</li>
            <li className="cursor-pointer hover:underline">Cookie Preferences</li>
          </ul>
        </div>

        {/* Innovation */}
        <div>
          <h3 className="font-semibold mb-3">Innovation</h3>
          <ul className="space-y-1 text-sm">
            <li className="cursor-pointer hover:underline">Shutterstock.AI</li>
            <li className="cursor-pointer hover:underline">Generative 3D API</li>
            <li className="cursor-pointer hover:underline">AI image generator</li>
            <li className="cursor-pointer hover:underline">AI style types</li>
            <li className="cursor-pointer hover:underline">Color palette generator</li>
            <li className="cursor-pointer hover:underline">Shutterstock mobile app</li>
            <li className="cursor-pointer hover:underline">iOS app</li>
            <li className="cursor-pointer hover:underline">Android app</li>
          </ul>
        </div>

        {/* Our Brands */}
        <div>
          <h3 className="font-semibold mb-3">Our Brands</h3>
          <ul className="space-y-1 text-sm">
            <li className="cursor-pointer hover:underline">Pond5</li>
            <li className="cursor-pointer hover:underline">PremiumBeat</li>
            <li className="cursor-pointer hover:underline">TurboSquid</li>
            <li className="cursor-pointer hover:underline">Giphy</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <div>© 2003-2025 Shutterstock, Inc.</div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebookF className="cursor-pointer hover:text-red-600" />
          <FaTwitter className="cursor-pointer hover:text-red-600" />
          <FaInstagram className="cursor-pointer hover:text-red-600" />
          <FaLinkedinIn className="cursor-pointer hover:text-red-600" />
          <FaYoutube className="cursor-pointer hover:text-red-600" />
          <FaVimeoV className="cursor-pointer hover:text-red-600" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

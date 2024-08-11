import React, { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import arrow icons
import Amex from '../assets/Amex.png';
import Gpay from '../assets/Gpay.png';
import Ipay from '../assets/Ipay.png';
import Mastercard from '../assets/Mastercard.png';
import Paypal from '../assets/Paypal.webp';

const Footer = () => {
  const [isBottomOpen, setIsBottomOpen] = useState(false);

  return (
    <footer className="bg-[#000000] text-white py-10 px-[20px] md:px-[70px] font-[inter]">
      {/* Top Container */}
      <div className="flex flex-col md:flex-row justify-between w-full border-b border-gray-600 pb-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-[20px] font-bold mb-4">Be the first to know</h2>
          <p className="mb-4 font-normal text-[16px]">
            Sign up for updates from mettā muse.
          </p>
          <div className="flex mt-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-[380px] p-2 focus:outline-none text-black"
            />
            <button className="bg-[#000000] border border-solid text-[#FFFFFF] font-normal py-2 px-10 ml-4 rounded-sm">
              Subscribe
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 ml-0 md:ml-[100px] text-left space-y-2">
          <p className="text-lg font-normal text-[20px]">CONTACT US</p>
          <p className="text-sm font-normal">+44 221 133 5360</p>
          <p className="text-sm font-normal">customercare@mettamuse.com</p>
          <p className="text-lg font-normal text-[20px]">Currency</p>
          <p className="text-sm font-normal">USD</p>
          <p className="text-sm font-normal">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>

      {/* Middle Container */}
      <div className="flex flex-col md:flex-row justify-between py-8">
        {/* Left Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">mettā muse</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Product 2</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        {/* Middle Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex items-center mb-4">
            <FaInstagram className="text-3xl mr-4 border rounded-full p-1" />
            <FaLinkedin className="text-3xl border rounded-full p-1" />
          </div>
          <div className="flex items-center space-x-4">
            <img src={Amex} alt="Amex" className="h-8 w-10 object-contain" />
            <img src={Gpay} alt="Gpay" className="h-8 w-10 object-contain" />
            <img src={Ipay} alt="Ipay" className="h-8 w-10 object-contain" />
            <img src={Paypal} alt="Paypal" className="h-8 w-10 object-contain" />
            <img src={Mastercard} alt="Mastercard" className="h-8 w-10 object-contain" />
          </div>
        </div>
      </div>

      {/* Bottom Container */}
      <div className="pt-4 text-center">
      
          <span>&copy; 2024 mettamuse. All rights reserved.</span>
         
       
      </div>
    </footer>
  );
};

export default Footer;

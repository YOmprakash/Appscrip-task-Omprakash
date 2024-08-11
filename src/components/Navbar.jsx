// src/Navbar.js
import { useState } from "react";
import logo from "../assets/logo.svg";
import {
  FaSearch,
  FaHeart,
  FaCartPlus,
  FaUser,
  FaBars,
  FaTimes,
  FaArrowCircleDown,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 bg-white border-b border-solid border-gray-300 mx-auto container">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-between w-full md:w-[90%] mx-auto">
          {/* Left: Logo */}
          <div className="flex items-center">
            <button className="md:hidden mr-2" onClick={toggleSidebar}>
              <FaBars className="h-8 w-8" />
            </button>
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          </div>
          
            <h1 className=" text-2xl md:text-4xl text-black font-[900] font-[Inter] ">
              LOGO
            </h1>

          {/* Right: Navigation Items */}
          <div className="flex items-center space-x-4 text-[#292D32]">
            <button className="hover:text-gray-300 flex items-center">
              <FaSearch className="mr-1" />
            </button>
            <button className="hover:text-gray-300 flex items-center">
              <FaHeart className="mr-1" />
            </button>
            <button className="hover:text-gray-300 flex items-center">
              <FaCartPlus className="mr-1" />
            </button>
            <button className="hover:text-gray-300 flex items-center">
              <FaUser className="mr-1 hidden md:flex" />
            </button>
            <button className="hover:text-gray-300 items-center hidden md:flex">
              ENG
              <FaArrowCircleDown />
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-[64px]  mt-8 font-bold text-[#252020] text-[20px] font-[Inter]">
          <li className="hover:text-gray-500">SHOP</li>
          <li className="hover:text-gray-500">SKILLS</li>
          <li className="hover:text-gray-500">STORIES</li>
          <li className="hover:text-gray-500">ABOUT</li>
          <li className="hover:text-gray-500">CONTACT US</li>
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 bg-gray-300 h-full z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <button onClick={toggleSidebar}>
            <FaTimes className="h-8 w-8" />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          <li className="hover:text-gray-500">SHOP</li>
          <li className="hover:text-gray-500">SKILLS</li>
          <li className="hover:text-gray-500">STORIES</li>
          <li className="hover:text-gray-500">ABOUT</li>
          <li className="hover:text-gray-500">CONTACT US</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

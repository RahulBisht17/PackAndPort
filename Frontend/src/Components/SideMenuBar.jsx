import React from "react";
import { Link } from "react-router-dom";

const SideMenuBar = ({ isOpen, toggleMenu }) => {
  return (
    <div className="bg-amber-300">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-cyan-700 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 p-5`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold mt-6">Hi, Rahul</h2>

        {/* Menu Items */}
        <ul className="mt-10 space-y-4 text-lg font-medium">
          <Link to="/" className="cursor-pointer hover:text-gray-200">
            Home
          </Link>
          <li className="cursor-pointer hover:text-gray-200">About Us</li>
          <li className="cursor-pointer hover:text-gray-200">Track Status</li>
          <li className="cursor-pointer hover:text-gray-200">Services</li>
          <li className="cursor-pointer hover:text-gray-200">Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenuBar;

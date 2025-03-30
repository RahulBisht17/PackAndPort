import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Trigger effect after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all duration-10 ${
        isScrolled ? "bg-white" : "bg-cyan-900"
      }`}
    >
      {/* Mobile Navbar */}
      <div className="md:hidden flex flex-row justify-between text-white bg-cyan-900 items-center p-2">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>

        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Pack N Port
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>

      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex items-center justify-between transition-all duration-10
        ${
          isScrolled
            ? "w-full bg-white rounded-none shadow-md p-3"
            : "max-w-7xl mx-auto bg-white rounded-none xl:rounded-full p-3 border-gray-300"
        }`}
      >
        {/* Left Logo/Button */}
        <div className="ml-4">
          <button className="text-cyan-800 text-lg xl:text-2xl font-bold">
            Pack N Port
          </button>
        </div>

        {/* Centered Navigation Links */}
        <ul className="flex space-x-8 lg:space-x-16 text-cyan-800 text-md lg:text-lg xl:text-xl font-semibold">
          <Link to="/" className="cursor-pointer hover:text-cyan-400">
            Home
          </Link>
          <li className="cursor-pointer hover:text-cyan-400">About Us</li>
          <li className="cursor-pointer hover:text-cyan-400">Services</li>
          <li className="cursor-pointer hover:text-cyan-400">FAQs</li>
        </ul>

        {/* Right Profile Icon */}
        <Link to="/profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

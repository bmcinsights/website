"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Import the correct hook

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  return (
    <header className="bg-[#111827] shadow-md z-10 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="logo">
          <a href="/" className="h-8">
            <img
              src="/images/logo.png"
              alt="The BMC Insights"
              className="h-10"
            />
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden text-gray-300 hover:text-gray-100 focus:outline-none transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ zIndex: 20 }} // Ensures it stays above other components
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:relative top-16 md:top-auto left-0 w-full bg-gray-900 md:bg-transparent z-20 md:z-auto md:flex items-center justify-end md:space-x-8 transition duration-300 ${
            isMenuOpen ? "block" : "hidden"
          } ${isMenuOpen ? "bg-[#1f2937]" : ""}`} // Make dropdown darker when menu is open
        >
          <a
            href="/"
            className={`block font-medium text-gray-300 hover:text-white py-2 px-4 md:py-0 text-lg transition duration-300 ${
              pathname === "/" ? "underline decoration-sky-500 solid decoration-[3px]" : ""
            }`}
          >
            Home
          </a>
          <a
            href="blog"
            className={`block font-medium text-gray-300 hover:text-white py-2 px-4 md:py-0 text-lg transition duration-300 ${
              pathname === "/blog"
                ? "underline decoration-sky-500 decoration-solid decoration-[3px]"
                : ""
            }`}
          >
            Blogs
          </a>
          <a
            href="about"
            className={`block font-medium text-gray-300 hover:text-white py-2 px-4 md:py-0 text-lg transition duration-300 ${
              pathname === "/testimonials"
                ? "underline decoration-sky-500 decoration-solid decoration-[3px]"
                : ""
            }`}
          >
            About 
          </a>
          {/* Login Button */}
          <a
            href="webLogin"
            className={`block font-medium text-white bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-md md:ml-8 shadow-md transition duration-300 ${
              pathname === "/login"
                ? "underline decoration-sky-500 decoration-solid decoration-[3px]"
                : ""
            }`}
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

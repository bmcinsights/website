"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isLoggedIn } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="bg-gray-200 dark:bg-gray-900 text-text dark:text-white shadow-md z-10 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="logo">
          <a href="/" className="h-8">
            <img src="/images/logo.png" alt="The BMC Insights" className="h-10" />
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden text-text hover:text-opacity-60 focus:outline-none transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ zIndex: 20 }}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:relative top-16 md:top-auto left-0 w-full bg-gray-900 md:bg-transparent z-20 md:z-auto md:flex items-center justify-end md:space-x-2 transition duration-300 ${
            isMenuOpen ? "block" : "hidden"
          } ${isMenuOpen ? "bg-background" : ""}`}
        >
          {navLinks.map((links, index) => {
            const isActive = links.path === "/" ? pathname === links.path : pathname.startsWith(links.path);

            return (
              <a
                href={links.path}
                key={index}
                className={`block font-medium hover:text-opacity-80 py-2 px-4 md:py-0 text-lg transition duration-300 ${
                  isActive
                    ? "underline decoration-primary solid decoration-[3px] transition-none"
                    : "text-text dark:text-white"
                }`}
              >
                {links.name}
              </a>
            );
          })}

          {/* Conditional Threads Link */}
          {isLoggedIn && (
            <a
              href="/threads"
              className={`block font-medium hover:text-opacity-60 py-2 px-4 md:py-0 text-lg transition duration-300 ${
                pathname.startsWith("/threads")
                  ? "underline decoration-primary decoration-solid decoration-[3px] transition-none"
                  : "text-text dark:text-white"
              }`}
            >
              Threads
            </a>
          )}

          {/* Conditional Login/Dashboard Button */}
          <a
            href={isLoggedIn ? "/profile" : "/webLogin"}
            className={`block font-bold text-background ${
              isLoggedIn ? "bg-primary hover:bg-opacity-80" : "bg-primary hover:bg-opacity-80"
            } px-4 md:px-6 py-2 rounded-md md:ml-6 shadow-md transition duration-300 ${
              pathname.startsWith("/profile") || pathname === "/webLogin" // Use startsWith for profile
                ? "bg-green-600"
                : ""
            }`}
          >
            {isLoggedIn ? "Dashboard" : "Login"}
          </a>

          {/* Conditional Settings Link */}
          {isLoggedIn && (
            <a
              href="/userprofile"
              className={`block font-medium hover:text-white py-2 px-4 md:py-0 text-lg transition duration-300 ${
                pathname.startsWith("/userprofile")
                  ? "underline decoration-sky-500 decoration-solid decoration-[3px] md:no-underline"
                  : "text-text dark:text-white"
              }`}
            >
              <i className="fas fa-cog hidden md:block"></i> <span className="md:hidden">Account</span>
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
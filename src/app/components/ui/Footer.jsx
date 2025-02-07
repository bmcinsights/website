import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left: Location & Email */}
          <div className="flex flex-col items-start space-y-4 mb-1 md:mb-0">
            {/* Location */}
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-location-dot fa-lg"></i>
              <a
                href="https://maps.app.goo.gl/BkpHP1KTAGUQBCGR9"
                target="_blank"
                rel="noopener noreferrer"
              >
                British Model College, Chakuphat
              </a>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-envelope fa-lg"></i>
              <a
                href="mailto:thebmcinsights@gmail.com"
                className="hover:text-gray-300 transition"
              >
                thebmcinsights@britishmodelcollege.edu.np
              </a>
            </div>
          </div>

          {/* Right: Branding & Socials */}
          <div className="flex flex-row md:flex-col-reverse md:items-end w-full md:w-auto md:space-y-4 justify-between items-center">
            {/* Social Links (Left on Mobile, Right on md and Larger Screens) */}
            <div className="flex space-x-6 md:justify-end md:mt-8 md:mb-2">
              <a
                href="#"
                className="hover:text-gray-300 transition duration-200"
              >
                <i className="fab fa-github fa-xl"></i>
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition duration-200"
              >
                <i className="fab fa-instagram fa-xl"></i>
              </a>
            </div>

            {/* Logo (Right on Mobile and md+) */}
            <div className="ml-auto md:ml-0">
              <img
                src="/images/tbc.svg"
                alt="The British College Logo"
                className="w-auto h-12"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} The BMC Insights. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
    
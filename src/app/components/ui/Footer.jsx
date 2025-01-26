import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#010a11] text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6">
                {/* Top Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
                    {/* Left: Location & Email */}
                    <div className="flex flex-col items-start space-y-4">
                        {/* Location */}
                        <div className="flex items-center space-x-2">
                            <i className="fa-solid fa-location-dot fa-lg"></i>
                            <span>British Model College, Chakuphat</span>
                        </div>
                        {/* Email */}
                        <div className="flex items-center space-x-2">
                            <i className="fa-solid fa-envelope fa-lg"></i>
                            <a
                                href="mailto:thebmcinsights@gmail.com"
                                className="hover:text-white transition"
                            >
                                thebmcinsights@britishmodelcollege.edu.np
                            </a>
                        </div>
                    </div>

                    {/* Right: Branding & Socials */}
                    <div className="flex flex-col items-center sm:items-end space-y-2">
                        <span className="text-white font-bold text-lg">The BMC Insights</span>
                        <div className="flex justify-center sm:justify-end space-x-6 mt-4 sm:mt-0 w-full">
                            <a href="#" className="hover:text-white transition duration-200">
                                <i className="fab fa-github fa-xl"></i>
                            </a>
                            <a href="#" className="hover:text-white transition duration-200">
                                <i className="fab fa-instagram fa-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} The BMC Insights. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

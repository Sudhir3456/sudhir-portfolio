import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Branding */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-white">Sudhir Kumar Yadav</h2>
          <p className="text-sm">Passionate QA Engineer & Automation Expert</p>
        </div>

        {/* Center - Social Links */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/sudhir108/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-xl hover:text-orange-500 transition duration-300"></i>
          </a>
          <a href="https://github.com/Sudhir3456" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-xl hover:text-orange-500 transition duration-300"></i>
          </a>
          <a href="mailto:qasudhiryadav@gmail.com">
            <i className="fas fa-envelope text-xl hover:text-orange-500 transition duration-300"></i>
          </a>
        </div>

        {/* Right Section - Copyright */}
        <div className="text-center md:text-right text-sm mt-4 md:mt-0">
          <p>&copy; {new Date().getFullYear()} Sudhir Kumar Yadav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
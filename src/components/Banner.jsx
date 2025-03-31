import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white text-center py-20 px-6 rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold animate-pulse">
      ✨Welcome to My Digital Space ✨
      </h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
      I'm a Java Backend & Automation Engineer passionate about building scalable applications & automation frameworks that ensure quality and performance.
      Let’s Build Something Amazing!

       </p>

     {/* Call-to-Action Buttons */}
<div className="mt-6 flex justify-center space-x-4">
  {/* View My Work - GitHub */}
  <a href="https://github.com/Sudhir3456" target="_blank" rel="noopener noreferrer">
    <button className="bg-white text-indigo-700 px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105">
      View My Work
    </button>
  </a>

  {/* Contact Me - Email */}
  <a href="mailto:qasudhiryadav@gmail.com">
    <button className="bg-indigo-500 text-white px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-indigo-400 transition-transform transform hover:scale-105">
      Contact Me
    </button>
  </a>
</div>

      {/* Dynamic Scrolling Text Effect */}
      <div className="mt-8 text-sm text-gray-200 animate-marquee">
        🚀 Automation Testing| 💻 Backend Development | 📊 API Testing | ⚡ Scalable Solutions
      </div>
    </div>
  );
};

export default Banner;
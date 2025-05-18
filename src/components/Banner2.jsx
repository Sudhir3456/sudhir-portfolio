import React from "react";
import backgroundImage from "../assets/portfiloimg.jpg";

const Banner2 = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})` // ✅ backtick opens and closes correctly
      }}
    >
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Sudhir</h1>
          <p className="text-lg md:text-xl font-medium mb-6">
            QA & Automation Engineer | Selenium | Java | Spring Boot
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/sudhir108/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Sudhir3456"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
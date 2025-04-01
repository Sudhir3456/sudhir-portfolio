import React from "react";

const About = () => {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">

        {/* Left Side - Image (Rounded with Soft Shadow) */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-full shadow-lg overflow-hidden">
            <img src="/sudhir-portfolio/images/sudhirprofilepic.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>  

 
        {/* Right Side - Text Content */}
        <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900">About Me</h2>
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">Java Backend & Automation Engineer</h3>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Hi, I'm <span className="font-semibold text-gray-900">Sudhir Kumar Yadav</span>, a *passionate Software Tester & Java Developer* with 
            expertise in *Selenium, Java, API Testing, CI/CD, and Web Technologies*. I love building robust test automation frameworks and 
            optimizing backend performance.
          </p>
          <p className="mt-3 text-lg text-gray-700">
            With hands-on experience in *Test Automation, Java, and Web Technologies, I continuously work on **real-time projects* to enhance 
            my skills and contribute to high-quality software development.
          </p>

            {/* Call to Action - Read More (LinkedIn) */}
            <div className="mt-6">
            <a
              href="https://www.linkedin.com/in/sudhir108/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-600 transition inline-block text-center"
            >
              Read More...
            </a>
          </div>
        </div>
        </div>
      </section>
  );
};

export default About;
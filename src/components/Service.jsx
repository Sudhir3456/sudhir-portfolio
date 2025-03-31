import React from "react";

const services = [
  { title: "Automation Testing", description: "Expert in Selenium WebDriver, TestNG, and CI/CD pipelines for efficient test automation." },
  { title: "Java Backend Development", description: "Skilled in Java, JDBC, Servlet, Spring Boot, and REST APIs to build scalable applications." },
  { title: "API & Database Testing", description: "Hands-on experience with Postman, REST Assured, MySQL, and JDBC for API and database validation." },
  { title: "Web Technologies", description: "Proficient in HTML, CSS, JavaScript, React, and Tailwind for frontend and UI testing." },
];

const Service = () => {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">My Services</h2>
        <p className="mt-3 text-lg text-gray-700">
          I specialize in automation testing, backend development, and API testing to ensure high-quality software.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-lg text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
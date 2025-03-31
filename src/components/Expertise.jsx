import React from "react";

const skills = [
  "Core Java",
  "Advanced Java",
  "JDBC",
  "Hibernate (ORM Tool)",
  "Spring Framework",
  "Spring Boot",
  "REST API",
  "Selenium",
  "Postman",
  "Git & GitHub",
  "CI/CD",
  "Jenkins",
  "TestNG",
  "POM",
  "Manual Testing",
   "MySQL",
   "HTML",
  "JavaScript",
  "JSON",
   "XML"
];

const Expertise = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          My Expertise
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Leveraging my expertise in backend development, cloud technologies, and automation testing to build efficient and scalable solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white shadow-md px-4 py-2 text-gray-700 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="mailto:qasudhiryadav@gmail.com"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300"
          >
            Let's Work Together
          </a>
 
        </div>
      </div>
    </section>
  );
};

export default Expertise;
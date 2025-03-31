import React from "react";
import Header2 from "./components/Header2";
import Banner from "./components/Banner";
import About3 from "./components/About3";
import Service from "./components/Service";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100">
      <Header2 />

      {/* Adjust margin to prevent extra space */}
      <div id="home" className="mt-16">
        <Banner />
      </div>

      <div id="about" className="p-6 space-y-16">
        <About3 />
      </div>

      <div id="skills">
        <Service />  {/* ✅ Skills Section */}
      </div>

      <div id="portfolio">
        <Expertise />  {/* ✅ Portfolio Section */}
      </div>

      <div id="contact">
        <Footer />  {/* ✅ Contact Section */}
      </div>
    </div>
  );
}

export default App;
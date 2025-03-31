import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { title: "Home", link: "#home", id: 1 },
    { title: "About", link: "#about", id: 2 },
    { title: "Skills", link: "#skills", id: 3 },
    { title: "Portfolio", link: "#portfolio", id: 4 },
    { title: "Contact", link: "#contact", id: 5 },
  ];

  return (
    <header className="bg-gray-100 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Sudhir Kumar Yadav</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {menuLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.link} 
              className="hover:text-orange-600 transition duration-300"
            >
              {link.title}
            </a>
          ))}      
        </nav>

        {/* Download CV Button */}
        <a 
          href="./src/assets/sudhirResume.pdf.docx" 
          download="sudhirResume.pdf.docx"
          className="hidden md:block px-4 py-2 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition duration-300"
        >
          Download CV
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-100 p-5 flex flex-col items-center">
          {menuLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.link} 
              className="py-2 text-lg hover:text-orange-600 transition duration-300"
              onClick={() => setIsOpen(false)} 
            >
              {link.title}
            </a>
          ))}
          <a 
            href="/Sudhir_Kumar_Yadav_CV.pdf" 
            download="Sudhir_Kumar_Yadav_CV.pdf"
            className="mt-4 px-4 py-2 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition duration-300"
          >
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header2;
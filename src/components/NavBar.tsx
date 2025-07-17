import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="shadow-lg bg-white">
      <div className="h-16 px-6 flex items-center justify-between">
        <h2 className="font-Inter font-bold text-lg">
          Rafael Angelo Christianto
        </h2>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 mr-5">
          {["home", "about", "projects", "contact"].map((section) => (
            <a
              key={section}
              className="font-Roboto relative hover:text-[#152238] transition duration-200 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#152238] after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer"
              href={`#${section}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          {["home", "about", "projects", "contact"].map((section) => (
            <a
              key={section}
              className="font-Roboto text-base hover:text-[#152238] transition duration-200"
              href={`#${section}`}
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

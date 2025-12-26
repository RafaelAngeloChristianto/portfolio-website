import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll to section on hash change (after navigation)
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const sections = ["about", "projects", "contact"];

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <h2 className="font-Inter font-light text-xl md:text-2xl text-slate-800 tracking-wide hover:text-slate-600 transition-colors duration-300">
          Rafael Angelo Christianto
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <Link
            to="/"
            className="font-Inter text-base md:text-lg relative text-slate-700 hover:text-slate-900 transition-all duration-300 font-light
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-slate-800 after:rounded-full after:transition-all after:duration-300
        hover:after:w-full"
          >
            Home
          </Link>
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(`#${section}`);
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-Inter text-base md:text-lg relative text-slate-700 hover:text-slate-900 transition-all duration-300 font-light
          after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-slate-800 after:rounded-full after:transition-all after:duration-300
          hover:after:w-full"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-slate-700 hover:text-slate-900 transition-colors duration-200">
            {isOpen ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-lg px-8 py-8 flex flex-col gap-6 animate-slideDown">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="font-Inter text-lg text-slate-700 hover:text-slate-900 transition-all duration-200 font-light"
          >
            Home
          </Link>
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(`#${section}`);
                if (target) target.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="font-Inter text-lg text-slate-700 hover:text-slate-900 transition-all duration-200 font-light"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

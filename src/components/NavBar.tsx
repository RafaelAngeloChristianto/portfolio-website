import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCode } from "react-icons/fa";

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll to section on hash change (after navigation)
  useEffect(() => {
    if (location.hash) {
      const scroll = () => {
        const element = document.querySelector(location.hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      };
      // Delay to allow page content to render before scrolling
      setTimeout(scroll, 100);
    }
  }, [location]);

  const isHome = location.pathname === "/";
  const sections = ["about", "projects", "contact"];

  const activePath = location.pathname;

  const linkClass = (path: string) =>
    `font-Inter text-base md:text-lg relative transition-all duration-300 font-light after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:rounded-full after:transition-all after:duration-300 ${
      activePath === path
        ? "text-slate-900 font-medium after:w-full after:bg-slate-800"
        : "text-slate-500 hover:text-slate-900 after:w-0 after:bg-slate-800 hover:after:w-full"
    }`;

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/95 border-b border-slate-100 shadow-sm transition-all">
      {/* Accent gradient line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-slate-400 via-slate-600 to-slate-400" />
      <div className="max-w-7xl mx-auto px-8 md:px-12 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-slate-600 transition-colors duration-300">
            <FaCode className="text-white text-xs" />
          </span>
          <span className="font-Inter font-light text-xl md:text-2xl text-slate-800 tracking-wide group-hover:text-slate-600 transition-colors duration-300">
            Rafael Angelo Christianto
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/certifications" className={linkClass("/certifications")}>Certifications</Link>
          {sections.map((section) => (
            isHome ? (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${section}`)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={linkClass("")}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ) : (
              <Link key={section} to={`/#${section}`} className={linkClass("")}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-slate-700 hover:text-slate-900 transition-colors duration-200 cursor-pointer">
            {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-lg px-8 py-8 flex flex-col gap-6 animate-slideDown">
          <Link to="/" onClick={() => setIsOpen(false)} className="font-Inter text-lg text-slate-700 hover:text-slate-900 transition-all duration-200 font-light">
            Home
          </Link>
          {sections.map((section) => (
            isHome ? (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${section}`)?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="font-Inter text-lg text-slate-700 hover:text-slate-900 transition-all duration-200 font-light"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ) : (
              <Link key={section} to={`/#${section}`} onClick={() => setIsOpen(false)} className="font-Inter text-lg text-slate-700 hover:text-slate-900 transition-all duration-200 font-light">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  );
};

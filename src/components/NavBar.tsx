import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const scroll = () => {
        const element = document.querySelector(location.hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      };
      setTimeout(scroll, 100);
    }
  }, [location]);

  const isHome = location.pathname === "/";
  const sections = ["about", "projects", "contact"];
  const activePath = location.pathname;

  const linkClass = (path: string) =>
    `text-sm tracking-wide transition-colors duration-200 relative ${
      activePath === path
        ? "text-brand font-medium after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-px after:bg-brand"
        : "text-slate-500 hover:text-brand"
    }`;

  const sectionLinkClass =
    "text-sm text-slate-500 hover:text-brand tracking-wide transition-colors duration-200";

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-slate-200/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="wrap h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-semibold text-brand text-base md:text-lg tracking-tight hover:opacity-75 transition-opacity"
        >
          Rafael Angelo
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/certifications" className={linkClass("/certifications")}>
            Certifications
          </Link>
          <Link to="/sherlocks" className={linkClass("/sherlocks")}>
            Sherlocks
          </Link>
          {sections.map((section) =>
            isHome ? (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(`#${section}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={sectionLinkClass}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ) : (
              <Link key={section} to={`/#${section}`} className={sectionLinkClass}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ),
          )}
        </div>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="text-slate-600 hover:text-brand transition-colors cursor-pointer p-1"
          >
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-6 flex flex-col gap-5 animate-slideDown">
          <Link to="/" onClick={() => setIsOpen(false)} className={linkClass("/")}>
            Home
          </Link>
          <Link
            to="/certifications"
            onClick={() => setIsOpen(false)}
            className={linkClass("/certifications")}
          >
            Certifications
          </Link>
          <Link
            to="/sherlocks"
            onClick={() => setIsOpen(false)}
            className={linkClass("/sherlocks")}
          >
            Sherlocks
          </Link>
          {sections.map((section) =>
            isHome ? (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(`#${section}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className={sectionLinkClass}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ) : (
              <Link
                key={section}
                to={`/#${section}`}
                onClick={() => setIsOpen(false)}
                className={sectionLinkClass}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ),
          )}
        </div>
      )}
    </nav>
  );
};

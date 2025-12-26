import React from "react";
import { SiWhatsapp, SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import cali from "../assets/caligraphy_white.png";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900 py-12 flex flex-col items-center border-t border-slate-800">
      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center mb-8 px-8">
        {/* Quick Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-white text-2xl font-Inter font-light mb-6 tracking-wide">
            Quick Links
          </h3>
          <nav className="flex flex-col space-y-4">
            <Link
              className="text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 font-Inter font-light text-lg"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 font-Inter font-light text-lg"
              to="/certifications"
            >
              Certifications
            </Link>
          </nav>
        </div>

        <div className="hidden md:block">
          <img src={cali} className="w-48 opacity-80" alt="Signature" />
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-2xl font-Inter font-light mb-6 tracking-wide">
            Contact Me
          </h3>
          <div className="flex flex-col space-y-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rafaaelangelo@gmail.com"
              className="group flex items-center space-x-3 bg-white text-slate-900 px-6 py-3 rounded-2xl hover:bg-slate-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <SiGmail className="text-xl group-hover:scale-110 transition-transform duration-300" />
              <span className="font-Inter font-medium">Contact via Email</span>
            </a>
            <a
              href="https://wa.me/6281319727350?text=Hello%20Rafael%2C%20I%20want%20your%20service%20to%20create%20a%20website%20like%20..."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-green-600 text-white px-6 py-3 rounded-2xl hover:bg-green-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <SiWhatsapp className="text-xl group-hover:scale-110 transition-transform duration-300" />
              <span className="font-Inter font-medium">Contact via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full max-w-6xl border-slate-700 mb-6" />

      {/* Footer Bottom */}
      <p className="text-center text-slate-400 text-base font-Inter font-light tracking-wide">
        &copy; {new Date().getFullYear()} Rafael Angelo Christianto. All rights
        reserved.
      </p>
    </footer>
  );
};

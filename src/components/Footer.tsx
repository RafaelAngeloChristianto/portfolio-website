import React from "react";
import { SiWhatsapp, SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
import cali from "../assets/caligraphy_white.png";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900 flex flex-col items-center">
      {/* Gradient top border */}
      <div className="h-[3px] w-full bg-gradient-to-r from-slate-700 via-slate-400 to-slate-700" />

      <div className="w-full max-w-6xl px-8 pt-14 pb-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <img src={cali} className="w-44 opacity-70" alt="Signature" />
            <p className="text-slate-400 font-Inter font-light text-sm max-w-xs leading-relaxed">
              Building clean, modern web experiences with passion and precision.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              <a
                href="https://github.com/RafaelAngeloChristianto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-600 flex items-center justify-center transition-colors duration-300"
              >
                <SiGithub className="text-slate-300 text-base" />
              </a>
              <a
                href="https://www.linkedin.com/in/rafaaelangelo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300"
              >
                <SiLinkedin className="text-slate-300 text-base" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rafaaelangelo@gmail.com"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-red-700 flex items-center justify-center transition-colors duration-300"
              >
                <SiGmail className="text-slate-300 text-base" />
              </a>
              <a
                href="https://wa.me/6281319727350"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-green-700 flex items-center justify-center transition-colors duration-300"
              >
                <SiWhatsapp className="text-slate-300 text-base" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-Inter font-semibold mb-4 tracking-widest uppercase text-slate-400">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "Certifications", to: "/certifications" },
              ].map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 font-Inter font-light text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-slate-300 transition-colors duration-300" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-Inter font-semibold mb-4 tracking-widest uppercase text-slate-400">
              Get In Touch
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rafaaelangelo@gmail.com"
                className="group flex items-center space-x-3 bg-slate-800 hover:bg-white text-slate-300 hover:text-slate-900 px-5 py-2.5 rounded-xl transition-all duration-300 border border-slate-700 hover:border-transparent hover:shadow-lg"
              >
                <SiGmail className="text-base group-hover:scale-110 transition-transform duration-300" />
                <span className="font-Inter font-medium text-sm">Email Me</span>
              </a>
              <a
                href="https://wa.me/6281319727350?text=Hello%20Rafael%2C%20I%20want%20your%20service%20to%20create%20a%20website%20like%20..."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-green-700 hover:bg-green-500 text-white px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-900/30"
              >
                <SiWhatsapp className="text-base group-hover:scale-110 transition-transform duration-300" />
                <span className="font-Inter font-medium text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-800 mb-6" />

        {/* Footer Bottom */}
        <p className="text-center text-slate-500 text-xs font-Inter font-light tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Rafael Angelo Christianto &mdash;
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

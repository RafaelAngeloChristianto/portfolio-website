import React from "react";
import { SiWhatsapp, SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto border-t border-slate-200 bg-white">
      <div className="wrap py-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-sm">
            <p className="text-brand font-medium tracking-tight text-lg mb-2">
              Rafael Angelo Christianto
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Computer science student focused on cybersecurity, clean engineering, and
              thoughtful problem solving.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-6 text-sm">
            <nav className="flex flex-col gap-2">
              <span className="section-eyebrow mb-1">Pages</span>
              <Link to="/" className="text-slate-600 hover:text-brand transition-colors">
                Home
              </Link>
              <Link
                to="/certifications"
                className="text-slate-600 hover:text-brand transition-colors"
              >
                Certifications
              </Link>
              <Link
                to="/sherlocks"
                className="text-slate-600 hover:text-brand transition-colors"
              >
                Sherlocks
              </Link>
            </nav>
            <div className="flex flex-col gap-2">
              <span className="section-eyebrow mb-1">Connect</span>
              <a
                href="https://github.com/RafaelAngeloChristianto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-brand transition-colors inline-flex items-center gap-2"
              >
                <SiGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rafaaelangelo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-brand transition-colors inline-flex items-center gap-2"
              >
                <SiLinkedin /> LinkedIn
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rafaaelangelo@gmail.com"
                className="text-slate-600 hover:text-brand transition-colors inline-flex items-center gap-2"
              >
                <SiGmail /> Email
              </a>
              <a
                href="https://wa.me/6281319727350"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-brand transition-colors inline-flex items-center gap-2"
              >
                <SiWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 pt-6 border-t border-slate-100 text-center text-slate-400 text-xs">
          © {new Date().getFullYear()} Rafael Angelo Christianto
        </p>
      </div>
    </footer>
  );
};

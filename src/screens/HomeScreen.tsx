import React from "react";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

import portrait from "../assets/portrait.jpg";
import cv from "../assets/Rafael Angelo - CV.pdf";

import { SiInstagram } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";

// ...imports stay the same...

export const HomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <div
        id="home"
        className="flex flex-col md:flex-row justify-center items-center flex-grow px-6 py-20 gap-10"
      >
        <div className="text-center md:text-left">
          <h1 className="font-Inter font-bold text-[24px] md:text-[28px] mb-2 text-[#152238]">
            Rafael Angelo Christianto
          </h1>
          <h3 className="font-Open Sans text-[16px] md:text-[18px] text-gray-700">
            Penetration Tester & Full Stack Developer
          </h3>
          <h4 className="font-Open Sans text-[14px] text-gray-600">
            Student at BINUS International University
          </h4>

          <a target="_blank" href={cv} download="cv">
            <button className="p-3 mt-4 rounded-[10px] bg-[#152238] text-white font-Inter hover:opacity-95 transition">
              Download CV
            </button>
          </a>
        </div>

        <img
          className="w-[250px] md:w-[350px] rounded-full hover:outline hover:outline-2 hover:outline-[#152238] transition"
          src={portrait}
          alt="Portrait"
        />
      </div>

      {/* About Section */}
      <div
        id="about"
        className="px-6 py-12 text-justify max-w-[900px] w-full shadow-xl mb-[50px] bg-white rounded-[20px] self-start"
      >
        <h1 className="text-2xl font-bold mb-4 text-[#152238]">About Me</h1>
        <p className="text-base leading-relaxed text-gray-700">
          My name is Rafael Angelo Christianto, currently pursuing a double
          degree in Computer Science at BINUS International University situated
          in Jakarta, Indonesia. I am currently studying in semester 5. I am
          passionate in learning deeper into Computer Networks, Penetration
          Testing, and Full Stack Development. Moreover, I am a hard worker and
          a disciplined person, achieving the optimal result in what I do both
          individually or as a group.
        </p>
      </div>


      <section>
        {/* education */}
        <div>

        </div>

        {/* experience */}
        <div>
          
        </div>
      </section>


      {/* Projects Section */}
      <div
        className="mx-auto mb-[50px] shadow-xl w-[900px] px-6 py-12 bg-[#F9FAFB] rounded-[20px]"
        id="projects"
      >
        <h1 className="text-3xl font-bold mb-8 text-center text-[#152238]">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          <div className="bg-white max-w-[400px] w-full p-6 rounded-[20px] shadow-md border border-gray-200">
            <h3 className="font-Hammersmith One text-[22px] font-bold text-[#152238] mb-1">
              E-Commerce Website
            </h3>
            <h5 className="font-Open Sans text-gray-600 mb-4">
              Built with React + Tailwind
            </h5>
            <a target="_blank" href="https://github.com/RafaelAngeloChristianto/e-commerce_website">
              <button className="bg-[#152238] hover:bg-[#1e2e4d] transition-colors text-white px-5 py-2 rounded-[20px] hover:cursor-pointer">
                Visit Project
              </button>
            </a>
          </div>

          <div className="bg-white max-w-[400px] w-full p-6 rounded-[20px] shadow-md border border-gray-200">
            <h3 className="font-Hammersmith One text-[22px] font-bold text-[#152238] mb-1">
              Portfolio Website
            </h3>
            <h5 className="font-Open Sans text-gray-600 mb-4">
              Built with React + Tailwind
            </h5>
            <a target="_blank" href="https://github.com/RafaelAngeloChristianto/portfolio-website">
              <button className="bg-[#152238] hover:bg-[#1e2e4d] transition-colors text-white px-5 py-2 rounded-[20px] hover:cursor-pointer">
                Visit Project
              </button>
            </a>
          </div>


          <div className="bg-white max-w-[400px] w-full p-6 rounded-[20px] shadow-md border border-gray-200">
            <h3 className="font-Hammersmith One text-[22px] font-bold text-[#152238] mb-1">
              Xlerator Website
            </h3>
            <h5 className="font-Open Sans text-gray-600 mb-4">
              Built with React + Tailwind
            </h5>
            <a target="_blank" href="https://github.com/RafaelAngeloChristianto/portfolio-website">
              <button className="bg-[#152238] hover:bg-[#1e2e4d] transition-colors text-white px-5 py-2 rounded-[20px] hover:cursor-pointer">
                Visit Project
              </button>
            </a>
          </div>

        </div>
      </div>

      {/* Contact Section */}
      <div
        className="shadow-xl mb-[50px] px-6 py-6 rounded-[20px] bg-white w-full md:w-fit self-end"
        id="contact"
      >
        <h1 className="text-2xl font-bold mb-2 font-Inter text-[#152238]">
          Contact Me
        </h1>

        <h4 className="text-sm text-gray-600 mb-2">
          ✉️ angelorafael0508@gmail.com
        </h4>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=angelorafael0508@gmail.com"
        >
          <button className="w-[170px] h-[35px] text-[12px] font-Inter bg-white text-gray-800 rounded-md mt-2 border border-gray-300 hover:bg-gray-100 transition hover:cursor-pointer">
            Contact Me Here!
          </button>
        </a>

        <div className="flex flex-col gap-3 justify-center items-start mt-6 text-gray-700 text-sm">
          <a
            className="flex items-center gap-2"
            href="https://github.com/RafaelAngeloChristianto"
            target="_blank"
          >
            <SiGithub className="text-lg" />
            <span>RafaelAngeloChristianto</span>
          </a>

          <a
            className="flex items-center gap-2"
            href="https://www.linkedin.com/in/rafaaelangelo/"
            target="_blank"
          >
            <SiLinkedin className="text-lg" />
            <span>rafaaelangelo</span>
          </a>

          <a
            href="https://www.instagram.com/rafaaelangelo"
            target="_blank"
            className="flex items-center gap-2"
          >
            <SiInstagram className="text-lg" />
            <span>rafaaelangelo</span>
          </a>

          <a
            href="https://www.tiktok.com/@rafaaelangelo"
            target="_blank"
            className="flex items-center gap-2"
          >
            <SiTiktok className="text-lg" />
            <span>rafaaelangelo</span>
          </a>

          <a
            href="https://wa.me/6281319727350?text=urlencodedtext"
            target="_blank"
            className="flex items-center gap-2"
          >
            <SiWhatsapp className="text-lg" />
            <span>+62 813 1972 7350</span>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};


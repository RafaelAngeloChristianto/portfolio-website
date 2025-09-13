import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

import portrait from "../assets/portrait.jpg";
import cv from "../assets/Rafael Angelo - CV.pdf";

import {
  SiInstagram,
  SiTiktok,
  SiLinkedin,
  SiGithub,
  SiWhatsapp,
  SiGmail,
} from "react-icons/si";

export const HomeScreen: React.FC = () => {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 scroll-smooth">
      <NavBar />

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-center items-center gap-12 px-6 py-24 md:py-32 max-w-6xl mx-auto"
      >
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1F2A44] font-Hammersmith-One mb-3">
            Rafael Angelo Christianto
          </h1>
          <h3 className="text-xl md:text-2xl text-gray-700 font-Open-Sans mb-1">
            Penetration Tester & Full Stack Developer
          </h3>
          <h4 className="text-md md:text-lg text-gray-500 font-Open-Sans mb-6">
            Student at BINUS International University
          </h4>

          <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 justify-center md:justify-start">
            <a target="_blank" href={cv} download="cv">
              <button className="px-6 py-3 bg-[#1F2A44] text-white rounded-lg font-Inter shadow-md hover:shadow-lg hover:scale-105 transition-transform hover:cursor-pointer">
                Download CV
              </button>
            </a>
            <Link to="/certifications">
              <button className="px-6 py-3 bg-white text-[#1F2A44] border border-gray-300 rounded-lg font-Inter shadow-md hover:shadow-lg hover:scale-105 transition-transform hover:cursor-pointer ">
                Certifications
              </button>
            </Link>
          </div>
        </div>

        <motion.img
          src={portrait}
          alt="Portrait"
          decoding="async"
          initial={{ opacity: 0 }}
          animate={imgLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          onLoad={() => setImgLoaded(true)}
          className="w-64 md:w-80 lg:w-96 rounded-full border-4 border-gray-200 shadow-xl hover:scale-105 transition-transform"
        />
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 py-16 bg-white rounded-2xl shadow-lg mb-16"
      >
        <h2 className="text-3xl font-bold font-Halant text-[#1F2A44] mb-6 text-center md:text-left">
          About Me
        </h2>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg font-Nunito text-justify">
          My name is Rafael Angelo Christianto, currently pursuing a double
          degree in Computer Science at BINUS International University situated
          in Jakarta, Indonesia. I am currently studying in semester 5. I am
          passionate about diving deeper into Computer Networks, Penetration
          Testing, and Full Stack Development. Moreover, I am a hardworking and
          disciplined person, achieving optimal results both individually and in
          groups.
        </p>
      </motion.section>

      {/* Education & Experience Section */}
      <motion.section
        className="flex flex-col lg:flex-row justify-center items-start gap-10 max-w-6xl mx-auto mb-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Education */}
        <div className="bg-white shadow-lg rounded-2xl p-8 flex-1">
          <h2 className="text-2xl font-bold text-[#1F2A44] font-Halant mb-6">
            Educations
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-Roboto font-semibold">
                Lilin Bangsa Intercultural School
              </h3>
              <p className="font-Open-Sans text-gray-600">Science</p>
              <span className="text-gray-400 text-sm">
                July 2020 - May 2023
              </span>
            </div>
            <div>
              <h3 className="font-Roboto font-semibold">
                BINUS International University
              </h3>
              <p className="font-Open-Sans text-gray-600">Computer Science</p>
              <span className="text-gray-400 text-sm">
                September 2023 - June 2026
              </span>
            </div>
            <div>
              <h3 className="font-Roboto font-semibold">RMIT University</h3>
              <p className="font-Open-Sans text-gray-600">Computer Science</p>
              <span className="text-gray-400 text-sm">
                September 2026 - June 2027
              </span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-white shadow-lg rounded-2xl p-8 flex-1">
          <h2 className="text-2xl font-bold text-[#1F2A44] font-Halant mb-6">
            Experiences
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-Roboto font-semibold">Student Committee</h3>
              <p className="font-Open-Sans text-gray-600">
                Lilin Bangsa Intercultural School
              </p>
              <span className="text-gray-400 text-sm">
                September 2022 - May 2023
              </span>
            </div>
            <div>
              <h3 className="font-Roboto font-semibold">
                Entrepreneurship Finalist
              </h3>
              <p className="font-Open-Sans text-gray-600">
                BINUS International University
              </p>
              <span className="text-gray-400 text-sm">
                September 2024 - January 2025
              </span>
            </div>
            <div>
              <h3 className="font-Roboto font-semibold">Freshmen Partner</h3>
              <p className="font-Open-Sans text-gray-600">
                BINUS International University
              </p>
              <span className="text-gray-400 text-sm">
                September 2025 - May 2026
              </span>
            </div>
            <div>
              <h3 className="font-Roboto font-semibold">Frontend Web Developer</h3>
              <p className="font-Open-Sans text-gray-600">Xlerator</p>
              <span className="text-gray-400 text-sm">July 2025 - August 2025</span>
            </div>
            <div>
              <h3 className="font-Roboto font-semibold">Frontend Web Developer</h3>
              <p className="font-Open-Sans text-gray-600">Oh My Cake</p>
              <span className="text-gray-400 text-sm">August 2025 - August 2025</span>
            </div>
            <div>
              <h3 className="font-Roboto font-semibold">BINUS English Club Speech Talent</h3>
              <p className="font-Open-Sans text-gray-600">BINUS University</p>
              <span className="text-gray-400 text-sm">September 2025 - Present</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 py-16 mb-16"
      >
        <h2 className="text-3xl font-bold text-center text-[#1F2A44] font-Halant mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "E-Commerce Website",
              tech: "React + Tailwind",
              url: "https://github.com/RafaelAngeloChristianto/e-commerce_website",
            },
            {
              title: "Portfolio Website",
              tech: "React + Tailwind",
              url: "https://github.com/RafaelAngeloChristianto/portfolio-website",
            },
            {
              title: "Xlerator Website",
              tech: "React + Tailwind",
              url: "https://github.com/RafaelAngeloChristianto/xlerator_website",
              web: "https://xlerator-indonesia.com",
            },
            {
              title: "Oh My Cake Website",
              tech: "React + Tailwind",
              url: "https://github.com/RafaelAngeloChristianto/ohmycake_website",
              web: "https://yenniohmycake.vercel.app",
            },
            {
              title: "Dentalign Ticketing System",
              tech: "React + Tailwind + Express",
              url: "https://github.com/RafaelAngeloChristianto/dentalign-ticketing-system",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-Hammersmith-One text-2xl font-bold text-[#1F2A44] mb-2">
                  {proj.title}
                </h3>
                <p className="font-Open-Sans text-gray-600 mb-4">
                  Built with {proj.tech}
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <a target="_blank" href={proj.url}>
                  <button className="px-5 py-2 bg-[#1F2A44] text-white rounded-xl hover:bg-[#2B3C5A] transition hover:cursor-pointer">
                    Visit Project
                  </button>
                </a>
                {proj.web && (
                  <a target="_blank" href={proj.web}>
                    <button className="px-5 py-2 bg-[#1F2A44] text-white rounded-xl hover:bg-[#2B3C5A] transition hover:cursor-pointer">
                      Visit Website
                    </button>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 py-16 mb-16 bg-white rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-[#1F2A44] font-Halant mb-6 text-center md:text-left">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-700">
              <SiGmail className="text-lg" />
              <span>rafaaelangelo@gmail.com</span>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rafaaelangelo@gmail.com"
            >
              <button className="w-[180px] h-10 bg-[#1F2A44] text-white rounded-lg hover:bg-[#2B3C5A] transition hover:cursor-pointer">
                Contact Me Here!
              </button>
            </a>
          </div>

          <div className="flex flex-col gap-3 mt-4 md:mt-0">
            {[
              {
                icon: <SiGithub />,
                label: "RafaelAngeloChristianto",
                url: "https://github.com/RafaelAngeloChristianto",
              },
              {
                icon: <SiLinkedin />,
                label: "rafaaelangelo",
                url: "https://www.linkedin.com/in/rafaaelangelo/",
              },
              {
                icon: <SiInstagram />,
                label: "rafaaelangelo",
                url: "https://www.instagram.com/rafaaelangelo",
              },
              {
                icon: <SiTiktok />,
                label: "rafaaelangelo",
                url: "https://www.tiktok.com/@rafaaelangelo",
              },
              {
                icon: <SiWhatsapp />,
                label: "+62 813 1972 7350",
                url: "https://wa.me/6281514383863?text=Hello%20Rafael%2C%20I%20want%20your%20service",
              },
            ].map((social, i) => (
              <a
                key={i}
                target="_blank"
                href={social.url}
                className="flex items-center gap-2 text-gray-700 hover:text-[#1F2A44] transition"
              >
                {social.icon}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

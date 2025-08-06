import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

import portrait from "../assets/portrait.jpg";
import cv from "../assets/Rafael Angelo - CV.pdf";

import { SiInstagram } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";

export const HomeScreen: React.FC = () => {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col min-h-screen scroll-smooth">
        <NavBar />
        {/* Hero Section */}
        <motion.div
          id="home"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start">
              <a target="_blank" href={cv} download="cv">
                <button className="p-3 mt-4 rounded-[10px] bg-[#152238] text-white font-Inter hover:opacity-95 transition hover:cursor-pointer">
                  Download CV
                </button>
              </a>
              <Link to="/certifications">
                <button className="p-3 mt-4 rounded-[10px] bg-white shadow-lg text-[#152238] font-Inter hover:opacity-95 transition hover:cursor-pointer">
                  Certifications
                </button>
              </Link>
            </div>
          </div>

          <motion.img
            initial={{ opacity: 0 }}
            animate={imgLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            onLoad={() => setImgLoaded(true)}
            decoding="async"
            className="w-[250px] md:w-[350px] rounded-full hover:outline hover:outline-2 hover:outline-[#152238]"
            src={portrait}
            alt="Portrait"
          />
        </motion.div>

        {/* About Section */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 py-12 text-justify max-w-[900px] w-full shadow-xl mb-[50px] mt-[50px] bg-white rounded-[20px]" // <-- removed self-center
        >
          <h1 className="text-2xl font-bold mb-4 text-[#152238] font-Inter">
            About Me
          </h1>
          <p className="text-base leading-relaxed text-gray-700">
            My name is Rafael Angelo Christianto, currently pursuing a double
            degree in Computer Science at BINUS International University
            situated in Jakarta, Indonesia. I am currently studying in semester
            5. I am passionate in learning deeper into Computer Networks,
            Penetration Testing, and Full Stack Development. Moreover, I am a
            hard worker and a disciplined person, achieving the optimal result
            in what I do both individually or as a group.
          </p>
        </motion.div>
        {/* Education & Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-center items-center gap-8 font mb-[50px] px-4"
        >
          {/* Education */}
          <div className="w-full max-w-[300px] shadow-xl px-5 py-12 rounded-[20px]">
            <h1 className="text-2xl font-bold mb-4 text-[#152238] font-Inter">
              Educations
            </h1>

            <div>
              <h2 className="font-Roboto">Lilin Bangsa Intercultural School</h2>
              <h3>Science</h3>
              <h4 className="text-gray-600 text-[14px]">
                July 2020 - May 2023
              </h4>
            </div>
            <br />
            <div>
              <h2 className="font-Roboto">BINUS International University</h2>
              <h3>Computer Science</h3>
              <h4 className="text-gray-600 text-[14px]">
                September 2023 - June 2026
              </h4>
            </div>
            <br />
            <div>
              <h2 className="font-Roboto">RMIT University</h2>
              <h3>Computer Science</h3>
              <h4 className="text-gray-600 text-[14px]">
                September 2026 - June 2027
              </h4>
            </div>
          </div>

          {/* Experience */}
          <div className="w-full max-w-[300px] shadow-xl px-5 py-12 rounded-[20px]">
            <h1 className="text-2xl font-bold mb-4 text-[#152238] font-Inter">
              Experiences
            </h1>

            <div>
              <h2 className="font-Roboto">Student Committee</h2>
              <h3>Lilin Bangsa Intercultural School</h3>
              <h4 className="text-gray-600 text-[14px]">
                September 2022 - May 2023
              </h4>
            </div>
            <br />
            <div>
              <h2 className="font-Roboto">Entrepreneurship Finalist</h2>
              <h3>BINUS International University</h3>
              <h4 className="text-gray-600 text-[14px]">
                September 2024 - January 2025
              </h4>
            </div>
            <br />
            <div>
              <h2 className="font-Roboto">Freshmen Partner</h2>
              <h3>BINUS International University</h3>
              <h4 className="text-gray-600 text-[14px]">
                September 2025 - May 2026
              </h4>
            </div>
            <br />
            <div>
              <h2 className="font-Roboto">Web Developer</h2>
              <h3>Xlerator</h3>
              <h4 className="text-gray-600 text-[14px]">July 2025 - Finish</h4>
            </div>
          </div>
        </motion.section>
        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-[50px] shadow-xl w-full max-w-[900px] px-6 py-12 bg-[#F9FAFB] rounded-[20px]"
          id="projects"
        >
          <h1 className="text-3xl font-bold mb-8 text-center text-[#152238] font-Inter">
            Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
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
              },
              {
                title: "Dentalign Ticketing System",
                tech: "React + Tailwind + Express",
                url: "https://github.com/RafaelAngeloChristianto/dentalign-ticketing-system",
              },
            ].map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white max-w-[400px] w-full p-6 rounded-[20px] shadow-md border border-gray-200"
              >
                <h3 className="font-Hammersmith One text-[22px] font-bold text-[#152238] mb-1">
                  {proj.title}
                </h3>
                <h5 className="font-Open Sans text-gray-600 mb-4">
                  Built with {proj.tech}
                </h5>
                <a target="_blank" href={proj.url}>
                  <button className="bg-[#152238] hover:bg-[#1e2e4d] transition-colors text-white px-5 py-2 rounded-[20px] hover:cursor-pointer">
                    Visit Project
                  </button>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="shadow-xl font-Inter mb-[50px] px-6 py-6 rounded-[20px] bg-white w-full md:w-fit self-end"
          id="contact"
        >
          <h1 className="text-2xl font-bold mb-2 font-Inter text-[#152238]">
            Contact Me
          </h1>

          <h4 className="text-sm text-gray-600 mb-2">
            ✉️ rafaaelangelo@gmail.com
          </h4>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rafaaelangelo@gmail.com"
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
              href="https://wa.me/6281514383863?text=Hello%20Rafael%2C%20I%20want%20your%20service%20to%20create%20a%20website%20like%20..."
              target="_blank"
              className="flex items-center gap-2"
            >
              <SiWhatsapp className="text-lg text-[#B91C1C]" />
              <span>+62 813 1972 7350</span>
            </a>
          </div>
        </motion.div>
        <Footer />
      </div>
    </div>
  );
};

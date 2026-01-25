import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBriefcase, FaUserFriends } from "react-icons/fa";

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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 scroll-smooth">
      <NavBar />

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-center items-center gap-16 px-8 py-28 md:py-36 max-w-7xl mx-auto"
      >
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-800 font-Inter mb-4 tracking-tight leading-tight"
          >
            Rafael Angelo
            <span className="block font-extralight text-slate-600">
              Christianto
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-3"
          >
            <h3 className="text-xl md:text-2xl text-slate-700 font-Inter font-medium tracking-wide">
              Penetration Tester & Full Stack Developer
            </h3>
            <h4 className="text-lg md:text-xl text-slate-500 font-Inter font-light">
              Student at BINUS International University
            </h4>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row sm:gap-4 gap-4 justify-center md:justify-start pt-8"
          >
            <a target="_blank" href={cv} download="cv">
              <button className="group px-8 py-4 bg-slate-800 text-white rounded-xl font-Inter font-medium shadow-lg hover:shadow-2xl hover:bg-slate-900 transition-all duration-300 transform hover:-translate-y-1">
                <span className="group-hover:tracking-wide transition-all duration-300">
                  Download CV
                </span>
              </button>
            </a>
            <Link to="/certifications">
              <button className="group px-8 py-4 bg-white text-slate-800 border-2 border-slate-200 rounded-xl font-Inter font-medium shadow-lg hover:shadow-2xl hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-1">
                <span className="group-hover:tracking-wide transition-all duration-300">
                  Certifications
                </span>
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={imgLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-stone-300 rounded-full blur-2xl opacity-30 scale-110"></div>
          <img
            src={portrait}
            alt="Portrait"
            decoding="async"
            onLoad={() => setImgLoaded(true)}
            className="relative w-72 md:w-80 lg:w-96 rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-all duration-500 hover:shadow-3xl"
          />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-8 py-20 mb-20"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-100 p-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-light text-slate-800 font-Inter mb-8 text-center tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-600 leading-relaxed text-lg md:text-xl font-Inter font-light text-center max-w-4xl mx-auto"
          >
            My name is Rafael Angelo Christianto, currently pursuing a double
            degree in Computer Science at BINUS International University
            situated in Jakarta, Indonesia. I am currently studying in semester
            5. I am passionate about diving deeper into Computer Networks,
            Penetration Testing, and Full Stack Development. Moreover, I am a
            hardworking and disciplined person, achieving optimal results both
            individually and in groups.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-8 mb-20"
      >
        <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl border border-slate-100 p-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-light text-slate-800 font-Inter mb-8 text-center tracking-tight"
          >
            Skills & Interests
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Penetration Testing",
              "Network Forensics",
              "Incident Response",
              "Cyber Security",
            ].map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="px-6 py-3 bg-slate-800 text-white rounded-2xl text-sm md:text-base font-Inter font-medium shadow-lg hover:shadow-xl hover:scale-105 hover:bg-slate-900 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education & Achievements Section */}
      <motion.section
        className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-7xl mx-auto mb-20 px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl border border-slate-100 p-10 flex-1"
        >
          <h2 className="text-3xl font-light text-slate-800 font-Inter mb-8 tracking-tight">
            Education
          </h2>
          <div className="space-y-8">
            {[
              {
                school: "Lilin Bangsa Intercultural School",
                field: "Science",
                period: "July 2020 - May 2023",
              },
              {
                school: "Timedoor Academy",
                field: "Computer Science",
                period: "April 2021 - May 2023",
              },
              {
                school: "BINUS International University",
                field: "Computer Science",
                period: "Sep 2023 - Jun 2026",
              },
              {
                school: "Royal Melbourne Institute of Technology",
                field: "Computer Science",
                period: "Sep 2026 - Jun 2027",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="border-l-4 border-slate-200 pl-6 hover:border-slate-400 transition-colors duration-300"
              >
                <h3 className="font-Inter font-medium text-slate-800 text-lg">
                  {edu.school}
                </h3>
                <p className="font-Inter text-slate-600 font-light">
                  {edu.field}
                </p>
                <span className="text-slate-400 text-sm font-Inter">
                  {edu.period}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl border border-slate-100 p-10 flex-1"
        >
          <h2 className="text-3xl font-light text-slate-800 font-Inter mb-8 tracking-tight">
            Achievements
          </h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-l-4 border-slate-200 pl-6 hover:border-slate-400 transition-colors duration-300"
            >
              <h3 className="font-Inter font-medium text-slate-800 text-lg">
                Entrepreneurship Finalist
              </h3>
              <p className="font-Inter text-slate-600 font-light">
                BINUS International University
              </p>
              <span className="text-slate-400 text-sm font-Inter">
                September 2024 – January 2025
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Work & Organizational Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl border border-slate-100 p-10"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-slate-800 rounded-xl">
                <FaBriefcase className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-800 font-Inter tracking-tight">
                Work Experience
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  role: "Frontend Web Developer",
                  company: "Xlerator",
                  period: "July 2025 – August 2025",
                },
                {
                  role: "Frontend Web Developer",
                  company: "Oh My Cake",
                  period: "August 2025",
                },
                {
                  role: "Team Promotion",
                  company: "BINUS Business School",
                  period: "January 2026 - February 2026",
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="flex items-start gap-6 p-6 bg-gradient-to-r from-white to-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-3 h-full bg-gradient-to-b from-slate-800 to-slate-600 rounded-full group-hover:from-blue-600 group-hover:to-blue-400 transition-all duration-300"></div>
                  <div className="flex-1">
                    <h3 className="font-Inter font-semibold text-slate-800 text-lg md:text-xl mb-1">
                      {exp.role}
                    </h3>
                    <p className="font-Inter text-slate-600 mb-2">
                      {exp.company}
                    </p>
                    <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-Inter font-medium">
                      {exp.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Organizational Experience */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl border border-slate-100 p-10"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-slate-800 rounded-xl">
                <FaUserFriends className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-800 font-Inter tracking-tight">
                Organizational Experience
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  role: "Student Committee",
                  company: "Lilin Bangsa Intercultural School",
                  period: "September 2022 – May 2023",
                },
                {
                  role: "BINUS Modeling Club Activist",
                  company: "BINUS International University",
                  period: "September 2023 - May 2024",
                },
                {
                  role: "Freshmen Partner",
                  company: "BINUS International University",
                  period: "September 2025 - May 2026",
                },
                {
                  role: "BINUS English Club Speech Talent",
                  company: "BINUS University",
                  period: "September 2025 - Present",
                },
                {
                  role: "BINUS Youth Festival Committee",
                  company: "BINUS University",
                  period: "October 2025 - December 2025",
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="flex items-start gap-6 p-6 bg-gradient-to-r from-white to-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-3 h-full bg-gradient-to-b from-slate-800 to-slate-600 rounded-full group-hover:from-green-600 group-hover:to-green-400 transition-all duration-300"></div>
                  <div className="flex-1">
                    <h3 className="font-Inter font-semibold text-slate-800 text-lg md:text-xl mb-1">
                      {exp.role}
                    </h3>
                    <p className="font-Inter text-slate-600 mb-2">
                      {exp.company}
                    </p>
                    <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-Inter font-medium">
                      {exp.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 py-20 mb-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-light text-slate-800 font-Inter mb-12 text-center tracking-tight"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
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
              tech: "React + Tailwind + Express + MongoDB (MERN)",
              url: "https://github.com/RafaelAngeloChristianto/dentalign-ticketing-system",
            },
            {
              title: "Dynamic Malware Analysis - njRAT 0.6.4",
              tech: "FLARE VM",
              url: "/projects/DynamicMalwareAnalysis_RafaelAngeloChristianto.pdf",
            },
            {
              title: "File Type Scanner with Magic Numbers",
              tech: "Python",
              url: "/projects/FileTypeScanner_RafaelAngeloChristianto.pdf",
            },
            {
              title: "Vulnerable Machine",
              tech: "Ubuntu Desktop",
              url: "projects/TaskRunner_RafaelAngeloChristianto.pdf",
            },
            {
              title: "DEFCON CTF Packet Capture Analysis",
              tech: "Wireshark, Zeek, tshark, NetworkMiner",
              url: "/projects/DEFCONCTF_PacketCaptureAnalysis_RafaelAngeloChristianto.pdf",
            },
            {
              title: "Windows Host Intrusion Detection System (HIDS)",
              tech: "Python",
              url: "/projects/HIDS_RafaelAngeloChristianto.pdf",
            },
            {
              title: "Implementing Firewall for Portfolio Website",
              tech: "Cloudflare",
              url: "projects/PortfolioFirewall_RafaelAngeloChristianto.pdf",
            },
            {
              title: "Behavior Based Malware Behavior",
              tech:"Python",
              url: "/projects/BehaviorBasedMalwareDetector_RafaelAngeloChristianto.pdf",
            }
          ].map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl border border-slate-100 p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              <div>
                <h3 className="font-Inter font-medium text-slate-800 text-xl mb-3">
                  {proj.title}
                </h3>
                <p className="font-Inter text-slate-600 font-light mb-6">
                  Built with {proj.tech}
                </p>
              </div>

              <div className="flex flex-row gap-3">
                <a target="_blank" rel="noopener noreferrer" href={proj.url}>
                  <button className="px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition-all duration-300 font-Inter font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Visit Project
                  </button>
                </a>

                {proj.web && (
                  <a target="_blank" rel="noopener noreferrer" href={proj.web}>
                    <button className="px-6 py-3 bg-white text-slate-800 border-2 border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 font-Inter font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-8 py-20 mb-20"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-100 p-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-light text-slate-800 font-Inter mb-8 text-center tracking-tight"
          >
            Contact Me
          </motion.h2>

          <div className="flex flex-col md:flex-row md:items-center gap-8 justify-center">
            <div className="flex flex-col gap-4 items-center md:items-start">
              <div className="flex items-center gap-3 text-slate-700">
                <SiGmail className="text-xl" />
                <span className="font-Inter font-medium">
                  rafaaelangelo@gmail.com
                </span>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rafaaelangelo@gmail.com"
              >
                <button className="px-8 py-4 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition-all duration-300 font-Inter font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Contact Me Here!
                </button>
              </a>
            </div>

            <div className="flex flex-col gap-4 items-center md:items-start">
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
                  url: "https://wa.me/6281319727350?text=Hello%20Rafael%2C%20I%20want%20your%20service",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  target="_blank"
                  href={social.url}
                  className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition-colors duration-300 font-Inter"
                >
                  <span className="text-xl">{social.icon}</span>
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBriefcase, FaUserFriends } from "react-icons/fa";
import { sherlocks } from "../data/sherlocks";

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
  const [sherlockFilter, setSherlockFilter] = React.useState("All");
  const [difficultyFilter, setDifficultyFilter] = React.useState("All");

  return (
    <div className="flex flex-col min-h-screen page-bg scroll-smooth">
      <NavBar />
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 px-6 md:px-8 pt-28 pb-20 md:pt-32 md:pb-28 max-w-6xl mx-auto"
      >
        <div className="text-center md:text-left md:w-1/2 space-y-5 order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="section-eyebrow"
          >
            Melbourne, Australia · RMIT University
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand tracking-tight leading-[1.1]"
          >
            Rafael Angelo
            <span className="block font-normal text-slate-500 mt-1">
              Christianto
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="space-y-2 max-w-lg mx-auto md:mx-0"
          >
            <p className="text-lg md:text-xl text-slate-700 font-medium">
              Cybersecurity &amp; Computer Science
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              Double degree student at BINUS International and RMIT, building
              skills in security analysis, engineering, and full-stack development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-4"
          >
            <a target="_blank" href={cv} download="cv" rel="noopener noreferrer">
              <button type="button" className="btn-primary w-full sm:w-auto">
                Download CV
              </button>
            </a>
            <Link to="/certifications">
              <button type="button" className="btn-secondary w-full sm:w-auto">
                Certifications
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={imgLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative order-1 md:order-2 shrink-0"
        >
          <img
            src={portrait}
            alt="Rafael Angelo Christianto"
            decoding="async"
            onLoad={() => setImgLoaded(true)}
            className="w-56 md:w-64 lg:w-72 aspect-square object-cover rounded-2xl border border-slate-200/80 shadow-soft"
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
        className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-20"
      >
        <div className="surface-card p-8 md:p-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-eyebrow mb-3"
          >
            About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-semibold text-brand mb-6 tracking-tight"
          >
            Background
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 leading-relaxed text-base md:text-lg"
          >
            I am Rafael Angelo Christianto, pursuing a double degree in Computer
            Science through BINUS International University and RMIT University.
            I am currently based in Melbourne at RMIT, where I am deepening my
            work in security analysis, digital forensics, and secure software
            engineering. I bring a disciplined, collaborative approach to
            technical projects—whether in internships, competitions, or
            independent research.
          </motion.p>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-6 md:px-8 pb-16 md:pb-20"
      >
        <div className="text-center mb-8">
          <p className="section-eyebrow mb-2">Focus areas</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand tracking-tight">
            Skills &amp; interests
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5">
          {[
            "Cyber Security",
            "Penetration Testing",
            "Network Forensics",
            "Incident Response",
            "Cloud Security",
          ].map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="px-4 py-2 text-sm text-slate-700 bg-white border border-slate-200 rounded-full"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>
      {/* Education & Achievements Section */}
      <motion.section
        className="flex flex-col lg:flex-row justify-center items-stretch gap-6 max-w-6xl mx-auto mb-16 md:mb-20 px-6 md:px-8"
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
          className="surface-card p-8 md:p-9 flex-1"
        >
          <h2 className="text-xl font-semibold text-brand mb-6 tracking-tight">
            Education
          </h2>
          <div className="space-y-6">
            {[
              {
                school: "Royal Melbourne Institute of Technology (RMIT)",
                field: "Information Technology — Double degree",
                period: "Jul 2026 – Present",
                current: true,
              },
              {
                school: "BINUS International University",
                field: "Computer Science — Double degree",
                period: "Sep 2023 – Jun 2026",
                current: false,
              },
              {
                school: "Timedoor Academy",
                field: "Computer Science",
                period: "Apr 2021 – May 2023",
                current: false,
              },
              {
                school: "Lilin Bangsa Intercultural School",
                field: "Science",
                period: "Jul 2020 – May 2023",
                current: false,
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="border-l-2 border-brand/20 pl-4"
              >
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <h3 className="font-medium text-slate-800 text-base">
                    {edu.school}
                  </h3>
                  {edu.current && (
                    <span className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full bg-brand text-white">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-slate-600 text-sm">{edu.field}</p>
                <span className="text-slate-400 text-xs">{edu.period}</span>
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
          className="surface-card p-8 md:p-9 flex-1"
        >
          <h2 className="text-xl font-semibold text-brand mb-6 tracking-tight">
            Achievements
          </h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="border-l-2 border-brand/20 pl-4"
            >
              <h3 className="font-medium text-slate-800 text-base">
                Entrepreneurship Finalist
              </h3>
              <p className="text-slate-600 text-sm">BINUS International University</p>
              <span className="text-slate-400 text-xs">
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
        className="max-w-6xl mx-auto px-6 md:px-8 mb-16 md:mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="surface-card p-8 md:p-9"
          >
            <div className="flex items-center gap-3 mb-8">
              <FaBriefcase className="text-lg text-slate-400" />
              <h2 className="text-xl font-semibold text-brand tracking-tight">
                Work experience
              </h2>
            </div>

            <div className="space-y-5">
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
                  role: "Frontend Web Developer",
                  company: "Bloome Flowers",
                  period: "November 2025 - January 2026",
                },
                {
                  role: "Team Promotion",
                  company: "BINUS Business School",
                  period: "January 2026",
                },
                {
                  role: "Quality Assurance Intern",
                  company: "WOM Finance",
                  period: "February 2026 - June 2026",
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                  className="pb-5 border-b border-brand/10 last:border-0 last:pb-0"
                >
                  <h3 className="font-medium text-slate-800">{exp.role}</h3>
                  <p className="text-slate-600 text-sm mt-0.5">{exp.company}</p>
                  <span className="text-slate-400 text-xs mt-1 inline-block">
                    {exp.period}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="surface-card p-8 md:p-9"
          >
            <div className="flex items-center gap-3 mb-8">
              <FaUserFriends className="text-lg text-slate-400" />
              <h2 className="text-xl font-semibold text-brand tracking-tight">
                Organizational experience
              </h2>
            </div>

            <div className="space-y-5">
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
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                  className="pb-5 border-b border-brand/10 last:border-0 last:pb-0"
                >
                  <h3 className="font-medium text-slate-800">{exp.role}</h3>
                  <p className="text-slate-600 text-sm mt-0.5">{exp.company}</p>
                  <span className="text-slate-400 text-xs mt-1 inline-block">
                    {exp.period}
                  </span>
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
        className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20 mb-16 md:mb-20"
      >
        <div className="text-center mb-10">
          <p className="section-eyebrow mb-2">Portfolio</p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold text-brand tracking-tight"
          >
            Projects
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Dynamic Malware Analysis - njRAT 0.6.4",
              tech: "FLARE VM",
              url: "/projects/DynamicMalwareAnalysis_RafaelAngeloChristianto.pdf",
              web: "",
            },
            {
              title: "File Type Scanner with Magic Numbers",
              tech: "Python",
              url: "/projects/FileTypeScanner_RafaelAngeloChristianto.pdf",
              web: "",
            },
            {
              title: "Vulnerable Machine",
              tech: "Ubuntu Server",
              url: "projects/TaskRunner_RafaelAngeloChristianto.pdf",
              web: "",
            },
            {
              title: "DEFCON CTF Packet Capture Analysis",
              tech: "Wireshark, Zeek, tshark, NetworkMiner",
              url: "/projects/DEFCONCTF_PacketCaptureAnalysis_RafaelAngeloChristianto.pdf",
              web: "",
            },
            {
              title: "Windows Host Intrusion Detection System (HIDS)",
              tech: "Python",
              url: "/projects/HIDS_RafaelAngeloChristianto.pdf",
              web: "",
            },
            {
              title:
                "Static Malware Analysis - TRAFFIC ANALYSIS EXERCISE: IT'S A TRAP!",
              tech: "Wireshark",
              url: "/projects/StaticMalwareAnalysis_RafaelAngeloChristianto.pdf",
            },
            {
              title: "Implementing Firewall for Portfolio Website",
              tech: "Cloudflare",
              url: "projects/PortfolioFirewall_RafaelAngeloChristianto.pdf",
              web: "",
            },
            {
              title: "Behavior Based Malware Detector",
              tech: "Python",
              url: "/projects/BehaviorBasedMalwareDetector_RafaelAngeloChristianto.pdf",
              web: "",
            },
            {
              title: "Nmap Packet Capture Lab",
              tech: "Kali Linux and Ubuntu Desktop",
              url: "/projects/NmapPacketCaptureLab_RafaelAngeloChristianto.pdf",
              web: "",
            },
            {
              title: "Security Monitoring & Threat Detection using Wazuh SIEM",
              tech: "Wazuh SIEM",
              url: "projects/WazuhLab_RafaelAngeloChristianto.pdf",
              web: "",
            },
            {
              title: "Static Malware Analysis - XWorm From Email Attachment",
              tech: "Wireshark",
              url: "projects/XWormFromEmailAttachment_RafaelAngeloChristianto.pdf",
            },
            {
              title: "Static Malware Analysis - SmartApeSG ClickFix",
              tech: "Wireshark",
              url: "projects/StaticMalwareAnalysis - SmartApeSGClickFix - RafaelAngeloChristianto.pdf",
            },
            {
              title: "Secure Authentication Lab",
              tech: "React, Express, and MySQL",
              url: "projects/SecureAuthLab_RafaelAngeloChristianto.pdf",
            },
            {
              title: "Static Malware Analysis - Xloader (Formbook) Infection",
              tech: "Wireshark",
              url: "projects/XloaderFormbook_RafaelAngeloChristianto.pdf",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.03 * i }}
              className="surface-card p-6 flex flex-col justify-between h-full hover:border-slate-300 transition-colors duration-200"
            >
              <div>
                <h3 className="font-medium text-brand text-base leading-snug mb-2">
                  {proj.title}
                </h3>
                <p className="text-slate-500 text-sm mb-5">{proj.tech}</p>
              </div>

              <div className="flex flex-row gap-2">
                <a target="_blank" rel="noopener noreferrer" href={proj.url}>
                  <button type="button" className="btn-primary text-xs px-4 py-2">
                    View PDF
                  </button>
                </a>

                {proj.web && (
                  <a target="_blank" rel="noopener noreferrer" href={proj.web}>
                    <button type="button" className="btn-secondary text-xs px-4 py-2">
                      Website
                    </button>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Hack The Box Sherlock Writeups Section */}
      <motion.section
        id="sherlocks"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20 mb-16 md:mb-20"
      >
        <div className="text-center mb-10">
          <p className="section-eyebrow mb-2">Hack The Box</p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold text-brand tracking-tight"
          >
            Sherlock writeups
          </motion.h2>
        </div>

        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {["All", "DFIR", "SOC", "Threat Intelligence"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSherlockFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors duration-200 cursor-pointer ${
                  sherlockFilter === cat
                    ? "bg-brand text-white border-brand"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {["All", "Very Easy", "Easy"].map((diff) => (
              <button
                key={diff}
                type="button"
                onClick={() => setDifficultyFilter(diff)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors duration-200 cursor-pointer ${
                  difficultyFilter === diff
                    ? "bg-slate-800 text-white border-slate-800"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sherlocks
            .filter(
              (s) =>
                (sherlockFilter === "All" || s.category === sherlockFilter) &&
                (difficultyFilter === "All" ||
                  s.difficulty === difficultyFilter),
            )
            .slice(0, 8)
            .map((sherlock, i) => (
              <motion.a
                key={i}
                href={sherlock.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.04 * i }}
                className="group surface-card p-5 flex flex-col gap-3 hover:border-slate-300 transition-colors duration-200"
              >
                <h3 className="font-medium text-brand text-sm leading-snug group-hover:text-brand-muted">
                  {sherlock.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full border text-slate-500 border-slate-200 bg-slate-50">
                    {sherlock.difficulty}
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full border text-slate-600 border-slate-200 bg-white">
                    {sherlock.category}
                  </span>
                </div>
                <span className="mt-auto text-xs text-slate-400 group-hover:text-brand transition-colors">
                  Read writeup →
                </span>
              </motion.a>
            ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/sherlocks">
            <button type="button" className="btn-secondary">
              View all Sherlocks
            </button>
          </Link>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-20 mb-8"
      >
        <div className="surface-card p-8 md:p-10 text-center md:text-left">
          <p className="section-eyebrow mb-2">Contact</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand mb-6 tracking-tight">
            Let&apos;s connect
          </h2>

          <div className="flex flex-col md:flex-row md:items-start gap-10 justify-between">
            <div className="flex flex-col gap-4 items-center md:items-start">
              <div className="flex items-center gap-2 text-slate-700 text-sm">
                <SiGmail className="text-lg text-slate-400" />
                <span>rafaaelangelo@gmail.com</span>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rafaaelangelo@gmail.com"
              >
                <button type="button" className="btn-primary">
                  Send email
                </button>
              </a>
            </div>

            <div className="flex flex-col gap-3 items-center md:items-start text-sm">
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
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.url}
                  className="flex items-center gap-2.5 text-slate-600 hover:text-brand transition-colors"
                >
                  <span className="text-base text-slate-400">{social.icon}</span>
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

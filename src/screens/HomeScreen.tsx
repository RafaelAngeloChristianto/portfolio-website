import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBriefcase, FaUserFriends } from "react-icons/fa";
import { sherlocks } from "../data/sherlocks";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import portrait from "../assets/portrait.jpg";
import bgImage from "../assets/bg_image.jpg";
import cv from "../assets/Rafael Angelo - CV.pdf";
import {
  SiInstagram, SiTiktok, SiLinkedin, SiGithub, SiWhatsapp, SiGmail,
} from "react-icons/si";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

const skills = [
  { label: "Cyber Security", group: "Security", icon: "🛡️" },
  { label: "Penetration Testing", group: "Security", icon: "🔍" },
  { label: "Network Forensics", group: "Security", icon: "🌐" },
  { label: "Incident Response", group: "Security", icon: "🚨" },
  { label: "Cloud Security", group: "Security", icon: "☁️" },
  { label: "Digital Forensics", group: "Security", icon: "🔬" },
  { label: "React / TypeScript", group: "Dev", icon: "⚛️" },
  { label: "Python", group: "Dev", icon: "🐍" },
  { label: "Java", group: "Dev", icon: "☕" },
  { label: "MySQL", group: "Dev", icon: "🗄️" },
];

const projects = [
  { title: "Dynamic Malware Analysis — njRAT 0.6.4", tech: "FLARE VM", url: "/projects/DynamicMalwareAnalysis_RafaelAngeloChristianto.pdf" },
  { title: "File Type Scanner with Magic Numbers", tech: "Python", url: "/projects/FileTypeScanner_RafaelAngeloChristianto.pdf" },
  { title: "Vulnerable Machine", tech: "Ubuntu Server", url: "/projects/TaskRunner_RafaelAngeloChristianto.pdf" },
  { title: "DEFCON CTF Packet Capture Analysis", tech: "Wireshark · Zeek · tshark", url: "/projects/DEFCONCTF_PacketCaptureAnalysis_RafaelAngeloChristianto.pdf" },
  { title: "Windows Host Intrusion Detection System", tech: "Python", url: "/projects/HIDS_RafaelAngeloChristianto.pdf" },
  { title: "Static Malware Analysis — IT'S A TRAP!", tech: "Wireshark", url: "/projects/StaticMalwareAnalysis_RafaelAngeloChristianto.pdf" },
  { title: "Implementing Firewall for Portfolio Website", tech: "Cloudflare", url: "/projects/PortfolioFirewall_RafaelAngeloChristianto.pdf" },
  { title: "Behavior Based Malware Detector", tech: "Python", url: "/projects/BehaviorBasedMalwareDetector_RafaelAngeloChristianto.pdf" },
  { title: "Nmap Packet Capture Lab", tech: "Kali Linux · Ubuntu", url: "/projects/NmapPacketCaptureLab_RafaelAngeloChristianto.pdf" },
  { title: "Security Monitoring & Threat Detection", tech: "Wazuh SIEM", url: "/projects/WazuhLab_RafaelAngeloChristianto.pdf" },
  { title: "Static Malware Analysis — XWorm Email Attachment", tech: "Wireshark", url: "/projects/XWormFromEmailAttachment_RafaelAngeloChristianto.pdf" },
  { title: "Static Malware Analysis — SmartApeSG ClickFix", tech: "Wireshark", url: "/projects/StaticMalwareAnalysis - SmartApeSGClickFix - RafaelAngeloChristianto.pdf" },
  { title: "Secure Authentication Lab", tech: "React · Express · MySQL", url: "/projects/SecureAuthLab_RafaelAngeloChristianto.pdf" },
  { title: "Static Malware Analysis — Xloader (Formbook)", tech: "Wireshark", url: "/projects/XloaderFormbook_RafaelAngeloChristianto.pdf" },
];

const socials = [
  { icon: <SiGithub />, label: "RafaelAngeloChristianto", url: "https://github.com/RafaelAngeloChristianto" },
  { icon: <SiLinkedin />, label: "rafaaelangelo", url: "https://www.linkedin.com/in/rafaaelangelo/" },
  { icon: <SiInstagram />, label: "rafaaelangelo", url: "https://www.instagram.com/rafaaelangelo" },
  { icon: <SiTiktok />, label: "rafaaelangelo", url: "https://www.tiktok.com/@rafaaelangelo" },
  { icon: <SiWhatsapp />, label: "+62 813 1972 7350", url: "https://wa.me/6281319727350?text=Hello%20Rafael%2C%20I%20want%20your%20service" },
];

export const HomeScreen: React.FC = () => {
  const [imgLoaded, setImgLoaded] = React.useState(false);
  const [sherlockFilter, setSherlockFilter] = React.useState("All");
  const [difficultyFilter, setDifficultyFilter] = React.useState("All");

  return (
    <div className="flex flex-col min-h-screen page-bg scroll-smooth">
      <NavBar />

      {/* ── Hero ── */}
      <section id="home" className="relative w-full overflow-hidden">
        {/* bg image — right-aligned, fades left and bottom */}
        <div className="absolute -top-16 bottom-0 right-0 w-[55%] pointer-events-none select-none hidden md:block">
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-[center_top] opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fb] via-[#f8f9fb]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f8f9fb]" />
        </div>

        <div className="relative flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 px-6 md:px-8 pt-28 pb-20 md:pt-36 md:pb-28 max-w-6xl mx-auto">
          <div className="text-center md:text-left md:w-1/2 space-y-5 order-2 md:order-1">
            <motion.p {...fadeUp(0.1)} className="section-eyebrow">
              Melbourne, Australia · RMIT University
            </motion.p>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-brand tracking-tight leading-[1.1]"
            >
              Rafael Angelo
              <span className="block font-normal text-slate-400 mt-1">Christianto</span>
            </motion.h1>

            <motion.div {...fadeUp(0.32)} className="space-y-2 max-w-lg mx-auto md:mx-0">
              <p className="text-lg text-slate-700 font-medium">
                Cybersecurity &amp; Computer Science
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Double degree student at BINUS International and RMIT, building skills in
                security analysis, digital forensics, and full-stack development.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp(0.44)}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2"
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
            initial={{ opacity: 0, scale: 0.97 }}
            animate={imgLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-1 md:order-2 shrink-0"
          >
            <img
              src={portrait}
              alt="Rafael Angelo Christianto"
              decoding="async"
              onLoad={() => setImgLoaded(true)}
              className="portrait-blend w-56 md:w-72 lg:w-80 object-cover object-top"
            />
          </motion.div>
        </div>
      </section>

      {/* ── About ── */}
      <motion.section
        id="about"
        {...inView()}
        className="max-w-3xl mx-auto px-6 md:px-8 pb-16 md:pb-20"
      >
        <div className="surface-card p-8 md:p-10">
          <p className="section-eyebrow mb-3">About</p>
          <h2 className="text-2xl font-semibold text-brand mb-5 tracking-tight">Background</h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            I am Rafael Angelo Christianto, pursuing a double degree in Computer Science
            through BINUS International University and RMIT University. Currently based in
            Melbourne at RMIT, I am deepening my work in security analysis, digital forensics,
            and secure software engineering. I bring a disciplined, collaborative approach to
            technical projects — whether in internships, competitions, or independent research.
          </p>
        </div>
      </motion.section>

      {/* ── Skills ── */}
      <motion.section {...inView(0.05)} className="max-w-3xl mx-auto px-6 md:px-8 pb-16 md:pb-20">
        <div className="text-center mb-8">
          <p className="section-eyebrow mb-2">Focus areas</p>
          <h2 className="text-2xl font-semibold text-brand tracking-tight">Skills &amp; interests</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              {...inView(0.04 * i)}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-1.5 text-xs font-medium rounded-full border transition-all cursor-default flex items-center gap-1.5 ${
                skill.group === "Security"
                  ? "text-brand border-brand/20 bg-brand/5 hover:bg-brand/10"
                  : "text-slate-600 border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <span>{skill.icon}</span>
              {skill.label}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* ── Education & Achievements ── */}
      <motion.section
        {...inView()}
        className="flex flex-col lg:flex-row justify-center items-stretch gap-6 max-w-6xl mx-auto mb-16 md:mb-20 px-6 md:px-8"
      >
        <motion.div {...inView(0.1)} className="surface-card p-8 md:p-9 flex-1">
          <h2 className="text-lg font-semibold text-brand mb-6 tracking-tight">Education</h2>
          <div className="space-y-5">
            {[
              { school: "Royal Melbourne Institute of Technology (RMIT)", field: "Information Technology — Double degree", period: "Jul 2026 – Present", current: true },
              { school: "BINUS International University", field: "Computer Science — Double degree", period: "Sep 2023 – Jun 2026", current: false },
              { school: "Timedoor Academy", field: "Computer Science", period: "Apr 2021 – May 2023", current: false },
              { school: "Lilin Bangsa Intercultural School", field: "Science", period: "Jul 2020 – May 2023", current: false },
            ].map((edu, i) => (
              <div key={i} className="border-l-2 border-brand/15 pl-4">
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <h3 className="font-medium text-slate-800 text-sm">{edu.school}</h3>
                  {edu.current && (
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-brand text-white">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-slate-500 text-xs">{edu.field}</p>
                <span className="text-slate-400 text-xs">{edu.period}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...inView(0.2)} className="surface-card p-8 md:p-9 flex-1">
          <h2 className="text-lg font-semibold text-brand mb-6 tracking-tight">Achievements</h2>
          <div className="border-l-2 border-brand/15 pl-4">
            <h3 className="font-medium text-slate-800 text-sm">Entrepreneurship Finalist</h3>
            <p className="text-slate-500 text-xs">BINUS International University</p>
            <span className="text-slate-400 text-xs">September 2024 – January 2025</span>
          </div>
        </motion.div>
      </motion.section>

      {/* ── Work & Org Experience ── */}
      <motion.section
        {...inView()}
        className="max-w-6xl mx-auto px-6 md:px-8 mb-16 md:mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div {...inView(0.1)} className="surface-card p-8 md:p-9">
            <div className="flex items-center gap-2.5 mb-7">
              <FaBriefcase className="text-slate-400" />
              <h2 className="text-lg font-semibold text-brand tracking-tight">Work experience</h2>
            </div>
            <div className="space-y-5">
              {[
                { role: "Frontend Web Developer", company: "Xlerator", period: "July 2025 – August 2025" },
                { role: "Frontend Web Developer", company: "Oh My Cake", period: "August 2025" },
                { role: "Frontend Web Developer", company: "Bloome Flowers", period: "November 2025 – January 2026" },
                { role: "Team Promotion", company: "BINUS Business School", period: "January 2026" },
                { role: "Quality Assurance Intern", company: "WOM Finance", period: "February 2026 – June 2026" },
              ].map((exp, i) => (
                <div key={i} className="pb-5 border-b border-slate-100 last:border-0 last:pb-0">
                  <h3 className="font-medium text-slate-800 text-sm">{exp.role}</h3>
                  <p className="text-slate-500 text-xs mt-0.5">{exp.company}</p>
                  <span className="text-slate-400 text-xs mt-0.5 inline-block">{exp.period}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...inView(0.2)} className="surface-card p-8 md:p-9">
            <div className="flex items-center gap-2.5 mb-7">
              <FaUserFriends className="text-slate-400" />
              <h2 className="text-lg font-semibold text-brand tracking-tight">Organizational experience</h2>
            </div>
            <div className="space-y-5">
              {[
                { role: "Student Committee", company: "Lilin Bangsa Intercultural School", period: "September 2022 – May 2023" },
                { role: "BINUS Modeling Club Activist", company: "BINUS International University", period: "September 2023 – May 2024" },
                { role: "Freshmen Partner", company: "BINUS International University", period: "September 2025 – May 2026" },
                { role: "BINUS English Club Speech Talent", company: "BINUS University", period: "September 2025 – Present" },
                { role: "BINUS Youth Festival Committee", company: "BINUS University", period: "October 2025 – December 2025" },
              ].map((exp, i) => (
                <div key={i} className="pb-5 border-b border-slate-100 last:border-0 last:pb-0">
                  <h3 className="font-medium text-slate-800 text-sm">{exp.role}</h3>
                  <p className="text-slate-500 text-xs mt-0.5">{exp.company}</p>
                  <span className="text-slate-400 text-xs mt-0.5 inline-block">{exp.period}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Projects ── */}
      <motion.section
        id="projects"
        {...inView()}
        className="max-w-6xl mx-auto px-6 md:px-8 pb-16 md:pb-20"
      >
        <div className="text-center mb-10">
          <p className="section-eyebrow mb-2">Portfolio</p>
          <h2 className="text-2xl font-semibold text-brand tracking-tight">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              {...inView(0.03 * i)}
              whileHover={{ y: -3 }}
              className="surface-card p-6 flex flex-col justify-between h-full hover:border-brand/20 transition-all duration-200 group"
            >
              <div>
                <div className="w-6 h-0.5 bg-brand/20 group-hover:bg-brand/60 rounded-full mb-3 transition-colors duration-300" />
                <h3 className="font-medium text-brand text-sm leading-snug mb-1.5">{proj.title}</h3>
                <p className="text-slate-400 text-xs mb-5">{proj.tech}</p>
              </div>
              <a target="_blank" rel="noopener noreferrer" href={proj.url}>
                <button type="button" className="btn-primary text-xs px-4 py-2">
                  View PDF
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Sherlocks ── */}
      <motion.section
        id="sherlocks"
        {...inView()}
        className="max-w-6xl mx-auto px-6 md:px-8 pb-16 md:pb-20"
      >
        <div className="text-center mb-10">
          <p className="section-eyebrow mb-2">Hack The Box</p>
          <h2 className="text-2xl font-semibold text-brand tracking-tight">Sherlock writeups</h2>
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
                (difficultyFilter === "All" || s.difficulty === difficultyFilter)
            )
            .slice(0, 8)
            .map((sherlock, i) => (
              <motion.a
                key={i}
                href={sherlock.url}
                target="_blank"
                rel="noopener noreferrer"
                {...inView(0.04 * i)}
                whileHover={{ y: -2 }}
                className="group surface-card p-5 flex flex-col gap-3 hover:border-brand/20 transition-all duration-200"
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
            <button type="button" className="btn-secondary">View all Sherlocks</button>
          </Link>
        </div>
      </motion.section>

      {/* ── Contact ── */}
      <motion.section
        id="contact"
        {...inView()}
        className="max-w-3xl mx-auto px-6 md:px-8 pb-16 md:pb-20"
      >
        <div className="surface-card p-8 md:p-10">
          <p className="section-eyebrow mb-2">Contact</p>
          <h2 className="text-2xl font-semibold text-brand mb-8 tracking-tight">
            Let&apos;s connect
          </h2>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5 text-slate-600 text-sm">
                <SiGmail className="text-slate-400 shrink-0" />
                <span>rafaaelangelo@gmail.com</span>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rafaaelangelo@gmail.com"
              >
                <button type="button" className="btn-primary">Send email</button>
              </a>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  {...inView(0.05 * i)}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={s.url}
                  className="flex items-center gap-2.5 text-slate-500 hover:text-brand transition-colors"
                >
                  <span className="text-slate-400">{s.icon}</span>
                  <span>{s.label}</span>
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

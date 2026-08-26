import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      title: "BINUS Youth Festival 2025 - Committee",
      file: "E-Certificate - Panitia - Rafael Angelo Christianto_page-0001.jpg",
    },
    {
      title: "AWS Academy Graduate - Generative AI Foundations",
      file: "AWSAcademy12NEW20251117-31-yftdmw_page-0001.jpg",
    },
    {
      title: "Youth Today X Join AIESEC 2025",
      file: "Rafael Angelo Christianto - Youth Today x JOIN AIESEC - AIESEC in BINUS E-Certificate_page-0001.jpg",
    },
    { title: "Python Basic Certificate", file: "python_basic certificate.jpg" },
    { title: "CSS Certificate", file: "css certificate.jpg" },
    { title: "Java Basic Certificate", file: "java_basic certificate.jpg" },
    {
      title: "Google Colab Python - Certificate of Completion",
      file: "Python Google Colab.png",
    },
    {
      title: "E-Certificate FYP",
      file: "E-certificate FYP  RAFAEL ANGELO CHRISTIANTO_page-0001.jpg",
    },
    {
      title: "BINUS HIMTI TECHNO - Participant",
      file: "BINUS HIMTI TECHNO.jpg",
    },
    {
      title: "Timedoor AI Developer Level",
      file: "Timedoor AI Developer Level.jpg",
    },
    {
      title: "Timedoor Android Apps Developer",
      file: "Timedoor Android Apps Developer Level.jpg",
    },
    {
      title: "Timedoor Web Developer Level",
      file: "Timedoor Web Developer Level.jpg",
    },
    {
      title: "Timedoor Intermediate - Game",
      file: "Timedoor Intermediate - Game Development Level.jpg",
    },
    { title: "Timedoor Beginner Level", file: "Timedoor Beginner Level.jpg" },
  ];

  return (
    <div className="flex flex-col min-h-screen page-bg">
      <NavBar />

      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-28 pb-10 text-center">
        <p className="section-eyebrow mb-2">Credentials</p>
        <h1 className="text-2xl md:text-3xl font-semibold text-brand tracking-tight mb-2">
          Certifications
        </h1>
        <p className="text-slate-500 text-sm max-w-md mx-auto">
          Achievements and learning milestones across cybersecurity, development, and leadership.
        </p>
        <span className="inline-block mt-4 text-xs font-medium tracking-wide text-slate-500 border border-slate-200 rounded-full px-3 py-1 bg-white">
          {certificates.length} certificates
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 pb-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="cursor-pointer surface-card overflow-hidden group hover:border-brand/20 transition-all duration-200"
              whileHover={{ y: -3 }}
              onClick={() => setSelectedImage(cert.file)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={`/certificates/${cert.file}`}
                  alt={cert.title}
                  className="object-cover w-full h-52 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-Inter font-medium bg-slate-900/70 px-3 py-1.5 rounded-full">
                    View Certificate
                  </span>
                </div>
              </div>
              <div className="p-4 flex items-start gap-2 border-t border-slate-100">
                <HiOutlineBadgeCheck className="text-slate-400 text-base mt-0.5 shrink-0" />
                <h2 className="text-sm font-medium text-slate-700 leading-snug">
                  {cert.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
            >
              <IoClose className="text-white text-xl" />
            </button>
            <motion.img
              src={`/certificates/${selectedImage}`}
              alt="Enlarged certificate"
              className="max-w-4xl max-h-[88vh] rounded-xl shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

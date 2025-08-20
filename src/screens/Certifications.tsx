import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
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
    <div className="min-h-screen bg-gray-50 text-gray-900 mt-[50px]">
      <NavBar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-center">Certifications</h1>
        <p className="text-lg text-center mb-10">
          A showcase of my achievements and learning milestones over the years.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="cursor-pointer rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(cert.file)}
            >
              <img
                src={`/certificates/${cert.file}`}
                alt={cert.title}
                className="object-cover w-full h-56"
              />
              <div className="p-4 bg-white">
                <h2 className="text-sm font-semibold text-center">
                  {cert.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={`/certificates/${selectedImage}`}
                alt="Enlarged certificate"
                className="max-w-4xl max-h-[90vh] rounded-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

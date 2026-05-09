import React from "react";
import { motion } from "framer-motion";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { sherlocks } from "../data/sherlocks";

export const SherlockScreen: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = React.useState("All");
  const [difficultyFilter, setDifficultyFilter] = React.useState("All");

  const filtered = sherlocks.filter(
    (s) =>
      (categoryFilter === "All" || s.category === categoryFilter) &&
      (difficultyFilter === "All" || s.difficulty === difficultyFilter)
  );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
      <NavBar />
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 py-28 mb-20 w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-light text-brand font-Inter mb-4 text-center tracking-tight"
        >
          Hack The Box Sherlock Writeups
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-slate-500 font-Inter font-light mb-12"
        >
          {filtered.length} writeup{filtered.length !== 1 ? "s" : ""}
        </motion.p>

        {/* Filters */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "DFIR", "SOC", "Threat Intelligence"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-Inter font-medium border transition-all duration-300 cursor-pointer ${
                  categoryFilter === cat
                    ? cat === "SOC"
                      ? "bg-blue-600 text-white border-blue-600"
                      : cat === "Threat Intelligence"
                      ? "bg-purple-600 text-white border-purple-600"
                      : cat === "DFIR"
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-brand text-white border-brand"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "Very Easy", "Easy"].map((diff) => (
              <button
                key={diff}
                onClick={() => setDifficultyFilter(diff)}
                className={`px-5 py-2 rounded-full text-sm font-Inter font-medium border transition-all duration-300 cursor-pointer ${
                  difficultyFilter === diff
                    ? "bg-slate-700 text-white border-slate-700"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((sherlock, i) => (
            <motion.a
              key={i}
              href={sherlock.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              whileHover={{ y: -4 }}
              className="group bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl border border-slate-100 p-8 flex flex-col gap-4 hover:shadow-2xl hover:border-brand/30 transition-all duration-300 cursor-pointer"
            >
              <h3 className="font-Inter font-medium text-brand text-xl group-hover:text-brand-light transition-colors duration-300">
                {sherlock.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-Inter font-medium px-2.5 py-1 rounded-full border text-slate-500 border-slate-200 bg-slate-50">
                  {sherlock.difficulty}
                </span>
                <span
                  className={`text-xs font-Inter font-medium px-2.5 py-1 rounded-full border w-fit ${
                    sherlock.category === "SOC"
                      ? "text-blue-600 border-blue-200 bg-blue-50"
                      : sherlock.category === "Threat Intelligence"
                      ? "text-purple-600 border-purple-200 bg-purple-50"
                      : "text-emerald-600 border-emerald-200 bg-emerald-50"
                  }`}
                >
                  {sherlock.category}
                </span>
              </div>
              <span className="mt-auto text-sm font-Inter text-slate-400 group-hover:text-slate-600 transition-colors duration-300">
                Read Writeup →
              </span>
            </motion.a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-400 font-Inter mt-20">
            No writeups match the selected filters.
          </p>
        )}
      </motion.section>
      <Footer />
    </div>
  );
};

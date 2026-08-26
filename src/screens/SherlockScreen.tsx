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
    <div className="flex flex-col min-h-screen page-bg">
      <NavBar />

      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-28 pb-10 w-full text-center">
        <p className="section-eyebrow mb-2">Hack The Box</p>
        <h1 className="text-2xl md:text-3xl font-semibold text-brand tracking-tight mb-2">
          Sherlock writeups
        </h1>
        <p className="text-slate-500 text-sm">
          {filtered.length} writeup{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 pb-16 w-full">
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {["All", "DFIR", "SOC", "Threat Intelligence"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors duration-200 cursor-pointer ${
                  categoryFilter === cat
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
          {filtered.map((sherlock, i) => (
            <motion.a
              key={i}
              href={sherlock.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.03 * i }}
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

        {filtered.length === 0 && (
          <p className="text-center text-slate-400 text-sm mt-16">
            No writeups match the selected filters.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

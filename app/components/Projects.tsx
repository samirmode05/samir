"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";

export default function Projects() {
  const projects = [
    {
      title: "NEP Timetable Generator (SIH)",
      tech: "React, FastAPI, Supabase, DEAP",
      desc: "Genetic Algorithm based timetable engine reducing scheduling time by 95%."
    },
    {
      title: "Portfolio Backtesting Engine",
      tech: "Python, Pandas, NumPy",
      desc: "Backtesting tool with OOP design, Sharpe Ratio, max drawdown & performance metrics."
    },
    {
      title: "LLM Automation Agent – IIT Madras",
      tech: "Python, LLM Models, SQLite",
      desc: "Natural language automation agent executing CI/CD tasks using GPT-based models."
    }
  ];

  return (
    <section id="projects" className="px-8 py-24 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900 border-gray-700 p-6 hover:border-blue-500 hover:scale-[1.03] transition rounded-xl">

              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-blue-400 text-sm mb-3">{p.tech}</p>
              <p className="text-gray-300 text-sm">{p.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiNumpy,
  SiPandas,
  SiSqlite,
  SiPostgresql,
  SiMongodb,
  SiGit
  
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <SiPython size={28} /> },
    { name: "C++", icon: <SiCplusplus size={28} /> },
    { name: "React.js", icon: <SiReact size={28} /> },
    { name: "Next.js", icon: <SiNextdotjs size={28} /> },
    { name: "FastAPI", icon: <SiFastapi size={28} /> },
    { name: "NumPy", icon: <SiNumpy size={28} /> },
    { name: "Pandas", icon: <SiPandas size={28} /> },
    { name: "SQLite", icon: <SiSqlite size={28} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={28} /> },
    { name: "MongoDB", icon: <SiMongodb size={28} /> },
    { name: "Git", icon: <SiGit size={28} /> },
    { name: "Power BI", icon: <SiPandas size={28} /> }
  ];

  // duplicate array to create infinite loop effect
  const loopSkills = [...skills, ...skills];

  return (
    <section id="skills" className="px-8 py-20">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="pointer-events-none absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-black"></div>
<div className="pointer-events-none absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-black"></div>


      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{
            x: ["0%", "-100%"]
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        >
          {loopSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-900 border border-gray-700 px-6 py-3 rounded-full min-w-fit"
            >
              {skill.icon}
              <span className="text-white">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

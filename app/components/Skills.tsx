"use client";

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
    { name: "Git", icon: <SiGit size={28} /> }
  ];

  return (
    <section id="skills" className="px-8 py-20 relative">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="marquee-container">
        <div className="marquee-track">

          {/* FIRST COPY */}
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-900 border border-gray-700 px-6 py-3 rounded-full min-w-fit mx-3"
            >
              {skill.icon}
              <span className="text-white">{skill.name}</span>
            </div>
          ))}

          {/* SECOND COPY (REQUIRED FOR PERFECT LOOP) */}
          {skills.map((skill, index) => (
            <div
              key={`copy-${index}`}
              className="flex items-center gap-3 bg-gray-900 border border-gray-700 px-6 py-3 rounded-full min-w-fit mx-3"
            >
              {skill.icon}
              <span className="text-white">{skill.name}</span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Samir<span className="text-blue-500">.</span>
        </h1>

        <div className="flex gap-6 text-gray-300">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-white transition text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

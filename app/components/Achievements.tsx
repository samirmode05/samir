"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements" className="px-8 py-24 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Achievements</h2>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="list-disc ml-6 text-gray-300 text-lg space-y-3"
      >
        <li>FBHMF Scholarship – ₹4,00,000 (Only 476 students across India)</li>
        <li>AIR 8984 in JEE Advanced 2023</li>
      </motion.ul>
    </section>
  );
}

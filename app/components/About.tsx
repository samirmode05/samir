"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-8 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-gray-300 leading-relaxed text-lg"
      >
        I'm a Computer Science Engineering student  <span className="text-blue-400 font-semibold"></span>  
        <br></br>and pursuing a BS in Data Science from <span className="text-blue-400 font-semibold">IIT M</span>.  
        I enjoy building intelligent systems, automation tools, and full-stack projects that solve real-world problems.
        
        <br /><br />
        My interests lie in:
        <br />
        • Scalable Web Applications  
        • AI Automation Agents  
        • Data Analysis & Engineering  
        • Real-time Systems  
      </motion.p>
    </section>
    
  );
}

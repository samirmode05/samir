"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";


export default function Hero() {
  return (
    <section className="min-h-screen pt-28 pb-4 flex flex-col items-center text-center px-6">

      {/* Social Icons */}
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="flex gap-5 mb-4"
>
  <a href="https://www.linkedin.com/in/samir-mode-iitm24f?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="text-gray-300 hover:text-white transition">
    <FaLinkedin size={26} />
  </a>

  <a href="https://github.com/samirmode05" target="_blank" className="text-gray-300 hover:text-white transition">
    <FaGithub size={26} />
  </a>

  <a href="https://leetcode.com/u/samirfbtl05/" target="_blank" className="text-gray-300 hover:text-white transition">
    <SiLeetcode size={26} />
  </a>

  <a href="https://www.instagram.com/samirr.mode_/?hl=en" target="_blank" className="text-gray-300 hover:text-white transition">
    <FaInstagram size={26} />
  </a>

  <a href="https://x.com/samir_mode7378?s=21" target="_blank" className="text-gray-300 hover:text-white transition">
    <FaXTwitter size={26} />
  </a>
</motion.div>


      {/* Citi Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="relative z-20 inline-flex items-center gap-2 px-4 py-2 mb-4 bg-blue-600/20 border border-blue-500/40 rounded-2xl backdrop-blur-lg">

          <Image
            src="/citi.png"
            alt="Citi Logo"
            width={28}
            height={28}
            className="rounded-sm"
          />
          <span className="text-blue-400 text-sm font-semibold text-center leading-tight">
            Upcoming Summer Analyst Intern — Citi Bank
          </span>
        </div>
      </motion.div>

      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <p className="text-gray-400 mb-1 text-sm">
          Electronics & Data Science Student
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Samir <span className="text-blue-500">Mode</span>
        </h1>

        <p className="text-base text-gray-300 mt-3 leading-relaxed break-normal">

          I build intelligent systems in{" "}
          <span className="font-semibold text-white">
            <Typewriter
              words={[
                "AI Automation",
                "Full-Stack Development",
                "Data Engineering",
                "Real-Time Systems",
              ]}
              loop={0}
            />
          </span>
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-sm justify-center"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-full border border-white/20 text-center hover:bg-white hover:text-black transition"
        >
          See All Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-full bg-blue-500 text-center hover:bg-blue-600 transition"
        >
          Contact Now
        </a>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="mt-8"
      >
        <Image
          src="/samir.jpg"
          width={220}
          height={220}
          alt="Samir Mode"
          className="rounded-full border border-gray-700 shadow-xl"
        />
      </motion.div>
    </section>
  );
}

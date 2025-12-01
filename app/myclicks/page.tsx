"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/clicks/click.jpg",
  "/clicks/click2.jpg",
];

export default function MyClicks() {
  const [selected, setSelected] = useState<number | null>(null);

  const nextImage = () => {
    if (selected === null) return;
    setSelected((selected + 1) % images.length);
  };

  const prevImage = () => {
    if (selected === null) return;
    setSelected((selected - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-10">My Clicks</h1>

      {/* Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            className="rounded-lg w-full h-40 object-cover cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(i)}
          />
        ))}
      </div>

      {/* Fullscreen View */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Image */}
            <motion.img
              key={selected}
              src={images[selected]}
              className="max-h-[80%] max-w-[90%] rounded-xl shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />

            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-3xl text-white"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-4 text-4xl text-white"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-4 text-4xl text-white"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

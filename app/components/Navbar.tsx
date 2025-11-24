"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Samir<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-gray-300 text-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-white transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu size={28} className="text-white" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-black/80 backdrop-blur-xl text-white border-none w-[70%] rounded-l-2xl pt-10"
            >
              <div className="flex flex-col gap-8 text-lg pl-4 mt-6">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setOpen(false); // CLOSE MENU
                      const section = document.querySelector(item.href);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      } else {
                        window.location.href = item.href;
                      }
                    }}
                    className="text-left hover:text-blue-400 transition"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}

"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative border-b-[3px]  flex justify-between items-center w-screen px-6 sm:px-24 bg-gray-100">
      <div className="h-18 flex justify-between items-center w-full">
        {/* Desktop Links */}
        <div className="hidden md:flex justify-center items-center gap-8 text-2xl font-bold">
          <motion.a
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            href="#about"
          >
            About
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            href="#projects"
          >
            Projects
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            href="#skills"
          >
            Skills
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            href="#contract"
          >
            Contract
          </motion.a>
        </div>

        {/* Logo / Right Section */}
        <a href="#hero" className="flex justify-center items-center gap-2 text-2xl font-bold">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            SETHASAT.COM
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="w-6 h-6 rounded-full border-[3px] bg-black"
          ></motion.div>
        </a>

        {/* Hamburger (Mobile only) */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-gray-100 md:hidden z-50 flex flex-col gap-6 py-6 px-6 text-xl font-bold border-b-[3px]"
          >
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

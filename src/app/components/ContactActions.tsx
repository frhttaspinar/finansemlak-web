"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { BUSINESS } from "../lib/site";

export default function ContactActions() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Instagram — Orijinal gradient renklerinde ikon */}
      <motion.a
        href={BUSINESS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram hesabımız"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="group w-14 h-14 rounded-full flex items-center justify-center border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#ig-gradient-footer)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="group-hover:scale-110 transition-transform duration-300"
        >
          <defs>
            <linearGradient id="ig-gradient-footer" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="25%" stopColor="#e6683c" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="75%" stopColor="#cc2366" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </motion.a>

      {/* WhatsApp danışma hattı — marka laciverdinde birincil eylem */}
      <motion.a
        href={BUSINESS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="group relative flex items-center gap-3 overflow-hidden px-7 py-4 rounded-full font-medium text-white bg-brand-navy shadow-md hover:shadow-xl hover:bg-brand-navy-dark transition-all duration-300 border border-brand-navy"
      >
        <FaWhatsapp className="relative h-5 w-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
        <span className="relative tracking-wide">WhatsApp&apos;tan Bilgi Alın</span>
      </motion.a>
    </div>
  );
}

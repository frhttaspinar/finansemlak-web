"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function DeveloperCredit() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex items-center justify-center text-sm text-slate-500 mt-2">
      Bu site&nbsp;
      <motion.a
        href="https://www.dokuyazilim.com/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 px-1 inline-flex items-center"
      >
        <motion.span
          animate={
            reduceMotion
              ? undefined
              : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
          }
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="bg-[length:200%_auto] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 drop-shadow-sm"
        >
          Doku Yazılım
        </motion.span>

        {/* Arkada hafif, tatlı bir parlama (glow) efekti */}
        {!reduceMotion && (
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 bg-blue-500/20 blur-md rounded-full -z-10"
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </motion.a>
      &nbsp;tarafından yapılmıştır.
    </div>
  );
}

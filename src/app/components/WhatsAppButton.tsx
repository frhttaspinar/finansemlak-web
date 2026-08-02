"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { BUSINESS } from "../lib/site";

export default function WhatsAppButton() {
  // Hareket azaltma tercihinde sürekli tekrarlayan dalga/nabız animasyonları kapatılır
  const reduceMotion = useReducedMotion();

  return (
    <div className="fixed bottom-8 right-8 md:bottom-10 md:right-10 z-50">
      <div className="relative flex items-center justify-center">
        {/* Arkadan yayılan dalgalar (ripple / ping effect) */}
        {!reduceMotion &&
          [0, 1.5, 3].map((delay) => (
            <motion.span
              key={delay}
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-[#25D366]"
              animate={{ scale: [1, 2], opacity: [0.3, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeOut",
                delay,
              }}
            />
          ))}

        <motion.a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile iletişime geçin"
          className="relative w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40"
          // Sürekli devam eden yumuşak nabız
          animate={reduceMotion ? undefined : { scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          // Üzerine gelince nabız durur, buton belirginleşir
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.92 }}
        >
          {/* Etrafında dönen ışık hüzmesi */}
          {!reduceMotion && (
            <motion.span
              aria-hidden="true"
              className="absolute -inset-1 rounded-full border-2 border-white/20 border-t-white"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          )}
          <FaWhatsapp className="relative h-9 w-9" aria-hidden="true" />
        </motion.a>
      </div>
    </div>
  );
}

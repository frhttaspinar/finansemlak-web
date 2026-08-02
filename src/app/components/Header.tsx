"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import NavLinks from "./NavLinks";
import BrandLogo from "./BrandLogo";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { BUSINESS } from "../lib/site";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  // ESC ile menüyü kapat ve odağı menü butonuna geri ver
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 min-h-[100px]">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              aria-label={`${BUSINESS.name} — ana sayfa`}
              className="inline-flex items-center"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <BrandLogo variant="header" priority className="h-16 md:h-[72px] lg:h-20" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <NavLinks />
          </div>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Link href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram hesabımız" className="group flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#ig-gradient-header)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300">
                <defs>
                  <linearGradient id="ig-gradient-header" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>

            <motion.a
              href={`tel:${BUSINESS.phone}`}
              aria-label={`Telefon ile arayın: ${BUSINESS.phoneDisplay}`}
              className="group relative flex items-center gap-2 bg-white text-brand-navy px-5 py-2 h-10 rounded-full font-semibold border border-slate-200 hover:border-brand-navy/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ml-1 lg:ml-2"
            >
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { rotate: [0, -15, 15, -15, 15, 0], scale: [1, 1.1, 1] }
                }
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
                className="bg-green-50 text-green-600 p-1.5 rounded-full group-hover:bg-green-100 transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
              </motion.div>
              <span className="text-sm lg:text-base">{BUSINESS.phoneDisplay}</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              ref={menuButtonRef}
              type="button"
              className="text-slate-900 hover:text-slate-600 p-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobil menü"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg flex flex-col">
              <p className="px-3 pt-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-navy">
                {BUSINESS.shortName}
              </p>
              <Link href="#hakkimizda" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md">Hakkımızda</Link>
              <Link href="#hizmetlerimiz" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md">Hizmetlerimiz</Link>
              <Link href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md">Blog</Link>
              <Link
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 w-full block text-center bg-brand-navy hover:bg-brand-navy-dark transition-colors text-white px-6 py-3 rounded-full font-medium shadow-sm"
              >
                WhatsApp&apos;tan İletişime Geçin
              </Link>
              <a
                href={`tel:${BUSINESS.phone}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block text-center border border-slate-200 text-brand-navy px-6 py-3 rounded-full font-semibold"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

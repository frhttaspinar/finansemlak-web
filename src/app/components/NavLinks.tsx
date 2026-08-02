"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "#blog", label: "Blog" },
];

export default function NavLinks() {
  return (
    <nav className="hidden md:flex space-x-8">
      {links.map((link) => (
        <motion.div key={link.href} initial="rest" whileHover="hover" animate="rest">
          <Link
            href={link.href}
            className="relative inline-block text-slate-600 hover:text-slate-900 transition-colors font-medium py-1"
          >
            {link.label}
            {/* Hover'da soldan sağa zarifçe beliren altın çizgi */}
            <motion.span
              className="absolute left-0 -bottom-0.5 h-0.5 w-full origin-left rounded-full bg-brand-gold"
              variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}

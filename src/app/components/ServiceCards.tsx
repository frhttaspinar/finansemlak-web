"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Home as HomeIcon,
  Map,
  Building2,
  Calculator,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { services, type ServiceIconKey } from "../lib/services";

/** Veri katmanındaki ikon anahtarlarının bileşen karşılıkları. */
const icons: Record<ServiceIconKey, LucideIcon> = {
  home: HomeIcon,
  map: Map,
  building: Building2,
  calculator: Calculator,
  file: FileText,
};

// Kartların sırayla (stagger) sahneye girmesini yöneten kapsayıcı
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

// Her bir kartın aşağıdan yukarıya yumuşakça süzülerek belirmesi
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServiceCards() {
  // Hareket azaltma tercihinde kartlar animasyonsuz, doğrudan görünür gelir
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {services.map((service) => {
        const Icon = icons[service.icon];
        const href = `/hizmetler/${service.slug}`;

        return (
          <motion.article
            key={service.slug}
            data-animate
            variants={reduceMotion ? undefined : cardVariants}
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-slate-100 flex flex-col ${
              service.wide ? "lg:col-span-2" : ""
            }`}
          >
            {/* Hizmeti anlatan görsel */}
            <Link
              href={href}
              aria-label={`${service.cardTitle} sayfasını inceleyin`}
              className="relative block w-full h-48 overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                // Geniş kart iki sütuna yayıldığı için daha büyük bir genişlik ister
                sizes={
                  service.wide
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {/* Görselin üzerinde yüzen marka ikon rozeti (dekoratif) */}
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-navy shadow-lg">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
            </Link>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                <Link href={href} className="transition-colors hover:text-brand-navy">
                  {service.cardTitle}
                </Link>
              </h3>
              <p className="flex-grow text-slate-600 leading-relaxed text-sm lg:text-base">
                {service.cardDescription}
              </p>
              <Link
                href={href}
                aria-label={`${service.cardTitle} hizmetini inceleyin`}
                className="mt-6 inline-flex min-h-11 items-center self-start font-semibold text-brand-navy transition-colors hover:text-brand-navy-dark"
              >
                Hizmeti İncele
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

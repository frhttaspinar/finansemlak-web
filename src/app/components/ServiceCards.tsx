"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Home as HomeIcon,
  Map,
  Building2,
  Calculator,
  FileText,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  wide?: boolean;
};

const services: Service[] = [
  {
    icon: HomeIcon,
    title: "Satılık ve Kiralık Gayrimenkul Danışmanlığı",
    description:
      "İhtiyacınıza ve bütçenize en uygun konut ve yaşam alanlarını bulmanızda profesyonel rehberlik sunuyoruz.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    icon: Map,
    title: "Arsa, Arazi ve Tarla Yatırım Yönetimi",
    description:
      "Geleceğinize güvenle yatırım yapmanız için değer kazanan bölgelerde toprak yatırımı analizi yapıyoruz.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    icon: Building2,
    title: "Ticari Mülk, Dükkan ve Ofis Yönetimi",
    description:
      "İşletmeniz için ideal lokasyonu buluyor, ticari gayrimenkullerinizin en verimli şekilde değerlendirilmesini sağlıyoruz.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    icon: Calculator,
    title: "Gayrimenkul Değerleme ve Ekspertiz",
    description:
      "Mülkünüzün gerçek piyasa değerini, güncel piyasa verileri ve analizlerle en doğru şekilde tespit ediyoruz.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    icon: FileText,
    title: "Tapu ve Kredi Takip Süreçleri Danışmanlığı",
    description:
      "Bürokratik süreçleri sizin adınıza yönetiyor, alım-satım ve kredi işlemlerinizi hızlı ve güvenilir bir şekilde sonuçlandırıyoruz.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    wide: true,
  },
];

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
        const Icon = service.icon;
        return (
          <motion.div
            key={service.title}
            data-animate
            variants={reduceMotion ? undefined : cardVariants}
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-slate-100 flex flex-col ${
              service.wide ? "lg:col-span-2" : ""
            }`}
          >
            {/* Hizmeti anlatan görsel */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
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
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                {service.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
